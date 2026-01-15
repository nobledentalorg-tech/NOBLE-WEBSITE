/* =========================================
   NOBLE DENTAL TRIAGE UI CONTROLLER
   ========================================= */

import { getTriageSummary, getDetailedRecommendation, KB, EXPLAINERS, TREATMENTS, KB_TO_EX } from './js/logic.js';

/* ------------------ tiny utils ------------------ */
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => Array.from(ctx.querySelectorAll(q));
const uniq = arr => [...new Set(arr)];

/* ---------- complaint → knowledge ids map ---------- */
const KB_MAP = {
  tooth_pain_sensitivity: ['pulpitis', 'cracked', 'abscess'],
  swelling_fever: ['abscess', 'pericoronitis'],
  gum_periodontal: ['gingivitis'],
  tmj_muscle: ['tmj'],
  mucosa_others: ['ulcer', 'xerostomia'],
  missing_tooth: ['avulsion'],
  alignment_gap: [], // handled in Triage Summary, no specific KB article linked yet
  wisdomArea: ['pericoronitis'],
  chewingPain: ['cracked', 'pulpitis']
};

/* ----- compute region family (mirrors logic.js) ----- */
function regionFamily(regionId = '') {
  const id = (regionId || '').toLowerCase();
  const m = id.match(/tooth_(\d{2})/);
  if (m) {
    const n = parseInt(m[1], 10);
    const isPrimary = [51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85].includes(n);
    if (!isPrimary) {
      if ([11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43].includes(n)) return 'front_teeth';
      if ([18, 28, 38, 48].includes(n)) return 'wisdom_teeth';
      return 'back_teeth';
    } else {
      if ([51, 52, 53, 61, 62, 63, 71, 72, 73, 81, 82, 83].includes(n)) return 'front_teeth';
      return 'back_teeth';
    }
  }
  if (id.startsWith('gum_') || id.startsWith('gingiva_')) return 'gum_teeth';
  if (id.includes('upper')) return 'upper_quadrant';
  if (id.includes('lower')) return 'lower_quadrant';
  return 'general';
}

/* --------------- intake readers ---------------- */
function readIntake() {
  const age = parseInt($('#pt_age')?.value || '0', 10) || 0;
  const gender = $('#pt_gender')?.value || '';
  const flow = (document.querySelector('input[name="pt_flow"]:checked')?.value) || 'new';
  const isFemaleAdult = gender === 'female' && age >= 18;

  return {
    name: $('#pt_name')?.value?.trim() || '',
    phone: $('#pt_phone')?.value?.trim() || '',
    location: $('#pt_location')?.value || '',
    age, gender, flow,
    pregnancy: isFemaleAdult ? ($('#pt_pregnancy')?.value || '') : '',
    nursing: isFemaleAdult ? !!$('#pt_nursing')?.checked : false,

    postop: {
      procedure: flow === 'postop' ? ($('#pt_postop_proc')?.value || '') : '',
      days: flow === 'postop' ? (parseInt($('#pt_postop_days')?.value || '0', 10) || 0) : 0,
      fever: flow === 'postop' ? !!$('#pt_postop_fever')?.checked : false
    },

    history: $$('.mh:checked').map(x => x.value),
    history_other: $('#mh_other')?.value?.trim() || '',
    meds: $$('.med:checked').map(x => x.value),
    meds_detail: $('#med_details')?.value?.trim() || '',
    duration: $('#symp_duration')?.value || '',
    flags: {
      fever: !!$('#flag_fever')?.checked,
      spread: !!$('#flag_spread')?.checked
    },
    hygiene: $$('.hyg:checked').map(x => x.value)
  };
}

function updateIntakeSummary() {
  const i = readIntake();
  $('#sumName').textContent = i.name || '—';
  $('#sumAge').textContent = i.age ? `${i.age}` : '—';
  $('#sumGender').textContent = i.gender || '—';
  $('#sumDuration').textContent = i.duration || '—';
}
function showPregnancyBlock() {
  const age = parseInt($('#pt_age')?.value || '0', 10) || 0;
  const gender = $('#pt_gender')?.value || '';
  $('#pregnancyBlock').classList.toggle('hidden', !(gender === 'female' && age >= 18));
}
function showPostOpBlock() {
  const flow = (document.querySelector('input[name="pt_flow"]:checked')?.value) || 'new';
  $('#postopBlock').classList.toggle('hidden', flow !== 'postop');
}

