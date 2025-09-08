/* =========================================================
   Noble Dental Care — Dental Implants Page JS
   (parallax, smooth scroll, sticky TOC, eligibility checker,
    lazy images, reveal-on-scroll, currency toggle)
   ========================================================= */

(() => {
  /* ---------- tiny helpers ---------- */
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================
     1) Parallax hero (mouse + scroll) w/ reduced-motion
     ======================================================= */
  const hero = $('.implant-hero');
  if (hero && !prefersReduced){
    const layers = $$('.p-layer', hero);
    let sx = 0, sy = 0, cy = 0, ticking = false;

    on(hero, 'mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      sx = x; sy = y; requestTick();
    });

    on(window, 'scroll', () => { cy = window.scrollY || 0; requestTick(); }, {passive:true});

    function requestTick(){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(render);
    }
    function render(){
      const scrollFactor = Math.min(1, (cy / 600));
      layers.forEach((l, i) => {
        const depth = (i+1) * 6; // different speeds
        const tx = sx * depth * 8;
        const ty = sy * depth * 6 + scrollFactor * depth * 3;
        l.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      ticking = false;
    }
    render();
  }

  /* =======================================================
     2) Smooth scroll for in-page TOC links
     ======================================================= */
  $$('a[href^="#"]').forEach(a => {
    on(a,'click',(e)=>{
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

  /* =======================================================
     3) Sticky TOC active link via IntersectionObserver
     ======================================================= */
  const toc = $('.toc');
  if (toc){
    const links = $$('a[href^="#"]', toc);
    const map = new Map(links.map(a => [a.getAttribute('href'), a]));
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = '#'+entry.target.id;
        const link = map.get(id);
        if (!link) return;
        if (entry.isIntersecting){
          links.forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    links.forEach(a => {
      const sel = a.getAttribute('href');
      const sec = sel ? $(sel) : null;
      if (sec) obs.observe(sec);
    });
  }

  /* =======================================================
     4) Self-Eligibility Check
     - Requires a form#selfCheckForm with checkboxes/radios
     - Each input can carry:
         data-type="contra|caution|good"
         data-weight="number" (optional, default 1)
     - Optional: numeric inputs with data-metric (e.g., hba1c)
     - Outputs to:
         #selfCheckBadge, #selfCheckSummary, #selfCheckNext
     ======================================================= */
  const form = $('#selfCheckForm');
  if (form){
    const badge   = $('#selfCheckBadge');
    const summary = $('#selfCheckSummary');
    const next    = $('#selfCheckNext');

    function scoreForm(){
      let contra = 0, caution = 0, good = 0;

      // checkboxes & radios
      $$('input[type="checkbox"],input[type="radio"]', form).forEach(el=>{
        if (!el.checked) return;
        const type = el.dataset.type || 'caution';
        const w = Number(el.dataset.weight || 1);
        if (type === 'contra') contra += w;
        else if (type === 'caution') caution += w;
        else good += w;
      });

      // metrics (optional): e.g., HbA1c, BP
      const hba = $('input[data-metric="hba1c"]', form);
      if (hba && hba.value){
        const v = parseFloat(hba.value);
        if (!isNaN(v)){
          if (v >= 8) contra += 2;
          else if (v >= 7) caution += 1;
          else good += .5;
        }
      }
      const sys = $('input[data-metric="bp-sys"]', form);
      const dia = $('input[data-metric="bp-dia"]', form);
      if (sys && dia && sys.value && dia.value){
        const s = parseFloat(sys.value), d = parseFloat(dia.value);
        if (!isNaN(s) && !isNaN(d)){
          if (s >= 160 || d >= 100) contra += 2;
          else if (s >= 140 || d >= 90) caution += 1;
          else good += .5;
        }
      }

      // decision
      let state = 'eligible';
      if (contra >= 2 || (contra >= 1 && caution >= 2)) state = 'not-eligible';
      else if (caution >= 1) state = 'optimize';

      // paint UI
      if (badge){
        badge.textContent =
          state === 'eligible'    ? 'Likely Eligible'
        : state === 'optimize'    ? 'Eligible with Optimization'
        :                           'Needs Specialist Clearance';
        badge.className = 'badge-soft ' + (
          state === 'eligible' ? '' : state === 'optimize' ? 'warn' : 'danger'
        );
        if (state === 'optimize') badge.style.background = 'linear-gradient(135deg,#f59e0b,#fde047)';
        if (state === 'not-eligible') badge.style.background = 'linear-gradient(135deg,#ef4444,#f97316)';
      }
      if (summary){
        summary.innerHTML =
          state === 'eligible'
          ? 'Based on your answers, you look like a good candidate for dental implants. Book a consult to confirm imaging (CBCT) and finalize your plan.'
          : state === 'optimize'
          ? 'You may be eligible after medical optimization (e.g., glycemic control, BP management, smoking cessation) and specialist clearance. We’ll tailor a plan and timelines.'
          : 'Right now, implants may not be advised without specialist clearance (e.g., bleeding disorders, high-dose bisphosphonates, recent head/neck radiation, poorly controlled diabetes/hypertension). We can discuss safer alternatives or staged care.';
      }
      if (next){
        next.hidden = false;
      }
    }

    on(form,'change', scoreForm);
    on(form,'input', scoreForm);
    // prime
    scoreForm();
  }

  /* =======================================================
     5) Lazy-load images (data-src → src)
     ======================================================= */
  const lazyImgs = $$('img[data-src]');
  if ('IntersectionObserver' in window && lazyImgs.length){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting) return;
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        obs.unobserve(img);
      });
    }, { rootMargin: '300px' });
    lazyImgs.forEach(img => io.observe(img));
  } else {
    // fallback
    lazyImgs.forEach(img => { img.src = img.dataset.src; img.removeAttribute('data-src'); });
  }

  /* =======================================================
     6) Reveal-on-scroll (elements with [data-reveal])
     ======================================================= */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length){
    revealEls.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(12px)'; });
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.transition = 'opacity .6s ease, transform .6s ease';
        el.style.opacity = 1; el.style.transform = 'translateY(0)';
        obs.unobserve(el);
      });
    }, { rootMargin: '140px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* =======================================================
     7) Currency toggle (optional UI: #currencyToggle)
     - Expects price nodes with [data-inr] numeric (₹)
     - Converts to USD/EUR (approx) for info only
     ======================================================= */
  const cSel = $('#currencyToggle');
  if (cSel){
    const nodes = $$('[data-inr]');
    const RATES = { INR: 1, USD: 0.012, EUR: 0.011 }; // approx; keep informational
    function paint(){
      const cur = cSel.value || 'INR';
      const fx  = RATES[cur] || 1;
      nodes.forEach(n=>{
        const v = Number(n.dataset.inr || 0);
        let out = v;
        let symbol = '₹';
        if (cur !== 'INR'){
          out = Math.round(v * fx);
          symbol = cur === 'USD' ? '$' : '€';
        }
        n.textContent = symbol + out.toLocaleString();
        n.dataset.currency = cur;
      });
    }
    on(cSel, 'change', paint);
    paint();
  }

  /* =======================================================
     8) Copy-link on section headings (UX nicety)
     ======================================================= */
  $$('section[id] .section-title, h2[id], h3[id]').forEach(h=>{
    const id = h.id || h.closest('section')?.id;
    if (!id) return;
    h.style.cursor = 'pointer';
    on(h,'click', ()=>{
      const url = `${location.origin}${location.pathname}#${id}`;
      navigator.clipboard?.writeText(url);
      h.classList.add('copied');
      setTimeout(()=> h.classList.remove('copied'), 900);
      if (!prefersReduced) h.animate([{transform:'scale(1.0)'},{transform:'scale(1.03)'},{transform:'scale(1.0)'}],{duration:250});
    });
  });

  /* =======================================================
     9) Basic light hover tilt for .step & .t-card (optional)
     ======================================================= */
  function addTilt(card, max=6){
    if (!card || prefersReduced) return;
    let rAF = 0;
    function move(e){
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(()=>{
        card.style.transform = `perspective(700px) rotateX(${(-y*max).toFixed(2)}deg) rotateY(${(x*max).toFixed(2)}deg) translateY(-4px)`;
      });
    }
    function leave(){
      cancelAnimationFrame(rAF);
      card.style.transform = '';
    }
    on(card,'mousemove',move);
    on(card,'mouseleave',leave);
  }
  $$('.step, .t-card').forEach(el => addTilt(el));

  /* =======================================================
     10) Safety: Guard external links to open in new tab
     ======================================================= */
  $$('a[href^="http"]').forEach(a=>{
    try{
      const url = new URL(a.href);
      if (url.origin !== location.origin){
        a.target = '_blank';
        a.rel = 'noopener external nofollow';
      }
    }catch{ /* ignore */ }
  });

})();

