// ✅ Helpers
const $  = (s, scope=document) => scope.querySelector(s);
const $$ = (s, scope=document) => Array.from(scope.querySelectorAll(s));
const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

document.addEventListener("DOMContentLoaded", () => {
  const header = $(".site-header");
  const menuToggle = $("#menuToggle");
  const nav = $("#primaryNav");
  const submenuToggles = $$(".submenu-toggle");

  /* Shrink header on scroll */
  window.addEventListener("scroll", () => {
    header.classList.toggle("shrink", window.scrollY > 50);
  });

  /* Mobile menu toggle */
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
    nav.setAttribute("aria-hidden", expanded ? "true" : "false");
    document.body.classList.toggle("no-scroll", !expanded);
  });

  /* Submenu toggle logic */
  submenuToggles.forEach(toggle => {
    const menuId = toggle.getAttribute("aria-controls");
    const menu = document.getElementById(menuId);

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.setAttribute("aria-hidden", expanded ? "true" : "false");
    });

    // Close submenu when clicking outside
document.addEventListener("click", (e) => {
  submenuToggles.forEach(toggle => {
    const menuId = toggle.getAttribute("aria-controls");
    const menu = document.getElementById(menuId);
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    }
  });
});

    // Auto-close submenu when clicking a link
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      });
    });
  });
});


function openDialog(id){
  fillDialog(id);
  if (typeof dlg.showModal === 'function') dlg.showModal(); 
  else dlg.setAttribute('open','');
  $('#docSheet .sheet-close')?.focus(); // <-- Add this line
  history.replaceState(null, "", `#${id}`);
}

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
    if (typeof dlg.showModal === 'function') dlg.showModal(); 
    else dlg.setAttribute('open','');
    history.replaceState(null, "", `#${id}`);
  }

  function closeDialog(){
    if (typeof dlg.close === 'function') dlg.close(); 
    else dlg.removeAttribute('open');
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  // Card click → open popup
  on(grid,'click',(e)=>{
    const card = e.target.closest('.ndc-card'); if (!card) return;
    if (e.target.closest('.open') || e.target.closest('.block')) openDialog(card.dataset.id);
  });

  // Close popup
  on(closeBtn,'click', closeDialog);
  on(dlg,'keydown',(e)=>{ if (e.key==='Escape') closeDialog(); });
  on(dlg,'click',(e)=>{ 
    const r=dlg.getBoundingClientRect(); 
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) closeDialog(); 
  });

  // Book with this doctor → scroll & close popup
  on($('#sheetBook'),'click',(e)=>{
    const name = e.currentTarget?.dataset?.doc || '';
    const sel = $('#doctorSelect'); 
    if (sel && name){
      sel.value = name;
      document.querySelector('#get-in-touch')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeDialog(); // ✅ now closes correctly
  });

  // deep-link (#dhivakaran, etc.)
  function checkHash(){ 
    const id = location.hash.replace('#',''); 
    if (id && DATA[id]) openDialog(id); 
  }
  window.addEventListener('hashchange', checkHash); 
  checkHash();

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


// Duplicate testimonials for smooth infinite loop
(() => {
  const loop = document.querySelector('.testimonials-loop');
  if (!loop) return;
  loop.innerHTML += loop.innerHTML; // duplicate content for seamless scroll
})();


/* Certificates ticker auto-scroll with pause + controls */
(() => {
  const track = document.getElementById("certsTrack");
  if (!track) return;

  let isPaused = false;
  track.addEventListener("mouseenter", () => isPaused = true);
  track.addEventListener("mouseleave", () => isPaused = false);

  // duplicate track for seamless loop
  track.innerHTML += track.innerHTML;

  let pos = 0;
  function step() {
    if (!isPaused) {
      pos -= 0.5; // speed
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(step);
  }
  step();

  // manual controls
  document.querySelector("#certs-ticker .prev")?.addEventListener("click", () => {
    pos += 60;
  });
  document.querySelector("#certs-ticker .next")?.addEventListener("click", () => {
    pos -= 60;
  });
})();


/* Footer year */
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

/* Back to top button */
(() => {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuToggle");
  const navList = document.getElementById("primaryNav");

  if (menuBtn && navList) {
    // Toggle menu open/close
    menuBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      navList.setAttribute("aria-hidden", !isOpen);
    });

    // ✅ Close menu on any link click
    navList.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        navList.setAttribute("aria-hidden", "true");
      });
    });
  }
});
