/* =========================================================
   Noble Dental Care — main.js (Smart Insight Engine v2.1)
   Unified Features:
   - Header shrink on scroll
   - Mobile nav
   - Hero fade
   - AI Self-Check Gauge + Smart Insight Cards
   - Voice Narrator (Female)
   - Scroll Reveal
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Helpers ---------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opts = false) => el && el.addEventListener(ev, fn, opts);

  /* =========================================================
     1. Header Shrink on Scroll
  ========================================================= */
  const header = $(".site-header");
  const shrinkHeader = () =>
    header?.classList.toggle("shrink", window.scrollY > 10);
  shrinkHeader();
  on(window, "scroll", shrinkHeader, { passive: true });

  /* =========================================================
     2. Mobile Navigation + Submenu
  ========================================================= */
  const menuToggle = $("#menuToggle");
  const primaryNav = $("#primaryNav");
  const submenuToggle = $(".submenu-toggle");
  const submenu = $("#specialitiesMenu");

  on(menuToggle, "click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.hidden = expanded;
    primaryNav.classList.toggle("is-open", !expanded);
  });

  on(submenuToggle, "click", () => {
    const expanded = submenuToggle.getAttribute("aria-expanded") === "true";
    submenuToggle.setAttribute("aria-expanded", String(!expanded));
    submenu.setAttribute("aria-hidden", String(expanded));
  });

  on(document, "keydown", e => {
    if (e.key === "Escape") {
      if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
      if (submenuToggle?.getAttribute("aria-expanded") === "true") submenuToggle.click();
    }
  });

  on(document, "click", e => {
    if (
      primaryNav?.classList.contains("is-open") &&
      !primaryNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) menuToggle.click();
  });

  /* =========================================================
     3. Hero Video Fade-In
  ========================================================= */
  const videoCard = $(".hero-video-card");
  if (videoCard) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) videoCard.classList.add("visible");
      });
    }, { threshold: 0.3 });
    obs.observe(videoCard);
  }

  /* =========================================================
     4. AI Self-Check Gauge (Smart Insight Engine)
  ========================================================= */
  const root = $("#self-check");
  if (root) {
    const tabs = $$(".tabbar .tab", root);
    const panels = $$(".panel", root);
    const checks = $$('input[type="checkbox"]', root);
    const gauge = $(".g-fg", root);
    const gText = $(".g-text", root);
    const ok = $(".status.ok", root);
    const warn = $(".status.warn", root);
    const bad = $(".status.bad", root);
    const insights = $(".insights", root);
    const reset = $("#reset-elig", root);

    const CIRC = 2 * Math.PI * 50;
    gauge.setAttribute("stroke-dasharray", CIRC);
    gauge.style.strokeDashoffset = CIRC;

    const setPercent = (p) => {
      const v = Math.max(0, Math.min(100, Math.round(p)));
      const dash = CIRC - (CIRC * v / 100);
      gauge.style.strokeDashoffset = dash;
      gText.textContent = v + "%";
    };

    const update = () => {
      let hi = 0, mo = 0;
      let cards = [];

      checks.forEach(cb => {
        if (cb.checked) {
          const risk = cb.dataset.risk;
          const reason = cb.dataset.reason || "No reason specified";
          const label = cb.parentNode.textContent.trim();
          if (risk === "high") hi++;
          else if (risk === "moderate") mo++;

          cards.push({ label, reason, risk });
        }
      });

      const percent = Math.max(0, 100 - (hi * 40 + mo * 15));
      setPercent(percent);

      ok.style.display = warn.style.display = bad.style.display = "none";
      insights.innerHTML = "";

      // === Risk Level Summary ===
      if (hi > 0 || percent < 50) {
        gauge.style.stroke = "#dc2626";
        bad.style.display = "block";
        insights.innerHTML += `<li><strong>🔴 High risk</strong> — ${hi} contraindication(s) detected. <em>Medical clearance mandatory.</em></li>`;
      } else if (mo > 0 || percent < 80) {
        gauge.style.stroke = "#f59e0b";
        warn.style.display = "block";
        insights.innerHTML += `<li><strong>🟠 Moderate risk</strong> — ${mo} manageable condition(s). <em>Review before proceeding.</em></li>`;
      } else {
        gauge.style.stroke = "#12B2A0";
        ok.style.display = "block";
        insights.innerHTML += `<li><strong>🟢 Low risk</strong> — ideal candidate for guided implant.</li>`;
      }

      // === AI Micro Insight Cards ===
      if (cards.length > 0) {
        cards.slice(0, 8).forEach(c => {
          const tone = c.risk === "high"
            ? "#ef4444"
            : c.risk === "moderate"
              ? "#fbbf24"
              : "#12b2a0";
          insights.innerHTML += `
            <li style="border-left:4px solid ${tone}">
              <strong>${c.label}</strong><br>
              <small>${c.reason}</small>
            </li>`;
        });
      }

      insights.innerHTML += `<li class="muted">*These findings are informational — confirm via CBCT, physician clearance, and implantologist consultation.</li>`;
    };

    // Tab switching
    tabs.forEach(tab => {
      on(tab, "click", () => {
        tabs.forEach(t => t.classList.remove("is-active"));
        panels.forEach(p => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        $("#" + tab.dataset.target, root)?.classList.add("is-active");
      });
    });

    // Event handlers
    checks.forEach(cb => on(cb, "change", update));
    on(reset, "click", () => {
      checks.forEach(cb => (cb.checked = false));
      update();
    });

    update();

    /* === Voice Narrator (Female) === */
    if ("speechSynthesis" in window) {
      const btn = document.createElement("button");
      btn.id = "aiNarrator";
      btn.className = "btn narrator-btn";
      btn.innerHTML = `<i class="ri-speak-line"></i> Narrate Insights`;
      root.querySelector(".elig-right")?.appendChild(btn);

      on(btn, "click", () => {
        const msg = insights.innerText.trim();
        if (!msg) return;
        const utter = new SpeechSynthesisUtterance(msg);
        utter.lang = "en-IN";
        utter.pitch = 1.1;
        utter.rate = 0.95;
        utter.voice = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes("female")) || null;
        speechSynthesis.cancel();
        speechSynthesis.speak(utter);
      });
    }
  }

  /* =========================================================
     5. Scroll Reveal Animations
  ========================================================= */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.25 });

  $$("#self-check, .hero-video-card").forEach(el => revealObs.observe(el));
});


