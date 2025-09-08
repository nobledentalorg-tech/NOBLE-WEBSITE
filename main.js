/* =========================================================
   Noble Dental Care — main.js
   (header/menu, scroll progress, parallax hero, video R-M,
    booking, doctors, reviews rail, certificates ticker,
    footer year, Care Guide (Voka), JSON-LD/SEO helpers)
   ========================================================= */

/* ---------- tiny helpers ---------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);

/* =========================================================
   Header: shrink on scroll, mobile panel, submenu toggle
   ========================================================= */
(() => {
  const header  = $('.site-header');
  const menuBtn = $('#menuToggle');
  const navList = $('#primaryNav');   // UL.nav-pill
  const subBtn  = $('.has-submenu > .submenu-toggle');
  const subMenu = $('#sp-submenu');
  const mq      = window.matchMedia('(max-width: 960px)');

  const setShrink = () => header?.classList.toggle('shrink', (window.scrollY||0) > 10);
  setShrink();
  on(window,'scroll', setShrink, {passive:true});

  function applyMode(){
    if (!navList || !menuBtn) return;
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    if (mq.matches){
      navList.classList.toggle('is-open', open);
      navList.toggleAttribute('hidden', !open);
      document.body.classList.toggle('no-scroll', open);
      if (subBtn && subMenu && !open){ subBtn.setAttribute('aria-expanded','false'); subMenu.hidden = true; }
    } else {
      navList.classList.remove('is-open');
      navList.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded','false');
      document.body.classList.remove('no-scroll');
      if (subMenu) subMenu.removeAttribute('hidden');
      if (subBtn)  subBtn.setAttribute('aria-expanded','false');
    }
  }
  applyMode();
  mq.addEventListener('change', applyMode);

  on(menuBtn, 'click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    applyMode();
  });

  // Close on outside click / Esc (mobile only)
  on(document, 'click', (e) => {
    if (!mq.matches || !navList || !menuBtn) return;
    if (!navList.contains(e.target) && !menuBtn.contains(e.target)){
      menuBtn.setAttribute('aria-expanded','false');
      applyMode();
      if (subBtn && subMenu){ subBtn.setAttribute('aria-expanded','false'); subMenu.hidden = true; }
    }
  });
  on(document, 'keydown', (e) => {
    if (!mq.matches || e.key !== 'Escape') return;
    menuBtn.setAttribute('aria-expanded','false');
    applyMode();
    menuBtn.focus();
  });

  // Mobile-only submenu toggle
  if (subBtn && subMenu){
    on(subBtn,'click',(e)=>{
      if (!mq.matches) return; // desktop handled by CSS
      e.preventDefault();
      const isOpen = subBtn.getAttribute('aria-expanded') === 'true';
      subBtn.setAttribute('aria-expanded', String(!isOpen));
      subMenu.hidden = isOpen;
      e.stopPropagation();
    });
  }
})();

/* =========================================================
   Scroll progress bar
   ========================================================= */
(() => {
  const bar = $('#scrollIndicator');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct.toFixed(2) + '%';
  };
  on(window, 'scroll', update, {passive:true});
  on(window, 'resize', update);
  update();
})();

/* =========================================================
   Hero parallax (GPU friendly, reduced-motion aware)
   ========================================================= */
(() => {
  const layers = $$('.parallax-layer');
  if (!layers.length) return;
  const rm = matchMedia('(prefers-reduced-motion: reduce)');
  let mouseX = 0, mouseY = 0, ticking = false;

  function applyParallax() {
    ticking = false;
    const sy = window.scrollY || 0;
    layers.forEach((el, i) => {
      // different strengths per layer
      const depth = (i + 1) * 10; // 10, 20, 30...
      const y = -(sy / depth);
      const mx = (mouseX - 0.5) * 20 / (i+1);
      const my = (mouseY - 0.5) * 12 / (i+1);
      el.style.transform = `translate3d(${mx}px, ${y + my}px, 0)`;
    });
  }

  function requestTick(){ if (!ticking){ requestAnimationFrame(applyParallax); ticking = true; } }

  const onScroll = () => { if (rm.matches) return; requestTick(); };
  const onMouse  = (e) => {
    if (rm.matches) return;
    const rect = document.body.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / window.innerWidth;
    mouseY = (e.clientY - rect.top) / window.innerHeight;
    requestTick();
  };

  on(window, 'scroll', onScroll, {passive:true});
  on(window, 'mousemove', onMouse, {passive:true});
  on(rm, 'change', () => {
    if (rm.matches) layers.forEach(el => el.style.transform = '');
  });
  applyParallax();
})();

/* =========================================================
   Hero video: respect reduced motion
   ========================================================= */
