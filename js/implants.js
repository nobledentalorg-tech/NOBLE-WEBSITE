/* =========================================================
   Noble Dental Care — Implants Page JS
   Optimized 2025: parallax, scrollspy, smooth scroll,
   eligibility scoring, media lazy, schema injection
   ========================================================= */

// ---------------------- tiny helpers ----------------------
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const $  = (s, r = document) => r.querySelector(s);
const on = (el, ev, fn, opt) => el && el.addEventListener(ev, fn, opt);

const throttle = (fn, wait = 100) => {
  let t = 0, lastArgs, frame;
  return (...args) => {
    const now = Date.now();
    lastArgs = args;
    if (now - t >= wait) {
      t = now;
      fn(...lastArgs);
    } else if (!frame) {
      frame = requestAnimationFrame(() => {
        frame = null;
        t = Date.now();
        fn(...lastArgs);
      });
    }
  };
};

const prefersReduce = matchMedia('(prefers-reduced-motion: reduce)');

// ---------------------- parallax (subtle) ----------------------
function initParallax() {
  if (prefersReduce.matches) return;
  const layers = $$('[data-parallax]');
  if (!layers.length) return;

  const update = throttle(() => {
    const y = window.scrollY || 0;
    layers.forEach((el) => {
      const sp = parseFloat(el.dataset.parallax || '0');
      el.style.transform = translate3d(0, ${y * sp}px, 0);
    });
  }, 16);

  on(window, 'scroll', update, { passive: true });
  update();
}

// ---------------------- smooth anchor scroll ----------------------
function initSmoothAnchors() {
  const siteHeader = $('.site-header');
  const headerH = () => (siteHeader ? siteHeader.getBoundingClientRect().height : 0);

  on(document, 'click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    target.style.scrollMarginTop = headerH() + 12 + 'px';
    target.scrollIntoView({
      behavior: prefersReduce.matches ? 'auto' : 'smooth',
      block: 'start'
    });
    // keep hash in URL for shareability
    try { history.replaceState(null, '', '#' + id); } catch {}
  });
}

// ---------------------- ScrollSpy + progress ----------------------
function initScrollSpy() {
  const tocLinks = $$('.toc a[href^="#"]').filter((a) =>
    document.getElementById(a.getAttribute('href').slice(1))
  );
  if (!tocLinks.length) return;

  const targets = tocLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1)));
  const siteHeader = $('.site-header');
  const headerH = () => (siteHeader ? siteHeader.getBoundingClientRect().height : 0);

  let active = null;

  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((ent) => {
        const id = ent.target.id;
        const link = tocLinks.find((a) => a.getAttribute('href') === '#' + id);
        if (!link) return;

        // progress within section (for underline animation)
        const rect = ent.target.getBoundingClientRect();
        const prog = Math.min(Math.max((headerH() - rect.top) / (rect.height + headerH()), 0), 1);
        link.style.setProperty('--progress', String(prog));
      });

      // pick most visible as "active"
      const best = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (best) {
        const hash = '#' + best.target.id;
        if (hash !== active) {
          active = hash;
          tocLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === hash));
          try { history.replaceState(null, '', hash); } catch {}
        }
      }
    },
    { rootMargin: -${headerH()}px 0px -45% 0px, threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1] }
  );

  targets.forEach((t) => t && io.observe(t));
}

