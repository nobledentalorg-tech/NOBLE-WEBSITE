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
   2. Doctors Popup (Focus Trap + Book with Doctor)
========================================================= */
(() => {
  const grid = $('#docGrid');
  const dlg = $('#docSheet');
  if (!grid || !dlg) return;

  const DATA = {
    dhivakaran: {
      name: "Dr Dhivakaran",
      role: "Chief Medical Director • Endodontist",
      hero: "images/doctors/dhivakaran-hero.webp",
      bio: "Painless RCT & Implants specialist with extensive clinical research.",
      expertise: ["Painless RCT", "Dental Implants", "Preventive Dentistry"]
    },
    roger: {
      name: "Dr Roger Ronaldo",
      role: "Oral & Maxillofacial Surgeon",
      hero: "images/doctors/roger-hero.webp",
      bio: "Expert in implants, reconstruction & trauma surgery.",
      expertise: ["Implantology", "Reconstruction", "Trauma Surgery"]
    },
    deepak: {
      name: "Dr Deepak",
      role: "Orthodontist",
      hero: "images/doctors/deepak-hero.webp",
      bio: "Smile design, aligners, and complex malocclusion.",
      expertise: ["Smile Design", "Clear Aligners", "Complex Malocclusion"]
    },
    idhaya: {
      name: "Dr Idhaya",
      role: "Pediatric & Preventive Dentist",
      hero: "images/doctors/idhaya-hero.webp",
      bio: "Child dentistry, prevention & insurance advisory.",
      expertise: ["Child Dentistry", "Insurance Advisory", "Preventive Dentistry"]
    },
    thikvijay: {
      name: "Dr Thik Vijay",
      role: "Aesthetic & Cosmetic Dentist",
      hero: "images/doctors/thikvijay-hero.webp",
      bio: "11+ years in cosmetic restorations, veneers, and smile makeovers.",
      expertise: ["Smile Design", "Cosmetic Dentistry", "Aesthetic Restorations"]
    }
  };

  let lastFocus = null, trapRemove;

  function trapFocus(dlg) {
    const sel = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = $$(sel, dlg);
    if (!focusables.length) return () => {};
    const first = focusables[0], last = focusables[focusables.length - 1];
    function handler(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      if (e.key === 'Escape') closePopup();
    }
    dlg.addEventListener('keydown', handler);
    return () => dlg.removeEventListener('keydown', handler);
  }

  function fillPopup(id) {
    const d = DATA[id]; if (!d) return;
    $('#sheetHero').src = d.hero; $('#sheetHero').alt = d.name;
    $('#sheetTitle').textContent = d.name;
    $('#sheetRole').textContent = d.role;
    $('#sheetBio').textContent = d.bio;
    $('#sheetExpertise').innerHTML = d.expertise.map(e => `<span class="chip">${e}</span>`).join('');
    $('#sheetBook').dataset.doc = id;
  }

  function openPopup(id) {
    fillPopup(id);
    lastFocus = document.activeElement;
    dlg.showModal();
    trapRemove = trapFocus(dlg);
    dlg.querySelector('.sheet-close')?.focus();
  }

  function closePopup() {
    dlg.close();
    trapRemove && trapRemove();
    lastFocus?.focus();
  }

  // ✅ Attach card click
  on(grid, 'click', e => {
    const card = e.target.closest('.ndc-card');
    if (card && (e.target.closest('.open') || e.target.closest('.block'))) {
      e.preventDefault();
      openPopup(card.dataset.id);
    }
  });

  // ✅ Close button
  on($('.sheet-close', dlg), 'click', closePopup);
  on(dlg, 'click', e => { if (e.target === dlg) closePopup(); });

  // ✅ Book with this doctor
  const sheetBookBtn = $('#sheetBook');
  if (sheetBookBtn) {
    on(sheetBookBtn, 'click', () => {
      const docId = sheetBookBtn.dataset.doc;
      closePopup();

      // Scroll smoothly to booking section
      document.querySelector('#get-in-touch')?.scrollIntoView({ behavior: 'smooth' });

      // Auto-fill doctor select
      const doctorSelect = $('#doctorSelect');
      if (doctorSelect && docId) {
        const d = DATA[docId];
        if (d) {
          doctorSelect.value = d.name;
          const resetBtn = $('#resetDoctor');
          if (resetBtn) resetBtn.hidden = false;
        }
      }
    });
  }

  // ✅ Reset doctor handler
  const resetBtn = $('#resetDoctor');
  const doctorSelect = $('#doctorSelect');
  if (resetBtn && doctorSelect) {
    on(resetBtn, 'click', () => {
      doctorSelect.value = "";
      resetBtn.hidden = true;
    });
  }
})();

