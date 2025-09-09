/* =========================================================
   Implants Page Script (implants.js)
   ========================================================= */
(() => {
  const $  = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opt) => el && el.addEventListener(ev, fn, opt);

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  /* -------------------- Parallax Hero -------------------- */
  const layers = $$('[data-parallax]');
  if (layers.length) {
    on(window, 'scroll', () => {
      const y = window.scrollY || 0;
      layers.forEach(el => {
        const speed = parseFloat(el.dataset.parallax || '0');
        el.style.transform = `translateY(${y * speed}px)`;
      });
    }, { passive: true });
  }

  /* -------------------- Self-Eligibility Check -------------------- */
  const eligForm = $('#elig-form');
  const eligOut  = $('#elig-result');
  if (eligForm && eligOut) {
    const compute = () => {
      const checked = name => !!eligForm.querySelector(`input[name="${name}"]`)?.checked;

      const redFlags = ['uncontrolled','activeinfection','bleedingdisorder']
        .filter(k => checked(k)).length;

      const cautions = ['anticoagulants','antiresorptives','smoking']
        .filter(k => checked(k)).length;

      if (redFlags > 0) {
        eligOut.textContent =
          'Not ready yet — please stabilise medical/oral factors first, then reassess. Consult our doctor for a personalised plan.';
      } else if (cautions >= 2) {
        eligOut.textContent =
          'Likely eligible with precautions — physician clearance, local haemostasis, and strict hygiene needed.';
      } else {
        eligOut.textContent =
          'Likely eligible for implants. Next step: CBCT and digital planning for safe, precise treatment.';
      }
    };
    on(eligForm, 'change', compute);
    compute();
  }

  /* -------------------- ScrollSpy TOC -------------------- */
  const toc = $('.toc');
  if (toc) {
    const links = $$('a[href^="#"]', toc)
      .filter(a => document.getElementById(a.getAttribute('href').slice(1)));
    const sections = links.map(link => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el && el.tabIndex < 0) el.tabIndex = -1; // make focusable
      return { id, el, link, ratio: 0 };
    });

    const headerOffset = () => {
      const h1 = $('.site-header')?.getBoundingClientRect().height || 0;
      return h1 + 8;
    };

    // Smooth scroll
    toc.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const sec = sections.find(s => s.id === id);
      if (!sec) return;
      e.preventDefault();
      sec.el.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
      history.replaceState(null, '', '#' + id);
    });

    // ScrollSpy observer
    let activeId = null;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(ent => {
        const s = sections.find(x => x.el === ent.target);
        if (!s) return;
        s.ratio = ent.intersectionRatio;
      });

      const best = sections
        .filter(s => s.el.getBoundingClientRect().bottom > headerOffset() + 40)
        .sort((a,b) => b.ratio - a.ratio)[0];

      if (best && best.id !== activeId) {
        activeId = best.id;
        links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + activeId));
      }
    }, {
      root: null,
      rootMargin: `-${headerOffset()}px 0px -40% 0px`,
      threshold: Array.from({length: 11}, (_,i)=> i/10)
    });

    sections.forEach(s => s.el && obs.observe(s.el));
  }

  /* -------------------- Reveal-on-Scroll -------------------- */
  const revealEls = $$('.step, .t-card, .fact, .media-card');
  if (revealEls.length) {
    const rev = new IntersectionObserver(ents => {
      ents.forEach(ent => {
        if (!ent.isIntersecting) return;
        ent.target.classList.add('revealed');
        rev.unobserve(ent.target);
      });
    }, { threshold: 0.2 });
    revealEls.forEach(el => rev.observe(el));
  }

  /* -------------------- Lightbox for Gallery -------------------- */
  const galleryItems = $$('.media-card img, .media-card video');
  if (galleryItems.length) {
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <div class="lightbox-body"></div>
      </div>`;
    document.body.appendChild(modal);

    const body = modal.querySelector('.lightbox-body');
    const closeBtn = modal.querySelector('.lightbox-close');

    const openLightbox = el => {
      body.innerHTML = '';
      let clone;
      if (el.tagName === 'IMG') {
        clone = document.createElement('img');
        clone.src = el.src;
        clone.alt = el.alt;
      } else if (el.tagName === 'VIDEO') {
        clone = document.createElement('video');
        clone.src = el.currentSrc || el.src;
        clone.controls = true;
        clone.autoplay = true;
      }
      if (clone) body.appendChild(clone);
      modal.classList.add('open');
      closeBtn.focus();
    };

    const closeLightbox = () => {
      modal.classList.remove('open');
      body.innerHTML = '';
    };

    galleryItems.forEach(item =>
      on(item, 'click', () => openLightbox(item))
    );
    on(closeBtn, 'click', closeLightbox);
    on(modal, 'click', e => { if (e.target === modal) closeLightbox(); });
    on(document, 'keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

})();