// ---------------------- eligibility scoring ----------------------
function initEligibility() {
  const form = $('#elig-form');
  const out = $('#elig-result');
  if (!form || !out) return;

  const isChecked = (name) => !!form.querySelector(input[name="${name}"])?.checked;

  const redNames = [
    'recent_mi', 'recent_stroke', 'unstable_angina', 'severe_htn', 'prosthetic_valve',
    'hba1c_high', 'adrenal', 'malnutrition',
    'iv_bisphos', 'denosumab_high', 'headneck_rt', 'ongoing_chemo',
    'bleeding_disorder', 'cirrhosis', 'renal_failure',
    'active_site_infection', 'immunosuppressed_high', 'poor_hygiene_active',
    'heavy_smoke', 'alcohol', 'severe_bruxism', 'under_18', 'pregnant_1', 'unrealistic'
  ];
  const cautionNames = [
    'oral_bisphos', 'antiplatelet', 'warfarin_doac', 'controlled_thyroid',
    'osteoporosis', 'bruxism', 'autoimmune', 'pregnant_2_3'
  ];
  const goodNames = ['good_hba1c', 'good_bp', 'nonsmoker', 'good_hygiene'];

  function score() {
    const reds = redNames.filter(isChecked).length;
    const cauts = cautionNames.filter(isChecked).length;
    const goods = goodNames.filter(isChecked).length;

    let msg = '', tone = 'ok';

    if (reds >= 1) {
      tone = 'bad';
      msg = 'Not ready yet — we will stabilise medical/oral factors and coordinate with your physician before planning implants.';
    } else if (cauts >= 2 || goods <= 1) {
      tone = 'warn';
      msg = 'Likely eligible with precautions: personalised surgical plan, haemostasis strategy, risk-based antibiotics, and physician clearance as needed.';
    } else {
      tone = 'ok';
      msg = 'Likely eligible for implants. Next step: CBCT & digital planning for precise, safe placement.';
    }

    out.textContent = msg;
    // color the surrounding CTA strip if present
    const strip = out.closest('.cta-strip');
    if (strip) {
      strip.classList.remove('ok', 'warn', 'bad');
      strip.classList.add(tone);
    }
  }

  on(form, 'change', score);
  score();
}

// ---------------------- media tweaks (lazy, posters) ----------------------
function initMedia() {
  // ensure images are lazy
  $$('img').forEach((img) => { if (!img.loading) img.loading = 'lazy'; });

  // videos: metadata preload, and generate poster if missing
  $$('video').forEach((v) => {
    v.preload = 'metadata';
    if (!v.getAttribute('poster')) {
      const makePoster = () => {
        try {
          const c = document.createElement('canvas');
          c.width = Math.max(1, Math.floor(v.videoWidth / 2));
          c.height = Math.max(1, Math.floor(v.videoHeight / 2));
          const ctx = c.getContext('2d', { willReadFrequently: false });
          ctx.drawImage(v, 0, 0, c.width, c.height);
          v.setAttribute('poster', c.toDataURL('image/jpeg', 0.6));
        } catch {}
      };
      const onMeta = () => { makePoster(); v.removeEventListener('loadeddata', onMeta); };
      v.addEventListener('loadeddata', onMeta, { once: true });
      // nudge load to get a frame
      try { v.currentTime = 0.2; } catch {}
    }
  });

  // harden external links
  $$('a[target="_blank"]').forEach((a) => {
    const rel = (a.getAttribute('rel') || '').toLowerCase();
    if (!/noopener/.test(rel)) a.setAttribute('rel', (rel ? rel + ' ' : '') + 'noopener');
  });
}

// ---------------------- schema injection (idempotent) ----------------------
function injectVideoFaqSchema() {
  // If author already included the script block, do nothing
  if ($('#faq-videos-schema')) return;

  // Build the compact FAQ schema used under the video section
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.nobledentalcare.in/specialities/implants.html#faq-videos",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why use a surgical guide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guides transfer the digital plan to your mouth, improving precision and reducing surgery time."
        }
      },
      {
        "@type": "Question",
        "name": "Is a guide always required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always; recommended for complex angulations, immediate implants, or proximity to nerves/sinus."
        }
      },
      {
        "@type": "Question",
        "name": "Does PRF improve healing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PRF concentrates your platelets, releasing growth factors that may support faster soft-tissue healing and graft stability."
        }
      },
      {
        "@type": "Question",
        "name": "Is PRF safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is autologous (from your blood), so the risk of reaction is minimal."
        }
      },
      {
        "@type": "Question",
        "name": "Why is a sinus lift needed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When upper back jaw bone is too short after tooth loss, lifting the sinus floor adds height for stable implants."
        }
      },
      {
        "@type": "Question",
        "name": "How long is healing after sinus lift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 4–6 months before final loading; varies with graft volume and bone quality."
        }
      }
    ]
  };

  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.id = 'faq-videos-schema';
  s.textContent = JSON.stringify(json);
  document.head.appendChild(s);
}

// ---------------------- init on DOM ready ----------------------
on(document, 'DOMContentLoaded', () => {
  initParallax();
  initSmoothAnchors();
  initScrollSpy();
  initEligibility();
  initMedia();
  injectVideoFaqSchema();
});