/* ----------- SVG binding & tooltip ----------- */
function bindSvgAndRegions() {
  const tooltip = $('#tooltip');
  const jawInput = $('#jawLocation');
  const sumArea = $('#sumArea');
  const svgContainer = $('#inlineSvgContainer');

  // Load SVG and Regions
  return Promise.all([
    fetch('assets/jaw-map-advanced.svg').then(r => r.text()),
    fetch('assets/regions.json').then(r => r.json()).catch(() => ({}))
  ]).then(([svgText, regions]) => {
    window.__regionsCache = regions || {};
    svgContainer.innerHTML = svgText; // Inject inline

    const svgRoot = svgContainer.querySelector('svg');
    const archPermanent = svgRoot.getElementById('arch_permanent');
    const archPrimary = svgRoot.getElementById('arch_primary');

    function metaForId(id) {
      // 1. Try exact match in regions.json
      const R = window.__regionsCache || {};
      if (R[id]) return R[id];

      // 2. Try generic tooth parsing
      const mTooth = id.match(/^tooth_(\d{2})$/i);
      if (mTooth) {
        const n = parseInt(mTooth[1], 10);
        const isPrimary = [51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85].includes(n);
        const quad = ({ 1: 'UR', 2: 'UL', 3: 'LL', 4: 'LR', 5: 'UR', 6: 'UL', 7: 'LL', 8: 'LR' })[Math.floor(n / 10)] || 'Tooth';
        const unit = n % 10;
        const type = isPrimary ? (unit <= 2 ? 'Primary incisor' : unit === 3 ? 'Primary canine' : 'Primary molar')
          : ([1, 2].includes(unit) ? 'Incisor' : unit === 3 ? 'Canine' : [4, 5].includes(unit) ? 'Premolar' : 'Molar');
        return {
          name: `Tooth ${n} (${quad} ${type})`,
          hint: isPrimary ? "Children’s tooth. Pain/swelling needs timely care."
            : (type === 'Molar' || type === 'Premolar') ? "Grooves trap plaque → cavities/cracks."
              : "Chips/wear common; smooth-surface cavities still possible.",
          source: "WHO",
          link: "https://www.who.int/health-topics/oral-health"
        };
      }

      // 3. Try generic gum
      if (id.startsWith('gum_') || id.startsWith('gingiva_')) {
        return { name: "Gum Tissue", hint: "Bleeding/swelling often means gum infection.", source: "ADA", link: "#" };
      }
      return { name: id, hint: "Area", source: "WHO", link: "#" };
    }

    function bindOne(el) {
      const id = el.id; if (!id) return;
      el.style.cursor = 'pointer';

      // Hover Tooltip
      el.addEventListener('mouseenter', (e) => {
        const meta = metaForId(id);
        const rectWrap = svgContainer.getBoundingClientRect();
        // Calculate relative position
        const left = e.clientX - rectWrap.left + 10;
        const top = e.clientY - rectWrap.top + 10;

        $('#tooltip').innerHTML = `<strong>${meta.name}</strong><br>${meta.hint}`;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.classList.remove('hidden');
      });
      el.addEventListener('mouseleave', () => tooltip.classList.add('hidden'));

      // Click Selection
      el.addEventListener('click', () => {
        $$('.active', svgRoot).forEach(n => n.classList.remove('active'));
        el.classList.add('active'); // CSS class handles visualization

        const meta = metaForId(id);
        jawInput.value = meta.name;
        jawInput.dataset.regionId = id;
        sumArea.textContent = meta.name;
      });

      // Accessibility
      el.setAttribute('tabindex', '0');
      el.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click(); } });
    }

    // Generate Gum Bands (Visual Helpers)
    function generateGumBands(archGroup) {
      if (!archGroup) return;
      $$('.gumband', svgRoot).forEach(b => b.remove());
      const toothNodes = $$('[id^="tooth_"]', archGroup);
      toothNodes.forEach(tooth => {
        const id = tooth.id;
        const bb = tooth.getBBox();
        const band = Math.max(6, Math.min(10, bb.height * 0.18));
        const n = parseInt(id.slice(6, 8), 10);
        const isUpper = (n < 30) || (n >= 50 && n < 70);
        const bY = isUpper ? (bb.y - band - 3) : (bb.y + bb.height + 3);
        const lY = isUpper ? (bb.y + bb.height + 3) : (bb.y - band - 3);

        // Helper to create sticky gum rects
        const mk = (suffix, y) => {
          const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          r.setAttribute('x', bb.x); r.setAttribute('y', y);
          r.setAttribute('width', bb.width); r.setAttribute('height', band);
          r.setAttribute('rx', 4); r.setAttribute('class', 'gum gumband');
          r.setAttribute('id', `gingiva_${suffix}_${id.slice(6)}`);
          archGroup.appendChild(r);
        };
        mk('b', bY); // Buccal? Visual placeholder
      });
    }

    function bindInteractions() {
      // Bind main gum quadrants
      ['gum_upper_left', 'gum_upper_right', 'gum_lower_left', 'gum_lower_right'].forEach(id => {
        const el = svgRoot.getElementById(id); if (el) bindOne(el);
      });

      // Bind visible teeth
      const visibleArch = svgRoot.querySelector('#arch_primary').style.display === 'none'
        ? svgRoot.querySelector('#arch_permanent')
        : svgRoot.querySelector('#arch_primary');

      $$('[id^="tooth_"]', visibleArch).forEach(bindOne);
      $$('[id^="gingiva_"]', visibleArch).forEach(bindOne); // if any generated
    }

    function setDentition(mode) {
      if (mode === 'primary') {
        archPrimary.style.display = '';
        archPermanent.style.display = 'none';
        generateGumBands(archPrimary);
      } else {
        archPermanent.style.display = '';
        archPrimary.style.display = 'none';
        generateGumBands(archPermanent);
      }
      bindInteractions();
      $$('.active', svgRoot).forEach(n => n.classList.remove('active'));
      $('#jawLocation').value = ''; $('#jawLocation').dataset.regionId = '';
      $('#sumArea').textContent = '—';
    }

    $('#use2D')?.addEventListener('click', () => setDentition('permanent'));
    $('#usePrimary')?.addEventListener('click', () => setDentition('primary'));

    // Init
    setDentition('permanent');
  });
}