(() => {
  const vid = document.querySelector(".blackhole-video");
  if (!vid) return;
  const mq = matchMedia("(prefers-reduced-motion: reduce)");
  const apply = () => {
    if (mq.matches){
      vid.pause?.();
      vid.removeAttribute?.("autoplay");
      vid.removeAttribute?.("loop");
    }
  };
  (mq.addEventListener?.("change", apply) || mq.addListener?.(apply));
  apply();
})();

/* =========================================================
   Booking form: day/time slots + WhatsApp handoff
   ========================================================= */
(() => {
  const tz = "Asia/Kolkata";
  const form = $("#apptForm");
  if (!form) return;

  const daySelect = $("#daySelect");
  const timeSelect = $("#timeSelect");
  const summary = $("#summaryText");
  const bookBtn = $("#bookBtn");
  const toast = $("#apptToast");
  const waFill = $("#waFill");
  const waQuick = $("#waQuick");

  // opening hours (0=Sun)
  const hours = { 0: [15,22], 1:[11,22], 2:[11,22], 3:[11,22], 4:[11,22], 5:[11,22], 6:[11,22] };

  const fmtDay  = (d) => d.toLocaleDateString("en-IN",{ timeZone: tz, weekday:"short", day:"2-digit", month:"short" });
  const fmtTime = (d) => d.toLocaleTimeString("en-IN",{ timeZone: tz, hour:"2-digit", minute:"2-digit" });

  function buildDays(){
    daySelect.innerHTML = "";
    const today = new Date();
    for (let i=0;i<14;i++){
      const d = new Date(today); d.setDate(d.getDate()+i);
      const opt = document.createElement("option");
      opt.value = d.toISOString();
      opt.textContent = fmtDay(d);
      daySelect.appendChild(opt);
    }
  }

  function buildTimes(dayIso){
    timeSelect.innerHTML = '<option value="">Select a time</option>';
    if (!dayIso) return;
    const d = new Date(dayIso);
    const [open, close] = hours[d.getDay()] || [0,0];
    const start = new Date(d); start.setHours(open,0,0,0);
    const end   = new Date(d); end.setHours(close,0,0,0);
    const now = new Date();

    for (let t = new Date(start); t < end; t.setMinutes(t.getMinutes()+30)){
      if (t < now) continue;
      const iso = t.toISOString();
      const opt = document.createElement("option");
      opt.value = iso;
      opt.textContent = fmtTime(new Date(iso));
      timeSelect.appendChild(opt);
    }
  }

  function updateSummary(){
    const d = daySelect.value ? new Date(daySelect.value) : null;
    const t = timeSelect.value ? new Date(timeSelect.value) : null;
    if (d && t){ summary.textContent = `${fmtDay(d)} • ${fmtTime(t)} (IST)`; bookBtn.disabled = false; }
    else { summary.textContent = "Choose a day & time to continue."; bookBtn.disabled = true; }
    updateWA();
  }

  function updateWA(){
    const fd = new FormData(form);
    const d = daySelect.value ? new Date(daySelect.value) : null;
    const t = timeSelect.value ? new Date(timeSelect.value) : null;
    const msg = `Hi Noble Dental Care,
I'd like to book:
• Name: ${fd.get("name")||""}
• Phone: ${fd.get("phone")||""}
• Service: ${fd.get("service")||""}
• Doctor: ${fd.get("doctor")||""}
• Time: ${d?fmtDay(d):"-"} • ${t?fmtTime(t):"-"} (IST)
${fd.get("notes") ? "• Notes: "+fd.get("notes") : ""}`.trim();
    const url = `https://wa.me/918610425342?text=${encodeURIComponent(msg)}`;
    if (waFill)  waFill.href = url;
    if (waQuick) waQuick.href = url;
  }

  on(daySelect,'change', ()=>{ buildTimes(daySelect.value); updateSummary(); });
  on(timeSelect,'change', updateSummary);
  on(form,'input', updateWA);

  on(form,'submit',(e)=>{
    e.preventDefault();
    if (bookBtn.disabled) return;
    updateWA();
    if (toast){ toast.hidden = false; setTimeout(()=> (toast.hidden = true), 2000); }
    window.open(waFill.href, "_blank", "noopener");
  });

  buildDays(); buildTimes(daySelect.value); updateSummary();
})();

/* =========================================================
   Doctors directory: search/filter, dialog, deep link
   ========================================================= */