/* =======================================================
   TOC adaptive mode: sidebar → top header on scroll
   - No HTML changes needed: we create a sentinel.
   - Works alongside the sticky/active-link observer you have.
   ======================================================= */
(() => {
  const toc = document.querySelector('.toc');
  if (!toc) return;

  // Create a sentinel right after the hero (or at top of main content)
  let sentinel = document.getElementById('toc-sentinel');
  if (!sentinel) {
    sentinel = document.createElement('div');
    sentinel.id = 'toc-sentinel';
    sentinel.style.cssText = 'position:relative;width:1px;height:1px;margin:0;padding:0;opacity:0;';
    const afterHero =
      document.querySelector('.implant-hero')?.nextElementSibling ||
      document.querySelector('main')?.firstElementChild ||
      document.body.firstElementChild;
    (afterHero?.parentNode || document.body).insertBefore(sentinel, afterHero);
  }

  let headerMode = false;
  const docEl = document.documentElement;
  const body = document.body;

  // Toggle header mode
  function setHeader(on){
    if (on === headerMode) return;
    headerMode = on;
    toc.classList.toggle('as-header', on);
    body.classList.toggle('has-toc-header', on);

    // sync padding to actual height (in case you tweak CSS)
    if (on) {
      // Wait a tick for layout, then measure
      requestAnimationFrame(() => {
        const h = toc.getBoundingClientRect().height || 56;
        body.style.paddingTop = h + 'px';
      });
    } else {
      body.style.paddingTop = '';
    }
  }

  // When sentinel leaves the viewport (i.e., you’ve scrolled into content), go header-mode
  const io = new IntersectionObserver((entries) => {
    const e = entries[0];
    setHeader(!e.isIntersecting);
  }, { rootMargin: '0px 0px 0px 0px', threshold: 0 });

  io.observe(sentinel);

  // If window resizes, recompute padding when in header mode
  window.addEventListener('resize', () => {
    if (!headerMode) return;
    const h = toc.getBoundingClientRect().height || 56;
    body.style.paddingTop = h + 'px';
  }, { passive: true });
})();