function evalUrgency(kb, intake, regionId) {
  // Simple urgency logic if not present in KB object
  return { level: kb.urgency || 'yellow_routine', reason: '' };
}

function badgeFor(level) {
  switch (level) {
    case 'green_watch': return '🟢 Watch & home care';
    case 'yellow_routine': return '🟡 Routine dental visit';
    case 'soon': return '🟡 Book within 3 days';
    case 'orange_medical_coord': return '🟠 Medical coordination first';
    case 'red_urgent': return '🔴 Urgent care';
    case 'urgent': return '🔴 Urgent care';
    case 'routine': return '🟡 Routine dental visit';
    default: return '🟡 Routine dental visit';
  }
}

function renderList(arr) {
  if (!arr || !arr.length) return '<p>—</p>';
  return `<ul>${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function renderProfessionalCare(list) {
  // If list is strings, render list. If it requires mapping to TREATMENTS, do that.
  // The provided KB often has keys like ["scaling","splinting"] in 'treatments' or string descriptions in 'outcomes'.
  // We'll try to find detailed TREATMENT objects if possible.

  // Actually KB structure from user has 'do', 'dont', 'outcomes'. 'treatments' keys.
  return renderList(list);
}

function renderConditionCards(kb, urgency) {
  const sections = [];
  sections.push({
    title: `${badgeFor(urgency.level)} — ${kb.name}`,
    content: urgency.reason ? `<p><em>${urgency.reason}</em></p>` : ''
  });

  if (kb.causes?.length) sections.push({ title: 'Possible causes (not a diagnosis)', content: renderList(kb.causes) });
  if (kb.investigations?.length) sections.push({ title: 'What the dentist may check', content: renderList(kb.investigations) });

  if (kb.do?.length || kb.dont?.length) sections.push({
    title: 'Do & Don’ts (now)',
    content: `
      <p><strong>Do:</strong></p>${renderList(kb.do)}
      <p><strong>Don’t:</strong></p>${renderList(kb.dont)}
    `
  });

  if (kb.home?.length) sections.push({ title: 'Home Care', content: renderList(kb.home) });
  if (kb.outcomes?.length) sections.push({ title: 'Typical Treatments', content: renderList(kb.outcomes) });

  return sections;
}

/* ---------------- generate recommendation ---------------- */
/* ---------------- Supabase Setup ---------------- */
const SUPABASE_URL = 'https://kkcqngvjrsujwdftjoro.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OSD_Hb2cmq8e990qJTf7vA_b7f2tDrn'; // Anon key provided by user
let supabase = null;

if (window.supabase) {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log("Supabase initialized");
} else {
  console.error("Supabase SDK not loaded");
}

/* ---------------- generate recommendation ---------------- */
async function generateResults() {
  const recommendBox = $('#results');
  const regionId = $('#jawLocation').dataset.regionId || '';
  const complaints = $$('.complaints input:checked').map(el => el.value);
  if (!regionId || complaints.length === 0) {
    alert('Please select a Tooth / Area and at least one complaint.');
    return;
  }

  // WAR ROOM UPGRADE: Enforce Phone Number for high-value lead capture
  if (!$('#pt_phone')?.value?.trim()) {
    alert('Please enter your Phone Number to receive your free AI Report.');
    $('#pt_phone').focus();
    return;
  }

  // update “Your Inputs” summary
  $('#sumArea').textContent = $('#jawLocation').value || '—';
  const labels = $$('.complaints input:checked').map(el => el.parentElement.textContent.trim());
  $('#sumComplaints').textContent = labels.length ? labels.join(', ') : '—';

  const intake = readIntake();

  // --- LEAD CAPTURE (SUPABASE) ---
  if (supabase) {
    // We capture silently so we don't block the UI
    supabase.from('leads').insert({
      name: intake.name,
      phone: intake.phone, // Captured from new input
      location: intake.location, // Captured from new input
      intake_data: intake,
      triage_result: { complaints, regionId }
    }).then(({ error }) => {
      if (error) console.error("Lead capture failed:", error);
      else console.log("Lead captured!");
    });
  }

  // 1) TRIAGE (Plain English Summary)
  const triageSections = getTriageSummary({ intake, complaints, region: regionId });

  // 2) Knowledge selection from complaints
  const kbIds = uniq(complaints.flatMap(key => KB_MAP[key] || []));
  // Filter KB array for these IDs
  const relevantKB = KB.filter(k => kbIds.includes(k.id));

  // 3) Render
  let html = `<h2 style="font-size:1.5rem; margin-bottom:1rem; color:#334155;">Your Guidance</h2>`;
  // Triage first
  triageSections.forEach(sec => {
    html += `<div class="recommend-section active"><h3>${sec.title}</h3><div class="recommend-content">${sec.content}</div></div>`;
  });

  // Then each condition as cards
  relevantKB.forEach(kb => {
    const urg = evalUrgency(kb, intake, regionId);
    const cards = renderConditionCards(kb, urg);
    cards.forEach((c, i) => {
      const opened = i === 0 ? 'active' : '';
      html += `<div class="recommend-section ${opened}"><h3>${c.title}</h3><div class="recommend-content">${c.content}</div></div>`;
    });
  });

  if (relevantKB.length === 0 && triageSections.length === 0) {
    html += `<p>No specific articles found for this combination, but please consult Dr. Dhivakaran for an accurate check.</p>`;
  }

  recommendBox.innerHTML = html;
  recommendBox.classList.remove('hidden');

  $$('.recommend-section h3', recommendBox).forEach(h3 => {
    h3.addEventListener('click', () => h3.parentElement.classList.toggle('active'));
  });

  recommendBox.scrollIntoView({ behavior: 'smooth' });
}

/* ---------------- history & export ---------------- */
function wireHistoryAndExport() {
  const box = $('#results');
  $('#saveHistory')?.addEventListener('click', () => {
    if (!box.innerText.trim()) return alert('Get a recommendation first.');
    const list = JSON.parse(localStorage.getItem('dentalHistory') || '[]');
    list.push({ date: new Date().toLocaleString(), content: box.innerHTML });
    localStorage.setItem('dentalHistory', JSON.stringify(list));
    alert('Saved to local browser storage.');
  });
  $('#viewHistory')?.addEventListener('click', () => {
    const entries = JSON.parse(localStorage.getItem('dentalHistory') || '[]');
    const hb = $('#historyBox');
    hb.innerHTML = entries.length
      ? entries.map(e => `<div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid #ccc;"><strong>${e.date}</strong><br>${e.content}</div>`).join('')
      : '<p>No saved history yet.</p>';
    hb.classList.remove('hidden');
    hb.scrollIntoView({ behavior: 'smooth' });
  });
  $('#exportPDF')?.addEventListener('click', () => {
    if (!box.innerText.trim()) return alert('Get a recommendation first.');
    // html2pdf global from CDN
    if (window.html2pdf) {
      html2pdf().from(box).save('dental-check-result.pdf');
    } else {
      alert('PDF generator loading... try again in a moment.');
    }
  });
}