// ==== Snow Canvas ====
const snowCanvas = document.createElement('canvas');
snowCanvas.id = 'snow-canvas';
document.querySelector('#implant-journey').prepend(snowCanvas);

const ctx = snowCanvas.getContext('2d');
let w, h, flakes = [];

function resize() {
  w = snowCanvas.width = window.innerWidth;
  h = snowCanvas.height = document.querySelector('#implant-journey').offsetHeight;
}
window.addEventListener('resize', resize);
resize();

function createFlakes(count = 80) {
  flakes = Array.from({length: count}).map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    d: Math.random() + 1
  }));
}
createFlakes();

function drawSnow() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.beginPath();
  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
  });
  ctx.fill();
  moveSnow();
  requestAnimationFrame(drawSnow);
}
let angle = 0;
function moveSnow() {
  angle += 0.01;
  flakes.forEach(f => {
    f.y += Math.pow(f.d, 2) + 0.3;
    f.x += Math.sin(angle) * 0.4;
    if (f.y > h) {
      f.x = Math.random() * w;
      f.y = -10;
    }
  });
}
drawSnow();

// ==== Scrollspy ====
const sections = document.querySelectorAll('.journey-step');
const navLinks = document.querySelectorAll('.journey-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) a.classList.add('active');
  });
});

// ==== Narrator Start / Stop ====
let isSpeaking = false;
const narrBtn = document.querySelector('.narrator-btn');
if ('speechSynthesis' in window && narrBtn) {
  narrBtn.addEventListener('click', () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      narrBtn.innerHTML = `<i class="ri-speak-line"></i> Listen to My Journey`;
      isSpeaking = false;
    } else {
      const steps = Array.from(document.querySelectorAll('.journey-step')).map(s => s.querySelector('h3').innerText + ". " + s.querySelector('p').innerText);
      const msg = steps.join(' ');
      const utter = new SpeechSynthesisUtterance(msg);
      utter.lang = "en-IN";
      utter.pitch = 1.1;
      utter.rate = 1.0;
      utter.voice = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes("female")) || null;
      speechSynthesis.speak(utter);
      narrBtn.innerHTML = `<i class="ri-stop-circle-line"></i> Stop Narration`;
      isSpeaking = true;
      utter.onend = () => {
        narrBtn.innerHTML = `<i class="ri-speak-line"></i> Listen to My Journey`;
        isSpeaking = false;
      };
    }
  });
}

/* =========================================================
   Implant Journey JS
   Features: Snow Canvas, Scrollspy, Narrator
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ❄️ Snow Effect */
  const canvas = document.getElementById("snow-canvas");
  const ctx = canvas.getContext("2d");
  let snowflakes = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector("#implant-journey").offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  function createSnow() {
    snowflakes = [];
    for (let i = 0; i < 80; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() + 0.5
      });
    }
  }
  createSnow();

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    snowflakes.forEach(flake => {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
    });
    ctx.fill();
    updateSnow();
  }

  function updateSnow() {
    snowflakes.forEach(flake => {
      flake.y += Math.pow(flake.d, 2) + 1;
      flake.x += Math.sin(flake.y * 0.01) * 0.5;
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
    });
  }

  (function animateSnow() {
    drawSnow();
    requestAnimationFrame(animateSnow);
  })();

  /* 🧭 Scrollspy Highlight */
  const steps = document.querySelectorAll(".journey-step");
  const navLinks = document.querySelectorAll(".journey-nav a");

  const spyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  steps.forEach(step => spyObserver.observe(step));

  /* 🎧 Narrator */
  const narrateBtn = document.getElementById("narrate-btn");
  const stopBtn = document.getElementById("stop-btn");
  let speech;

  if ("speechSynthesis" in window) {
    narrateBtn.addEventListener("click", () => {
      const text = Array.from(steps)
        .map(s => `${s.querySelector("h3").innerText}: ${s.querySelector("p").innerText}`)
        .join(". ");
      speechSynthesis.cancel();
      speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-IN";
      speech.pitch = 1.1;
      speech.rate = 1.0;
      const female = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes("female"));
      if (female) speech.voice = female;
      speechSynthesis.speak(speech);
    });

    stopBtn.addEventListener("click", () => {
      speechSynthesis.cancel();
    });
  }
});


