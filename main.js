/* =========================================================
   Noble Dental Care — Full Main JS (Optimized 2025)
   Features:
   - Mobile Nav (with focus trap)
   - Doctors popup (focus trap)
   - Booking form (voice input, autosave, WA handoff)
   - FAQ deep-linking
   - Dynamic JSON-LD injection
   - Sticky booking bar + WhatsApp promo CTA
   - Scroll depth tracking
   - Footer year auto update
========================================================= */

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const on = (el, ev, fn, opts = false) => el && el.addEventListener(ev, fn, opts);

/* =========================================================
   1. Mobile Nav with Focus Trap
========================================================= */
(() => {
  const nav = $('#primaryNav');
  const btn = $('#menuToggle');
  if (!nav || !btn) return;

  let trapRemove;

  function trapFocus(container) {
    const fEls = $$(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      container
    );
    if (!fEls.length) return () => {};
    const first = fEls[0], last = fEls[fEls.length - 1];

    function handler(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    }
    container.addEventListener('keydown', handler);
    return () => container.removeEventListener('keydown', handler);
  }

  on(btn, 'click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    nav.hidden = open;
    document.body.classList.toggle('no-scroll', !open);

    if (!open) {
      trapRemove = trapFocus(nav);
      nav.querySelector('a, button')?.focus();
    } else if (trapRemove) trapRemove();
  });
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
   Doctors directory: search/filter, dialog, deep link, preselect
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
   4. FAQ Deep-Link Expansion
========================================================= */
(() => {
  if(location.hash.startsWith('#faq-')){
    const el=$(location.hash); if(el && el.tagName==='DETAILS') el.open=true;
    el?.scrollIntoView({behavior:'smooth'});
  }
})();

/* =========================================================
   5. Dynamic JSON-LD Injection
========================================================= */
(() => {
  const ld = {
    "@context":"https://schema.org","@type":"Dentist",
    "name":"Noble Dental Care","url":location.origin,
    "telephone":"+91-86104-25342","priceRange":"₹₹",
    "address":{"@type":"PostalAddress","streetAddress":"Nallagandla","addressLocality":"Hyderabad","postalCode":"500019","addressRegion":"Telangana","addressCountry":"IN"},
    "geo":{"@type":"GeoCoordinates","latitude":17.456,"longitude":78.321},
    "openingHours":"Mo-Su 11:00-22:00","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","bestRating":"5","ratingCount":"500"}
  };
  const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(ld);document.head.appendChild(s);
})();

/* =========================================================
   6. Sticky Booking Bar + WhatsApp Offer
========================================================= */
(() => {
  const bar=document.createElement('div');
  bar.className='sticky-bar';
  bar.innerHTML=`<a href="#get-in-touch">📅 Book</a><a href="https://wa.me/918610425342" target="_blank">💬 WhatsApp</a><a href="tel:+918610425342">☎ Call</a>`;
  document.body.appendChild(bar);

  let shown=false;
  function showOffer(){
    if(shown)return;shown=true;
    const cta=document.createElement('div');
    cta.className='wa-offer';
    cta.innerHTML=` <strong>Whatsapp</strong> this week — <a href="https://wa.me/918610425342" target="_blank">Chat Now</a>`;
    document.body.appendChild(cta);
  }
  on(window,'scroll',()=>{if(window.scrollY>document.body.scrollHeight*0.6)showOffer();},{passive:true});
  on(document,'mouseout',e=>{if(e.clientY<0)showOffer();});
})();

/* =========================================================
   7. Scroll Depth Tracking
========================================================= */
(() => {
  const marks=[0.25,0.5,0.75], fired={};
  on(window,'scroll',()=>{
    const h=document.documentElement.scrollHeight-window.innerHeight,y=window.scrollY;
    marks.forEach(m=>{if(!fired[m]&&y>=h*m){fired[m]=true;console.log(`Scroll depth ${m*100}%`);}});
  },{passive:true});
})();

/* =========================================================
   8. Footer Year Auto Update
========================================================= */
(() => {const y=$('#year');if(y)y.textContent=new Date().getFullYear();})();

// Inside your Doctors Popup IIFE, after closePopup is defined:
const sheetBookBtn = $('#sheetBook');
if (sheetBookBtn) {
  on(sheetBookBtn, 'click', () => {
    const docId = sheetBookBtn.dataset.doc;
    closePopup();

    // Scroll smoothly to booking section
    const booking = document.querySelector('#get-in-touch');
    booking?.scrollIntoView({ behavior: 'smooth' });

    // Auto-fill doctor select
    const doctorSelect = document.querySelector('#doctorSelect');
    if (doctorSelect && docId) {
      const d = DATA[docId];
      if (d) {
        doctorSelect.value = d.name;
        const resetBtn = document.querySelector('#resetDoctor');
        if (resetBtn) resetBtn.hidden = false;
      }
    }
  });
}