/* ---------------- complaints & intake UI ---------------- */
function wireIntakeAndComplaints() {
  // intake events
  $('#pt_age')?.addEventListener('input', () => { showPregnancyBlock(); updateIntakeSummary(); });
  $('#pt_gender')?.addEventListener('change', () => { showPregnancyBlock(); updateIntakeSummary(); });
  $$('input[name="pt_flow"]').forEach(r => r.addEventListener('change', () => { showPostOpBlock(); updateIntakeSummary(); }));
  $('#pt_name')?.addEventListener('input', updateIntakeSummary);
  $('#symp_duration')?.addEventListener('change', updateIntakeSummary);
  $$('.mh').forEach(c => c.addEventListener('change', updateIntakeSummary));
  $$('.med').forEach(c => c.addEventListener('change', updateIntakeSummary));
  $$('.hyg').forEach(c => c.addEventListener('change', updateIntakeSummary));
  $('#flag_fever')?.addEventListener('change', updateIntakeSummary);
  $('#flag_spread')?.addEventListener('change', updateIntakeSummary);

  $('#toSymptoms')?.addEventListener('click', () => {
    document.querySelector('.svg-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  });
  $('#clearIntake')?.addEventListener('click', () => {
    $('#intake').querySelectorAll('input[type="text"], input[type="number"], textarea').forEach(el => el.value = '');
    $('#intake').querySelectorAll('select').forEach(el => el.value = '');
    $('#intake').querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    $$('input[name="pt_flow"]').forEach((r, i) => r.checked = i === 0);
    showPregnancyBlock(); showPostOpBlock();
    updateIntakeSummary();
  });

  // complaints
  $('#recommendBtn')?.addEventListener('click', generateResults);
  $('#clearBtn')?.addEventListener('click', () => {
    $('#jawLocation').value = '';
    $('#jawLocation').dataset.regionId = '';
    $('#sumArea').textContent = '—';
    $$('.complaints input:checked').forEach(el => (el.checked = false));
    $('#sumComplaints').textContent = '—';
    $('#results').classList.add('hidden'); $('#results').innerHTML = '';
    $$('.active', $('#inlineSvgContainer')).forEach(n => n.classList.remove('active'));
  });
}

/* ---------------- boot ---------------- */
window.addEventListener('DOMContentLoaded', async () => {
  bindSvgAndRegions().then(() => {
    // optional: warm up logic if needed
  });
  wireIntakeAndComplaints();
  wireHistoryAndExport();
  updateIntakeSummary();
});