// Auto fade-in cards on scroll
document.addEventListener("DOMContentLoaded",()=>{
  const cards = document.querySelectorAll(".type-card");
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  cards.forEach(c=>observer.observe(c));
});

document.addEventListener("DOMContentLoaded",()=>{
  // Reveal animation
  const steps=document.querySelectorAll(".step-card");
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  steps.forEach(s=>obs.observe(s));

  // Voice narration (toggle)
  const narrator=document.createElement("button");
  narrator.className="narrator-btn";
  narrator.innerHTML='<i class="ri-speak-line"></i> Narrate Steps';
  document.querySelector("#implant-steps .section-header")?.appendChild(narrator);

  let speaking=false;
  let utter;
  if("speechSynthesis" in window){
    narrator.addEventListener("click",()=>{
      if(speaking){ speechSynthesis.cancel(); speaking=false; narrator.innerHTML='<i class="ri-speak-line"></i> Narrate Steps'; return; }
      const text=Array.from(document.querySelectorAll("#implant-steps .step-card h3, #implant-steps .step-card p")).map(el=>el.innerText).join(". ");
      utter=new SpeechSynthesisUtterance(text);
      utter.lang="en-IN";
      utter.pitch=1.05; utter.rate=1;
      utter.voice=speechSynthesis.getVoices().find(v=>v.name.toLowerCase().includes("female"))||null;
      utter.onend=()=>{speaking=false; narrator.innerHTML='<i class="ri-speak-line"></i> Narrate Steps';};
      speechSynthesis.speak(utter);
      narrator.innerHTML='<i class="ri-stop-circle-line"></i> Stop Narration';
      speaking=true;
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("#prf-bone .heal-card");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  cards.forEach(c => obs.observe(c));

  // Voice Narration Toggle
  const narrator = document.createElement("button");
  narrator.className = "btn narrator-btn";
  narrator.innerHTML = '<i class="ri-speak-line"></i> Narrate Healing Science';
  document.querySelector("#prf-bone .section-header")?.appendChild(narrator);

  let speaking = false;
  let utter;
  if ("speechSynthesis" in window) {
    narrator.addEventListener("click", () => {
      if (speaking) {
        speechSynthesis.cancel();
        narrator.innerHTML = '<i class="ri-speak-line"></i> Narrate Healing Science';
        speaking = false;
        return;
      }
      const text = Array.from(document.querySelectorAll("#prf-bone .heal-card h3, #prf-bone .heal-card p"))
        .map(el => el.innerText)
        .join(". ");
      utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-IN";
      utter.pitch = 1.1;
      utter.rate = 1.0;
      utter.voice = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes("female")) || null;
      utter.onend = () => {
        speaking = false;
        narrator.innerHTML = '<i class="ri-speak-line"></i> Narrate Healing Science';
      };
      speechSynthesis.speak(utter);
      narrator.innerHTML = '<i class="ri-stop-circle-line"></i> Stop Narration';
      speaking = true;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // === Floating bubbles animation ===
  const canvas = document.getElementById("care-bubbles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w, h;
    const bubbles = Array.from({ length: 25 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 3 + 1,
      s: Math.random() * 0.8 + 0.2,
    }));

    const resize = () => {
      canvas.width = w = innerWidth;
      canvas.height = h = innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(59,169,224,0.25)";
      bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        b.y -= b.s;
        if (b.y < -10) b.y = h + 10;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }

  // === scroll reveal ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".care-card").forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("monitor-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = 600;
  }
  resize();
  window.addEventListener("resize", resize);

  const points = Array.from({ length: 30 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    a: Math.random() * 360
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);
    points.forEach(p => {
      p.a += 0.005;
      const dx = Math.cos(p.a) * 0.3;
      const dy = Math.sin(p.a) * 0.3;
      p.x += dx;
      p.y += dy;
      if (p.x < 0) p.x = w;
      if (p.y < 0) p.y = h;
      if (p.x > w) p.x = 0;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(100,160,255,0.15)";
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
});

document.addEventListener("DOMContentLoaded", () => {

  // --- FAQ auto-close others ---
  const faqs = document.querySelectorAll(".faq-list details");
  faqs.forEach((faq) => {
    faq.addEventListener("toggle", () => {
      if (faq.open) {
        faqs.forEach((el) => el !== faq && (el.open = false));
      }
    });
  });

  // --- Smooth scroll for footer links ---
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