// Auto-fill doctor select
const doctorSelect = $('#doctorSelect');
if (doctorSelect && docId) {
  const d = DATA[docId];
  if (d) {
    doctorSelect.value = d.name;

    // ✅ Visual pulse highlight
    doctorSelect.classList.add('pulse');
    setTimeout(() => doctorSelect.classList.remove('pulse'), 2000);

    const resetBtn = $('#resetDoctor');
    if (resetBtn) resetBtn.hidden = false;
  }
}

/* =========================================================
   3. Booking Form: Voice Input + Autosave + WhatsApp Handoff
========================================================= */
(() => {
  const form = $('#apptForm');
  const notes = $('#notes');
  if (!form) return;

  /* --- Voice Input --- */
  const micBtn = document.createElement('button');
  micBtn.type = 'button'; micBtn.textContent = '🎤';
  micBtn.className = 'mic-btn'; notes?.insertAdjacentElement('afterend', micBtn);

  if ('webkitSpeechRecognition' in window) {
    const rec = new webkitSpeechRecognition();
    rec.lang = 'en-IN'; rec.continuous = false; rec.interimResults = false;
    on(micBtn, 'click', () => rec.start());
    rec.onresult = e => {
      notes.value += (notes.value ? ' ' : '') + e.results[0][0].transcript;
      notes.dispatchEvent(new Event('input'));
    };
  } else micBtn.style.display = 'none';

  /* --- Autosave --- */
  const key = 'ndc-booking';
  on(form, 'input', () => {
    const data = {};
    [...form.elements].forEach(el => el.name && (data[el.name] = el.value));
    localStorage.setItem(key, JSON.stringify(data));
  });
  const saved = localStorage.getItem(key);
  if (saved) Object.entries(JSON.parse(saved)).forEach(([k,v]) => form.elements[k] && (form.elements[k].value = v));

  /* --- WhatsApp Handoff --- */
  const daySel = $('#daySelect'), timeSel = $('#timeSelect');
  const waFill = $('#waFill'), waLink = $('#waLink'), summary = $('#summaryText');
  const bookBtn = $('#bookBtn'), modal = $('#successModal');

  const hours = {0:[15,22],1:[11,22],2:[11,22],3:[11,22],4:[11,22],5:[11,22],6:[11,22]};
  const fmtDay = d => d.toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short"});
  const fmtTime = d => d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});

  function buildDays() {
    const today = new Date(); let html='';
    for(let i=0;i<14;i++){const d=new Date(today);d.setDate(today.getDate()+i);
      html+=`<option value="${d.toISOString()}">${fmtDay(d)}</option>`;}
    daySel.innerHTML=html;
  }
  function buildTimes(iso){
    let opts='<option value="">Select time</option>'; if(!iso){timeSel.innerHTML=opts;return;}
    const d=new Date(iso), [o,c]=hours[d.getDay()]||[0,0];
    const start=new Date(d); start.setHours(o,0,0,0); const end=new Date(d); end.setHours(c,0,0,0);
    for(let t=new Date(start);t<end;t.setMinutes(t.getMinutes()+30)){opts+=`<option value="${t.toISOString()}">${fmtTime(t)}</option>`;}
    timeSel.innerHTML=opts;
  }
  function updateLinks(){
    const f=new FormData(form); const dVal=daySel.value?new Date(daySel.value):null, tVal=timeSel.value?new Date(timeSel.value):null;
    const lines=[`Hi Noble Dental Care, I'd like to book:`,`• Name: ${f.get("name")||""}`,`• Phone: ${f.get("phone")||""}`,`• Service: ${f.get("service")||""}`,`• Doctor: ${f.get("doctor")||""}`,`• Contact: ${f.get("contact")||"WhatsApp"}`,`• Time: ${dVal?fmtDay(dVal):"-"} ${tVal?fmtTime(tVal):"-"}`];
    if(f.get("notes"))lines.push(`• Notes: ${f.get("notes")}`);
    const url=`https://wa.me/918610425342?text=${encodeURIComponent(lines.join("\n"))}`;
    waFill.href=url; waLink.href=url;
  }
  function updateSummary(){
    const dVal=daySel.value?new Date(daySel.value):null,tVal=timeSel.value?new Date(timeSel.value):null;
    if(dVal&&tVal){summary.textContent=`${fmtDay(dVal)} • ${fmtTime(tVal)}`; bookBtn.disabled=false;}
    else{summary.textContent="Choose a day & time"; bookBtn.disabled=true;}
    updateLinks();
  }

  buildDays(); buildTimes(daySel.value); updateSummary();
  on(daySel,'change',()=>{buildTimes(daySel.value);updateSummary();});
  on(timeSel,'change',updateSummary);
  on(form,'input',updateLinks);
  on(form,'submit',e=>{e.preventDefault();if(bookBtn.disabled)return;updateLinks();modal.showModal();window.open(waFill.href,'_blank');});
  on($('#closeSuccess'),'click',()=>modal.close());
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