(() => {
  const grid = $('#docGrid');
  const dlg = $('#docSheet');
  if (!grid || !dlg) return;
  const closeBtn = $('.sheet-close', dlg);
  const search = $('#docSearch');

  const DATA = {
    dhivakaran:{ name:"Dr Dhivakaran", role:"Chief Medical Director", hero:"/images/doctors/dhivakaran-hero.webp", bio:"Chief Medical Director at Noble Dental Care. Director, Healthflo (557 hospitals). Contributor to Triumph’s Complete Review of Dentistry.", expertise:["Painless RCT","Dental Implants","Preventive Dentistry"], books:[{t:"Triumph’s Complete Review of Dentistry",p:"Wolters Kluwer • 2018",img:"/images/books/triumph.webp",href:"https://play.google.com/store/books/details?id=ZTjvDwAAQBAJ"}] },
    roger:{ name:"Dr Roger Ronaldo", role:"Oral & Maxillofacial Surgeon", hero:"/images/doctors/roger-hero.webp", bio:"Surgeon focusing on implants, orthognathic & reconstruction, and facial trauma.", expertise:["Implantology","Orthognathic & Reconstruction","Trauma Surgery"], books:[] },
    thikvijay:{ name:"Dr Thikvijay", role:"Aesthetic & Medical Cosmetologist", hero:"/images/doctors/thikvijay-hero.webp", bio:"FMC (Germany), ISHR. Trichology, Aesthetic & Medical Cosmetology, Hair & Scalp Restoration.", expertise:["Trichology","Aesthetic Medicine","Hair & Scalp Restoration"], books:[] },
    deepak:{ name:"Dr Deepak", role:"Orthodontist", hero:"/images/doctors/deepak-hero.webp", bio:"Assistant Professor. Smile design, clear aligners, complex malocclusion.", expertise:["Smile Design","Clear Aligners","Complex Malocclusion"], books:[] },
    idhaya:{ name:"Dr Idhaya", role:"Preventive & Tourism Dentistry", hero:"/images/doctors/idhaya-hero.webp", bio:"Preventive programs, insurance advisory and medical tourism coordination.", expertise:["Preventive Dentistry","Insurance Advisory","Medical Tourism"], books:[] }
  };

  function fillDialog(id){
    const d = DATA[id]; if (!d) return;
    $('#sheetHero').src = d.hero || '';
    $('#sheetHero').alt = d.name || '';
    $('#sheetTitle').textContent = d.name || '';
    $('#sheetRole').textContent = d.role || '';
    $('#sheetBio').textContent = d.bio || '';
    $('#sheetExpertise').innerHTML = (d.expertise||[]).map(x=>`<span class="chip">${x}</span>`).join('');
    $('#sheetBooks').innerHTML = (d.books||[]).map(b=>`
      <div class="book">
        <img src="${b.img||''}" alt="">
        <div><div class="t">${b.t||''}</div><div class="p">${b.p||''}</div>${b.href?`<a class="t-btn" href="${b.href}" target="_blank" rel="noopener">View</a>`:''}</div>
      </div>`).join('');
    $('#sheetBook').dataset.doc = d.name || '';
  }
  function openDialog(id){
    fillDialog(id);
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open','');
    history.replaceState(null, "", `#${id}`);
  }
  function closeDialog(){
    if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  on(grid,'click',(e)=>{
    const card = e.target.closest('.ndc-card'); if (!card) return;
    if (e.target.closest('.open') || e.target.closest('.block')) openDialog(card.dataset.id);
  });
  on(closeBtn,'click', closeDialog);
  on(dlg,'keydown',(e)=>{ if (e.key==='Escape') closeDialog(); });
  on(dlg,'click',(e)=>{ const r=dlg.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) closeDialog(); });

  on($('#sheetBook'),'click',(e)=>{
    const name = e.currentTarget?.dataset?.doc || '';
    const sel = $('#doctorSelect'); if (sel && name){
      sel.value = name;
      document.querySelector('#get-in-touch')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // deep-link (#dhivakaran, etc.)
  function checkHash(){ const id = location.hash.replace('#',''); if (id && DATA[id]) openDialog(id); }
  window.addEventListener('hashchange', checkHash); checkHash();

  // search + filter chips
  function applyFilter(){
    const q = (search.value||'').toLowerCase().trim();
    const pressed = $$('#docFilters .chip--ghost').find(b=>b.getAttribute('aria-pressed')==='true');
    const f = pressed ? pressed.dataset.filter : 'all';
    $$('.ndc-card', grid).forEach(card=>{
      const tags = (card.getAttribute('data-tags')||'').toLowerCase();
      const text = (card.textContent||'').toLowerCase();
      const matchQ = !q || tags.includes(q) || text.includes(q);
      const matchF = (f==='all') || tags.includes(f);
      card.style.display = (matchQ && matchF) ? '' : 'none';
    });
  }
  on(search,'input', applyFilter);
  on($('.ndc-search .clear'),'click', ()=>{ search.value=''; applyFilter(); });
  $$('#docFilters .chip--ghost').forEach(btn=>{
    on(btn,'click', ()=>{
      $$('#docFilters .chip--ghost').forEach(b=>b.setAttribute('aria-pressed','false'));
      btn.setAttribute('aria-pressed','true');
      applyFilter();
    });
  });
})();

/* =========================================================
   Testimonials / Reviews rail (auto, seamless, hover pause)
   ========================================================= */
(() => {
  const track = $('#revTrack');
  if (!track) return;

  const REVIEWS = [
    { stars:5, body:"Had a painless RCT the same evening. Doctor explained every step; recovery was smooth.", who:"Shruthi P", src:"Google", avatar:"/images/avatars/a1.webp" },
    { stars:5, body:"Friendly team, clear cost breakdown, and late-evening slot—perfect for my schedule.", who:"Rahul K", src:"Practo", avatar:"/images/avatars/a2.webp" },
    { stars:5, body:"Got my wisdom tooth out—quick, careful, and zero complications. Highly recommend.", who:"Mahesh V", src:"Google", avatar:"/images/avatars/a3.webp" },
    { stars:5, body:"My daughter’s braces journey went smoothly. Clear instructions and regular follow-ups.", who:"Priya S", src:"Practo", avatar:"/images/avatars/a4.webp" },
    { stars:5, body:"Implant felt natural by day two. Expert hands + clean workflow.", who:"Vikram R", src:"Google", avatar:"/images/avatars/a5.webp" },
    { stars:5, body:"Great hygiene, transparent advice. No unnecessary procedures pushed.", who:"Aishwarya N", src:"Google", avatar:"/images/avatars/a6.webp" },
    { stars:5, body:"Emergency swelling managed late evening—very reassuring.", who:"Sameer T", src:"Google", avatar:"/images/avatars/a7.webp" },
    { stars:5, body:"Aligners were a breeze, progress tracked closely.", who:"Naveen S", src:"Practo", avatar:"/images/avatars/a8.webp" },
    { stars:5, body:"Best cleaning I’ve had—gentle and thorough.", who:"Rekha D", src:"Google", avatar:"/images/avatars/a9.webp" },
    { stars:5, body:"Kids’ visit was fun—no fear, lots of smiles.", who:"Farheen A", src:"Google", avatar:"/images/avatars/a10.webp" },
    { stars:5, body:"Crown fit perfectly on first try. Precise work.", who:"Sanjana L", src:"Practo", avatar:"/images/avatars/a11.webp" },
    { stars:5, body:"Doctor explained X-rays clearly. Very comforting.", who:"Harish B", src:"Google", avatar:"/images/avatars/a12.webp" }
  ];

  const stars = n => '★★★★★'.slice(0, Math.min(5, Math.max(0, n|0)));
  const tpl = r => `
    <article class="rev-card" itemscope itemtype="https://schema.org/Review">
      <div class="rev-stars" aria-label="${r.stars} out of 5 stars" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
        <meta itemprop="ratingValue" content="${r.stars}"/><span aria-hidden="true">${stars(r.stars)}</span>
      </div>
      <blockquote class="rev-quote" itemprop="reviewBody">${r.body}</blockquote>
      <div class="rev-author">
        <img src="${r.avatar}" alt="" width="36" height="36" loading="lazy" decoding="async">
        <div>
          <span class="n" itemprop="author" itemscope itemtype="https://schema.org/Person">
            <span itemprop="name">${r.who}</span>
          </span>
          <span class="s">${r.src} Review</span>
        </div>
      </div>
    </article>`;
  // Duplicate for seamless loop
  track.innerHTML = REVIEWS.map(tpl).join('') + REVIEWS.map(tpl).join('');

  let animating = false, stepPx = 0, timer = null;

  function calcStep(){
    const card = track.querySelector('.rev-card');
    if (!card) return 300;
    const gap = parseFloat(getComputedStyle(track).getPropertyValue('--gap')) || 14;
    return Math.round(card.getBoundingClientRect().width + gap);
    }
  function shift(){
    if (animating) return;
    animating = true;
    track.style.transition = 'transform .6s ease';
    track.style.transform = `translateX(-${stepPx}px)`;
    const end = () => {
      track.removeEventListener('transitionend', end);
      let moved = 0;
      const gap = parseFloat(getComputedStyle(track).getPropertyValue('--gap')) || 14;
      while (moved < stepPx - 1) {
        const first = track.firstElementChild; if (!first) break;
        moved += first.getBoundingClientRect().width + gap;
        track.appendChild(first);
      }
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      track.offsetHeight; // reflow
      animating = false;
    };
    track.addEventListener('transitionend', end, {once:true});
  }
  const play = () => { stop(); timer = setInterval(shift, 2500); };
  const stop = () => { if (timer){ clearInterval(timer); timer=null; } };

  on(track,'mouseenter', stop);
  on(track,'mouseleave', play);
  on(track,'focusin', stop);
  on(track,'focusout', play);
  on(window,'resize', ()=>{ const was = !!timer; stop(); stepPx = calcStep(); if (was) play(); });

  stepPx = calcStep();
  play();
})();

/* =========================================================
   Certificates ticker (simple cards + arrows)
   ========================================================= */
(() => {
  const track = $('#certsTrack');
  const prev = $('.ticker-ctrl.prev');
  const next = $('.ticker-ctrl.next');
  if (!track) return;
  const CERTS = [
    { t:'IDA Membership', img:'/images/certs/ida.webp', href:'/credentials.html#ida' },
    { t:'DCI Registration', img:'/images/certs/dci.webp', href:'/credentials.html#dci' },
    { t:'Implantology Course', img:'/images/certs/implant.webp', href:'/credentials.html#implant' },
    { t:'Infection Control', img:'/images/certs/sterile.webp', href:'/credentials.html#infection' },
    { t:'Radiology Safety', img:'/images/certs/radiology.webp', href:'/credentials.html#radiology' },
    { t:'Pediatric Dentistry', img:'/images/certs/pedo.webp', href:'/credentials.html#pedo' }
  ];
  const item = (c)=>`
    <li class="ticker-item" style="min-width:260px">
      <a class="t-card" href="${c.href||'#'}">
        <div class="t-media"><img src="${c.img||''}" alt="${c.t||''}" loading="lazy"></div>
        <div class="t-body">
          <div class="t-title">${c.t||''}</div>
          <div class="t-desc">Click to view details</div>
          <div class="t-actions"><span class="t-btn">Open</span></div>
        </div>
      </a>
    </li>`;
  track.innerHTML = CERTS.map(item).join('') + CERTS.map(item).join('');
  const scroller = track.parentElement;
  const vw = () => scroller.clientWidth || 800;
  on(prev,'click', ()=> scroller.scrollBy({left:-vw()*0.8, behavior:'smooth'}));
  on(next,'click', ()=> scroller.scrollBy({left: vw()*0.8, behavior:'smooth'}));
})();

/* =========================================================
   Footer year
   ========================================================= */
(() => { const y = $('#year'); if (y) y.textContent = new Date().getFullYear(); })();

/* =========================================================
   FAQ accordion + JSON-LD (FAQPage)
   ========================================================= */
(() => {
  const faq = $('#faq');
  if (!faq) return;

  // basic accordion behaviour for <details>
  $$('#faq details summary').forEach(sm => {
    on(sm, 'click', (e) => {
      // allow native toggle; optionally close others:
      const d = sm.parentElement;
      if (!d.open) {
        $$('#faq details[open]').forEach(x => { if (x!==d) x.removeAttribute('open'); });
      }
    });
  });

  // Build JSON-LD from DOM for richer results
  const items = $$('#faq details').map(d => ({
    "@type":"Question",
    "name": d.querySelector('summary')?.textContent?.trim() || '',
    "acceptedAnswer": {
      "@type":"Answer",
      "text": Array.from(d.querySelectorAll('p,ul,ol')).map(n=>n.textContent.trim()).join(' ')
    }
  })).filter(x => x.name && x.acceptedAnswer.text);

  if (items.length){
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity": items
    });
    document.head.appendChild(ld);
  }
})();

/* =========================================================
   Care Guide (Voka): dataset + UI + PDF export
   ========================================================= */
function initCareGuide(){
  const el = {
    imgA: $('#vkImgA'), imgB: $('#vkImgB'),
    title: $('#vkTitle'), badge: $('#vkBadge'), words: $('#vkKeywords'),
    link: $('#vkDeepLink'),
    overview: $('#vkOverview'), postop: $('#vkPostop'), tips: $('#vkTips'), proscons: $('#vkProsCons'), sources: $('#vkSources'),
    prev: $('#vkPrev'), next: $('#vkNext'), dots: $('#vkDots'),
    search: $('#vkSearch'), category: $('#vkCategory'), chips: $('#vkChips'),
    datalist: $('#vk-datalist'), chatLog: $('#vkChatLog'), chatInput: $('#vkChatInput'), chatSend: $('#vkChatSend'),
    pdfBtn: $('#vkPDF')
  };
  if (!el.title) return;

  // NOTE: Patient-facing text should be reviewed by your clinicians.
  const VK_TOPICS = [
    {id:'rct', title:'Root Canal Treatment (RCT)', cat:'Tooth saving', img:'/images/care/rct.jpg', badge:'Tooth saving',
      keywords:['pain','deep decay','abscess','rct'],
      overview:`When decay/infection reaches the pulp, RCT removes infected tissue and seals canals to save the tooth.`,
      postop:`Day 0–2: mild soreness, meds.\nDay 3–7: avoid hard chewing.\n1–2 wks: crown recommended.`,
      tips:`Keep temporary dry 1h. Return for crown to prevent fracture.`,
      proscons:`Pros: Pain relief, saves tooth.\nCons: Needs crown, multiple visits.`,
      sources:`Cohen; Ingle; ADA.`,
      deeplink:'/specialities/root-canal.html' },
    {id:'whitening', title:'Teeth Whitening (Bleaching)', cat:'Prevention', img:'/images/care/whitening.jpg', badge:'Cosmetic',
      keywords:['stains','shade'],
      overview:`Peroxide gels safely lift stains under protection of gums and soft tissues.`,
      postop:`Sensitivity 24–48h possible.`,
      tips:`Avoid tea/coffee/red wine 48h.`,
      proscons:`Pros: Quick shade gain.\nCons: Not for some restorations.`,
      sources:`ADA clinical statements.`,
      deeplink:'/specialities/scaling-whitening.html#whitening' },
    {id:'implants', title:'Dental Implants', cat:'Implants & replacement', img:'/images/care/implants.jpg', badge:'Replacement',
      keywords:['titanium','crown','missing tooth'],
      overview:`Titanium fixture integrates with bone; then abutment + crown for a natural replacement.`,
      postop:`Swelling/bruising 2–3d; stitches 1–2wks.`,
      tips:`No smoking; meticulous hygiene.`,
      proscons:`Pros: Preserves bone, fixed.\nCons: Time & cost; needs bone.`,
      sources:`ITI; ADA.`,
      deeplink:'/specialities/implants.html' },
    {id:'wisdom', title:'Wisdom Tooth Extraction', cat:'Oral surgery', img:'/images/care/wisdom.jpg', badge:'Surgery',
      keywords:['impaction','swelling','pericoronitis'],
      overview:`Removal of impacted or problem wisdom teeth to prevent pain/infection and crowding.`,
      postop:`Gauze pressure; cold compress 24h; soft diet 3d.`,
      tips:`No smoking/straws 72h; gentle rinses.`,
      proscons:`Pros: Pain relief, hygiene ease.\nCons: Temporary swelling; rare nerve risk.`,
      sources:`AAOMS; ADA.`,
      deeplink:'/specialities/extraction.html' }
  ];

  const state = { i: 0, filtered: [...VK_TOPICS] };

  const escapeHtml = (s)=> (s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const nl2li = (s)=> (s||'').split('\n').map(x=>x.trim()).filter(Boolean).map(x=>`<li>${escapeHtml(x)}</li>`).join('');
  const renderListPanel = (label, body) => `<ul aria-label="${label}">${nl2li(body)}</ul>`;

  function crossfadeTo(src){
    const shown = el.imgA.classList.contains('is-show') ? el.imgA : el.imgB;
    const other = shown === el.imgA ? el.imgB : el.imgA;
    other.src = src || '/images/care/placeholder.jpg';
    other.onload = () => {
      shown.classList.remove('is-show');
      other.classList.add('is-show');
    };
  }

  function setTabs(activeId){
    $$('.vk-tab').forEach(btn=>{
      const onb = btn.id === activeId;
      btn.classList.toggle('is-active', onb);
      btn.setAttribute('aria-selected', String(onb));
      btn.tabIndex = onb ? 0 : -1;
      const map = { 'tab-overview':'vkOverview','tab-postop':'vkPostop','tab-tips':'vkTips','tab-proscons':'vkProsCons','tab-sources':'vkSources' };
      const panel = $('#'+map[btn.id]);
      panel?.toggleAttribute('hidden', !onb);
    });
  }

  function buildDots(){
    el.dots.innerHTML = state.filtered.map((t,idx)=>`<button type="button" class="${idx===state.i?'is-active':''}" aria-label="Show ${escapeHtml(t.title)}" data-i="${idx}"></button>`).join('');
  }

  function buildChips(){
    const HOT = ['pain','whitening','implants','braces','wisdom','kids','gum','crown','aligners','ulcer'];
    const seen = new Set();
    const chips = [];
    state.filtered.forEach(t => (t.keywords||[]).forEach(k => { if (HOT.some(h=>k.includes(h)) && !seen.has(k)){ seen.add(k); chips.push(k); }}));
    const final = Array.from(new Set([...HOT, ...chips])).slice(0,12);
    el.chips.innerHTML = final.map(w => `<button type="button" class="vk-chip" data-q="${escapeHtml(w)}">${escapeHtml(w)}</button>`).join('');
  }

  function buildDatalist(){
    const opts = [];
    state.filtered.forEach(t => {
      opts.push(`<option value="${escapeHtml(t.title)}">`);
      (t.keywords||[]).forEach(k => opts.push(`<option value="${escapeHtml(k)}">`));
    });
    el.datalist.innerHTML = opts.join('');
  }

  function show(i){
    if (state.filtered.length === 0) return;
    state.i = (i + state.filtered.length) % state.filtered.length;
    const t = state.filtered[state.i];
    el.title.textContent = t.title;
    el.badge.textContent = t.badge || t.cat || 'Topic';
    el.words.innerHTML = (t.keywords||[]).slice(0,6).map(k=>`<span class="chip">${escapeHtml(k)}</span>`).join('');
    el.link.href = t.deeplink || '#';
    el.overview.innerHTML = `<p>${escapeHtml(t.overview||'')}</p>`;
    el.postop.innerHTML   = renderListPanel('Post-op', t.postop);
    el.tips.innerHTML     = renderListPanel('Tips', t.tips);
    el.proscons.innerHTML = renderListPanel('Pros & Cons', t.proscons);
    // append source string
    const refsList = el.sources.querySelector('.vk-refs');
    if (refsList && t.sources){
      const li = document.createElement('li'); li.textContent = t.sources; refsList.appendChild(li);
    }
    crossfadeTo(t.img);
    $$('#vkDots button').forEach((b,idx)=> b.classList.toggle('is-active', idx===state.i));
    history.replaceState(null, "", `#care:${t.id}`);
  }

  function applyCategory(){
    const cat = el.category.value;
    const q   = (el.search.value||'').trim().toLowerCase();
    state.filtered = state.filtered.length ? [...new Set(state.filtered)] : [...VK_TOPICS];
    state.filtered = VK_TOPICS.filter(t => (cat==='all' || t.cat===cat) && (
      !q || t.title.toLowerCase().includes(q) ||
      (t.keywords||[]).some(k => k.toLowerCase().includes(q))
    ));
    if (state.filtered.length === 0){
      el.title.textContent = 'No matches';
      el.overview.innerHTML = `<p>Try a simpler term (e.g., “pain”, “whitening”, “braces”).</p>`;
      el.postop.innerHTML = el.tips.innerHTML = el.proscons.innerHTML = '';
      el.words.innerHTML = ''; el.link.href = '#';
      return;
    }
    state.i = 0;
    buildDots();
    buildChips();
    show(0);
  }

  function jumpToQuery(q){
    const s = (q||'').trim().toLowerCase();
    if (!s) return;
    const idx = VK_TOPICS.findIndex(t =>
      t.title.toLowerCase().includes(s) || (t.keywords||[]).some(k => k.toLowerCase().includes(s))
    );
    if (idx >= 0){
      const t = VK_TOPICS[idx];
      el.category.value = 'all'; el.search.value = '';
      state.filtered = [...VK_TOPICS];
      buildDots(); buildChips();
      show(state.filtered.findIndex(x=>x.id===t.id));
    }
  }

  // events
  on(el.prev,'click', ()=> show(state.i - 1));
  on(el.next,'click', ()=> show(state.i + 1));
  on(el.dots,'click',(e)=>{ const b = e.target.closest('button[data-i]'); if (b) show(+b.dataset.i); });

  $$('.vk-tab').forEach(btn=>{
    on(btn,'click', ()=> setTabs(btn.id));
    on(btn,'keydown', (e)=>{
      if (e.key==='ArrowRight' || e.key==='ArrowLeft'){
        const tabs = $$('.vk-tab'); const cur = tabs.indexOf(btn);
        const nxt = e.key==='ArrowRight' ? (cur+1)%tabs.length : (cur-1+tabs.length)%tabs.length;
        tabs[nxt].focus(); tabs[nxt].click();
      }
    });
  });

  on(el.category,'change', applyCategory);
  on(el.search,'change', applyCategory);
  on(el.chips,'click',(e)=>{ const c=e.target.closest('.vk-chip'); if (!c) return; el.search.value=c.dataset.q||''; applyCategory(); });

  // chat quick-jump
  function chatLine(msg, who='user'){
    const div = document.createElement('div');
    div.className = 'msg ' + (who==='user' ? 'msg--user':'msg--bot');
    div.textContent = msg;
    el.chatLog.appendChild(div);
    el.chatLog.scrollTop = el.chatLog.scrollHeight;
  }
  function handleChat(){
    const q = el.chatInput.value.trim();
    if (!q) return;
    chatLine(q, 'user');
    jumpToQuery(q);
    const t = state.filtered[state.i];
    chatLine(`Jumped to: ${t.title}. Open “Tips” or “Pros & Cons” tabs for quick guidance.`, 'bot');
    el.chatInput.value = '';
  }
  on(el.chatSend,'click', handleChat);
  on(el.chatInput,'keydown',(e)=>{ if (e.key==='Enter') handleChat(); });

  // deep-link on load: #care:<id>
  function checkHash(){
    const m = (location.hash||'').match(/^#care:(.+)$/);
    if (m){
      const id = m[1];
      const idx = VK_TOPICS.findIndex(t=>t.id===id);
      if (idx >= 0){
        state.filtered = [...VK_TOPICS];
        buildDots(); buildChips();
        show(idx);
        $('#ndc-care-voka')?.scrollIntoView({behavior:'smooth', block: 'start'});
      }
    }
  }

  // PDF export (html2pdf already in your HTML)
  on(el.pdfBtn,'click', async ()=> {
    const t = state.filtered[state.i];
    const printable = document.createElement('div');
    printable.style.padding = '20px';
    printable.style.fontFamily = 'Manrope, Arial, sans-serif';
    printable.style.maxWidth = '720px';
    printable.innerHTML = `
      <h2 style="margin:0 0 6px">${escapeHtml(t.title)}</h2>
      <div style="color:#555;margin:0 0 12px">${escapeHtml(t.cat)} • ${escapeHtml(t.badge||'')}</div>
      <img src="${t.img}" alt="" style="width:100%;height:auto;border-radius:8px;border:1px solid #eee;margin:6px 0 12px"/>
      <h3>Overview</h3><p>${escapeHtml(t.overview||'')}</p>
      <h3>Post-op timeline</h3>${renderListPanel('Post-op', t.postop)}
      <h3>Tips / FAQ</h3>${renderListPanel('Tips', t.tips)}
      <h3>Pros & Cons</h3>${renderListPanel('Pros & Cons', t.proscons)}
      <h3>Sources</h3><p>${escapeHtml(t.sources||'IDA / ADA / ICMR / WHO')}</p>
      <hr/>
      <small>Noble Dental Care — Nallagandla • This sheet is educational, not diagnostic.</small>
    `;
    if (!window.html2pdf){
      alert('PDF generator not loaded. Please include html2pdf.bundle.min.js.');
      return;
    }
    const opt = {
      margin: 10,
      filename: `NDC_${t.id}.pdf`,
      image: { type: 'jpeg', quality: 0.96 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#FFFFFF' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    await html2pdf().set(opt).from(printable).save();
  });

  buildDatalist();
  applyCategory();
  setTabs('tab-overview');
  checkHash();
}

/* Lazy init Care Guide when section is near viewport */
(() => {
  const target = document.querySelector('#ndc-care-voka');
  if (!target) return;
  const start = () => { if (!start._done){ start._done = true; initCareGuide(); } };
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some(e => e.isIntersecting)) { start(); obs.disconnect(); }
    }, { rootMargin: '600px' });
    io.observe(target);
  } else {
    start();
  }
})();

/* =========================================================
   JSON-LD SEO: Organization + LocalBusiness + Sitelinks
   (Adjust with your real identifiers and URLs)
   ========================================================= */
(() => {
  const ld = (obj) => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  };

  // 1) Organization
  ld({
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Noble Dental Care",
    "url":"https://www.nobledentalcare.in/",
    "logo":"https://www.nobledentalcare.in/images/logo.svg",
    "sameAs":[
      "https://www.instagram.com/noble_dental_care",
      "https://www.facebook.com/nobledentalcare",
      "https://g.co/kgs/your-gbp-shortname"
    ]
  });

  // 2) LocalBusiness (Dentist)
  ld({
    "@context":"https://schema.org",
    "@type":"Dentist",
    "name":"Noble Dental Care",
    "image":"https://www.nobledentalcare.in/images/clinic/hero.webp",
    "url":"https://www.nobledentalcare.in/",
    "telephone":"+91-86104-25342",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"Nallagandla Road, Serilingampally",
      "addressLocality":"Hyderabad",
      "addressRegion":"Telangana",
      "postalCode":"500019",
      "addressCountry":"IN"
    },
    "openingHoursSpecification":[
      {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"11:00","closes":"22:00"},
      {"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"15:00","closes":"22:00"}
    ],
    "geo":{"@type":"GeoCoordinates","latitude":17.463,"longitude":78.321},
    "priceRange":"₹₹",
    "founder":"Dr Dhivakaran",
    "medicalSpecialty":["Endodontics","Implantology","Orthodontics","PediatricDentistry"]
  });

  // 3) WebSite + SearchAction (sitelinks)
  ld({
    "@context":"https://schema.org",
    "@type":"WebSite",
    "url":"https://www.nobledentalcare.in/",
    "name":"Noble Dental Care",
    "potentialAction":{
      "@type":"SearchAction",
      "target":"https://www.nobledentalcare.in/search?q={query}",
      "query-input":"required name=query"
    }
  });
})();
