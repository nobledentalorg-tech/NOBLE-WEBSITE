/* =========================================================
   Dental Implants — Page Script (implants.js)
   - Helpers ($, $$, on)
   - Parallax hero layers
   - Sticky TOC → converts to header ribbon on scroll/overlap
   - Smooth scroll + ScrollSpy + hash sync + keyboard nav
   - Self-eligibility quick check (patient-friendly messaging)
   - Reveal-on-scroll animations for cards/sections
   - Light a11y + reduced motion support
   ========================================================= */

(() => {
  /* -------------------- Helpers -------------------- */
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opt) => el && el.addEventListener(ev, fn, opt);

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const raf = (cb) => (reduceMotion.matches ? cb() : requestAnimationFrame(cb));

  /* -------------------- Parallax (hero layers) -------------------- */
  const layers = $$('[data-parallax]');
  let ticking = false;

  function parallaxUpdate() {
    const y = window.scrollY || 0;
    layers.forEach(el => {
      const speed = parseFloat(el.dataset.parallax || '0');
      // Only translate the Y of each layer; GPU-friendly
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  }
  function onScrollParallax() {
    if (ticking || reduceMotion.matches) return;
    ticking = true;
    requestAnimationFrame(parallaxUpdate);
  }
  if (layers.length) {
    on(window, 'scroll', onScrollParallax, { passive: true });
    parallaxUpdate();
  }

  /* -------------------- TOC: sticky → header mode -------------------- */
  const toc = $('.toc');
  const hero = $('.implant-hero');

  function setTocHeaderMode(onHeader) {
    if (!toc) return;
    toc.classList.toggle('as-header', onHeader);
    document.body.classList.toggle('has-toc-header', onHeader);
  }

  // Trigger header-mode when hero is mostly scrolled out or when content overlaps
  function evalTocMode() {
    if (!toc || !hero) return;
    const rect = hero.getBoundingClientRect();
    const trigger = rect.bottom <= 64; // hero bottom above ~header height
    setTocHeaderMode(trigger);
  }
  on(window, 'scroll', () => raf(evalTocMode), { passive: true });
  on(window, 'resize', () => raf(evalTocMode));
  evalTocMode();

  /* -------------------- ScrollSpy + Smooth Scroll + Hash Sync -------------------- */
  if (toc) {
    const links = $$('.toc a[href^="#"]', toc)
      .filter(a => !!$(a.getAttribute('href')));

    // Map links <-> sections
    const sections = links.map(link => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el && el.tabIndex < 0) el.tabIndex = -1; // focusable for a11y
      return { id, el, link, ratio: 0 };
    });

    // Compute total header offset (site header + TOC header when active)
    const siteHeader = $('.site-header');
    const headerOffsetPx = () => {
      const h1 = siteHeader ? siteHeader.getBoundingClientRect().height : 0;
      const h2 = toc.classList.contains('as-header') ? toc.getBoundingClientRect().height : 0;
      return Math.round(h1 + h2 + 8);
    };

    // Keep scroll-margin-top synced so scrollIntoView aligns under headers
    function applyScrollMargins() {
      const m = headerOffsetPx();
      sections.forEach(s => s.el && s.el.style.setProperty('scroll-margin-top', m + 'px'));
    }
    applyScrollMargins();

    // Smooth scroll (respects reduced motion)
    function scrollToSection(target) {
      if (!target) return;
      target.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
      // Focus for screen readers without jumping
      setTimeout(() => target.focus({ preventScroll: true }), 10);
    }

    // Click handling
    on(toc, 'click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const s = sections.find(x => x.id === id);
      if (!s) return;
      e.preventDefault();
      scrollToSection(s.el);
      history.replaceState(null, '', '#' + id);
    });

    // Keyboard navigation
    on(toc, 'keydown', (e) => {
      const i = links.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        (links[i + 1] || links[0]).focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        (links[i - 1] || links[links.length - 1]).focus();
      } else if (e.key === 'Home') {
        e.preventDefault(); links[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault(); links[links.length - 1].focus();
      }
    });

    // IntersectionObserver: update active link + per-link progress
    let activeId = null;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        const s = sections.find(x => x.el === ent.target);
        if (!s) return;
        s.ratio = ent.intersectionRatio;

        // Boost ratio when near top under headers to avoid jitter
        const top = ent.boundingClientRect.top - headerOffsetPx();
        if (top <= 220 && top >= -220) s.ratio += 0.2;
      });

      const best = sections
        .filter(s => s.el.getBoundingClientRect().bottom > headerOffsetPx() + 40)
        .sort((a,b) => b.ratio - a.ratio)[0];

      if (best && best.id !== activeId) {
        activeId = best.id;
        links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + activeId));
        links.forEach(a => a.removeAttribute('aria-current'));
        const act = links.find(a => a.getAttribute('href') === '#' + activeId);
        act && act.setAttribute('aria-current', 'true');
        // Update hash without extra history entries
        history.replaceState(null, '', '#' + activeId);
      }

      // Per-link progress underline
      if (activeId) {
        const s = sections.find(x => x.id === activeId);
        if (s) {
          const rect = s.el.getBoundingClientRect();
          const start = headerOffsetPx();
          const total = Math.max(1, rect.height + start);
          const progressed = Math.min(Math.max((start - rect.top) / total, 0), 1);
          sections.forEach(x => x.link.style.setProperty('--progress', x === s ? String(progressed) : '0'));
        }
      }
    }, {
      root: null,
      rootMargin: `-${headerOffsetPx()}px 0px -40% 0px`,
      threshold: Array.from({ length: 21 }, (_, i) => i / 20)
    });

    sections.forEach(s => s.el && io.observe(s.el));

    // Keep measurements fresh
    const recalc = () => {
      applyScrollMargins();
      io.rootMargin = `-${headerOffsetPx()}px 0px -40% 0px`;
    };
    on(window, 'resize', () => raf(recalc));
    on(window, 'scroll', () => raf(recalc), { passive: true });

    // Align to existing hash on load (avoid native jump)
    window.addEventListener('load', () => {
      const id = decodeURIComponent((location.hash || '').slice(1));
      const s = sections.find(x => x.id === id);
      if (s) setTimeout(() => scrollToSection(s.el), 20);
    });

    // Back/forward hash navigation
    on(window, 'hashchange', (e) => {
      const id = decodeURIComponent((location.hash || '').slice(1));
      const s = sections.find(x => x.id === id);
      if (s) {
        e.preventDefault?.();
        scrollToSection(s.el);
      }
    });
  }

  /* -------------------- Self-Eligibility Logic -------------------- */
  const eligForm = $('#elig-form');
  const eligOut  = $('#elig-result');

  function computeEligibility() {
    if (!eligForm || !eligOut) return;

    // Gather flags
    const checked = (name) => !!eligForm.querySelector(`input[name="${name}"]`)?.checked;
    const redFlags = [
      checked('uncontrolled'),
      checked('activeinfection'),
      checked('bleedingdisorder')
    ].filter(Boolean).length;

    const cautions = [
      checked('anticoagulants'),
      checked('antiresorptives'),
      checked('smoking')
    ].filter(Boolean).length;

    const goodControl = [
      checked('wellcontrolled'),
      checked('bpok'),
      checked('norecentevents')
    ].filter(Boolean).length;

    // Compose friendly message
    let msg = '';
    if (redFlags > 0) {
      msg = 'Not ready yet — we’ll stabilise medical and oral factors first, then reassess. Please book a consult for a personalised plan.';
    } else if (cautions >= 2 || goodControl <= 1) {
      msg = 'Likely eligible with precautions (physician clearance, local haemostasis and strict hygiene). Our surgeon will tailor your plan.';
    } else {
      msg = 'Likely eligible for implants. Next step: CBCT and digital planning for a precise, safe outcome.';
    }

    // Longevity hint (non-promise)
    const longevity = checked('wellcontrolled') && checked('bpok') && !checked('smoking')
      ? 'With good control and reviews, implants often last for decades.'
      : 'Longevity improves with control of systemic factors and regular reviews.';

    eligOut.textContent = `${msg} ${longevity}`;
  }
  if (eligForm) {
    on(eligForm, 'change', computeEligibility);
    computeEligibility();
  }

  /* -------------------- Reveal-on-Scroll Animations -------------------- */
  const revealEls = $$('.step, .t-card, .fact, .table, .cta-stripe, .map-card');
  if (revealEls.length) {
    revealEls.forEach(el => el.style.setProperty('opacity', '0'));
    const rev = new IntersectionObserver((ents, obs) => {
      ents.forEach(ent => {
        if (!ent.isIntersecting) return;
        const el = ent.target;
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        // Start slightly below for subtle lift
        el.animate(
          [
            { transform: 'translateY(12px)', opacity: 0 },
            { transform: 'translateY(0px)', opacity: 1 }
          ],
          reduceMotion.matches ? 0 : 450
        );
        obs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    revealEls.forEach(el => rev.observe(el));
  }

  /* -------------------- Polishing: external links noopener ------------- */
  $$('a[target="_blank"]').forEach(a => {
    const rel = (a.getAttribute('rel') || '').toLowerCase();
    if (!/noopener/.test(rel)) a.setAttribute('rel', (rel ? rel + ' ' : '') + 'noopener');
  });

  /* -------------------- Small UX niceties -------------------- */
  // Make hero buttons float a touch less if reduced motion
  if (reduceMotion.matches) {
    $$('.hero-wrap .btn').forEach(b => b.style.animation = 'none');
  }
})();
