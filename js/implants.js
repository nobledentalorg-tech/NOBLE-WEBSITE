* Noble Dental Care — implants.js
 * Optimised interaction & accessibility helpers for the Implant speciality page.
 * Features covered:
 *  - Header shrink & mobile navigation accessibility
 *  - Hero media reveal
 *  - Implant eligibility self-check gauge & insights
 *  - Scroll-triggered reveals & animated canvases with reduced-motion fallbacks
 *  - Journey scrollspy, narration utilities and FAQ UX improvements
 */
   document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const on = (element, event, handler, options) => element?.addEventListener(event, handler, options);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealElements = (elements, className = "visible", options = { threshold: 0.25 }) => {
    const nodes = Array.isArray(elements)
      ? elements.flatMap((sel) => (typeof sel === "string" ? $$(sel) : Array.from(sel)))
      : typeof elements === "string"
        ? $$(elements)
        : Array.from(elements ?? []);

    if (!nodes.length) return;

    const show = (node) => node.classList.add(className);

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      nodes.forEach(show);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, options);

    nodes.forEach((node) => observer.observe(node));
  };

  /** Speech synthesis helper ------------------------------------------------ */
  const narrator = (() => {
    const supported = "speechSynthesis" in window;
    if (!supported) return { supported: false, addButton: () => null, stop: () => {} };

    let cachedVoice = null;
    const selectVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return cachedVoice;
      cachedVoice =
        voices.find((voice) => voice.name.toLowerCase().includes("female")) ||
        voices.find((voice) => voice.lang?.toLowerCase().startsWith("en")) ||
        voices[0];
      return cachedVoice;
    };

    window.speechSynthesis.addEventListener("voiceschanged", selectVoice);
    selectVoice();

    const stop = () => {
      window.speechSynthesis.cancel();
    };

    const speak = (text, { pitch = 1.1, rate = 1.0 } = {}) => {
      if (!text) return null;
      stop();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-IN";
      utter.pitch = pitch;
      utter.rate = rate;
      utter.voice = selectVoice();
      window.speechSynthesis.speak(utter);
      return utter;
    };

    const addButton = (container, {
      className = "btn narrator-btn",
      startIcon = "<i class=\"ri-speak-line\"></i>",
      stopIcon = "<i class=\"ri-stop-circle-line\"></i>",
      startLabel = "Narrate",
      stopLabel = "Stop Narration",
      pitch,
      rate,
      getText,
    }) => {
      if (!container || typeof getText !== "function") return null;

      const button = document.createElement("button");
      button.type = "button";
      button.className = className;
      button.innerHTML = `${startIcon} ${startLabel}`;

      let currentUtterance = null;
      let playing = false;

      const reset = () => {
        playing = false;
        button.innerHTML = `${startIcon} ${startLabel}`;
      };

      on(button, "click", () => {
        if (playing) {
          stop();
          reset();
          return;
        }

        const text = getText()?.trim();
        if (!text) return;

        currentUtterance = speak(text, { pitch, rate });
        if (!currentUtterance) return;

        playing = true;
        button.innerHTML = `${stopIcon} ${stopLabel}`;

        currentUtterance.onend = currentUtterance.onerror = reset;
      });

      container.appendChild(button);
      return button;
    };

    return { supported: true, addButton, stop, speak };
  })();

  const header = $(".site-header");
  if (header) {
    const shrinkHeader = () => {
      header.classList.toggle("shrink", window.scrollY > 10);
    };

    shrinkHeader();
    on(window, "scroll", shrinkHeader, { passive: true });
  }

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
    submenu?.setAttribute("aria-hidden", String(expanded));
  });

  on(document, "click", (event) => {
    if (
      primaryNav?.classList.contains("is-open") &&
      !primaryNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuToggle.click();
    }
  });

  on(document, "keydown", (event) => {
    if (event.key !== "Escape") return;
    if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
    if (submenuToggle?.getAttribute("aria-expanded") === "true") submenuToggle.click();
  });

    /** Hero media reveal ------------------------------------------------------ */
  const heroVideo = $(".hero-video-wrap");
  if (heroVideo) {
    revealElements([heroVideo], "visible", { threshold: 0.3 });
  }

  /** Implant eligibility self-check ---------------------------------------- */
  const selfCheck = $("#self-check");
  if (selfCheck) {
    const tabs = $$(".tabbar .tab", selfCheck);
    const panels = $$(".panel", selfCheck);
    const checks = $$('input[type="checkbox"]', selfCheck);
    const gauge = $(".g-fg", selfCheck);
    const gaugeText = $(".g-text", selfCheck);
    const ok = $(".status.ok", selfCheck);
    const warn = $(".status.warn", selfCheck);
    const bad = $(".status.bad", selfCheck);
    const insights = $(".insights", selfCheck);
    const reset = $("#reset-elig", selfCheck);
     
    const CIRC = 2 * Math.PI * 50;
    if (gauge) gauge.setAttribute("stroke-dasharray", String(CIRC));

    const setPercent = (value) => {
      const safeValue = Math.max(0, Math.min(100, Math.round(value)));
      const dashOffset = CIRC - (CIRC * safeValue) / 100;
      if (gauge) gauge.style.strokeDashoffset = dashOffset;
      if (gaugeText) gaugeText.textContent = `${safeValue}%`;
      return safeValue;
    };

    const updateInsights = () => {
      let high = 0;
      let moderate = 0;
      const selected = [];

      checks.forEach((checkbox) => {
        if (!checkbox.checked) return;
        const { risk = "low", reason = "No reason specified" } = checkbox.dataset;
        const label = checkbox.parentElement?.textContent?.trim() ?? "";
        if (risk === "high") high += 1;
        else if (risk === "moderate") moderate += 1;
        selected.push({ label, reason, risk });
      });

      const percent = setPercent(100 - (high * 40 + moderate * 15));
      [ok, warn, bad].forEach((state) => state && (state.style.display = "none"));
      if (insights) insights.innerHTML = "";

      const appendInsight = (html) => {
        if (insights) insights.insertAdjacentHTML("beforeend", html);
      };

      if (high > 0 || percent < 50) {
        if (gauge) gauge.style.stroke = "#dc2626";
        if (bad) bad.style.display = "block";
        appendInsight(`<li><strong>🔴 High risk</strong> — ${high} contraindication(s) detected. <em>Medical clearance mandatory.</em></li>`);
      } else {
        if (gauge) gauge.style.stroke = "#12B2A0";
        if (ok) ok.style.display = "block";
        appendInsight(`<li><strong>🟢 Low risk</strong> — ideal candidate for guided implant.</li>`);
      }

      selected.slice(0, 8).forEach(({ label, reason, risk }) => {
        const tone = risk === "high" ? "#ef4444" : risk === "moderate" ? "#fbbf24" : "#12b2a0";
        appendInsight(`
          <li style="border-left:4px solid ${tone}">
            <strong>${label}</strong><br>
            <small>${reason}</small>
          </li>
        `);
      });

      appendInsight('<li class="muted">*These findings are informational — confirm via CBCT, physician clearance, and implantologist consultation.</li>');
    };

    tabs.forEach((tab) => {
      on(tab, "click", () => {
        tabs.forEach((item) => item.classList.remove("is-active"));
        panels.forEach((panel) => panel.classList.remove("is-active"));
        tab.classList.add("is-active");
        $("#" + tab.dataset.target, selfCheck)?.classList.add("is-active");
      });
    });
     
    // Event handlers
    checks.forEach((checkbox) => on(checkbox, "change", updateInsights));
    on(reset, "click", () => {
    checks.forEach((checkbox) => (checkbox.checked = false));
      updateInsights();
    });   

    updateInsights();

    if (narrator.supported) {
      const container = $(".elig-right", selfCheck);
      const exists = $("#aiNarrator", container);
      if (!exists && container) {
        const btn = narrator.addButton(container, {
          className: "btn narrator-btn",
          startLabel: "Narrate Insights",
          stopLabel: "Stop Narration",
          getText: () => $(".insights", selfCheck)?.innerText ?? "",
          pitch: 1.1,
          rate: 0.95,
        });
        if (btn) btn.id = "aiNarrator";
      }
    }
  }

        /** Scroll reveals --------------------------------------------------------- */
  revealElements(["#self-check", ".type-card", ".step-card", "#prf-bone .heal-card", ".care-card"]);

  /** Implant journey: snow canvas, scrollspy, narration --------------------- */
  const implantJourney = $("#implant-journey");
  if (implantJourney) {
    const canvas = $("#snow-canvas", implantJourney) ?? (() => {
      const created = document.createElement("canvas");
      created.id = "snow-canvas";
      implantJourney.prepend(created);
      return created;
    })();

    if (canvas && canvas.getContext && !prefersReducedMotion) {
      const ctx = canvas.getContext("2d");
      let width = 0;
      let height = 0;
      let flakes = [];
      let angle = 0;

      const setSize = () => {
        width = canvas.width = implantJourney.clientWidth;
        height = canvas.height = implantJourney.offsetHeight;
      };

      const createFlakes = (count = 80) => {
        flakes = Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          density: Math.random() + 1,
        }));
      };
       


      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.beginPath();
        flakes.forEach((flake) => {
          ctx.moveTo(flake.x, flake.y);
          ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        });
        ctx.fill();
        move();
        requestAnimationFrame(draw);
      };

      const move = () => {
        angle += 0.01;
        flakes.forEach((flake) => {
          flake.y += Math.pow(flake.density, 2) + 0.3;
          flake.x += Math.sin(angle) * 0.4;
          if (flake.y > height) {
            flake.y = -10;
            flake.x = Math.random() * width;
          }
        });
      };

      const handleResize = () => {
        setSize();
        createFlakes();
      };

      handleResize();
      on(window, "resize", handleResize);
      draw();
    }
    const steps = $$(".journey-step", implantJourney);
    const navLinks = $$(".journey-nav a", implantJourney);
    if (steps.length && navLinks.length) {
      if (typeof IntersectionObserver === "undefined" || prefersReducedMotion) {
        navLinks.forEach((link, index) => link.classList.toggle("active", index === 0));
      } else {
        const spy = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const { id } = entry.target;
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          });
        }, { threshold: 0.5 });
        steps.forEach((step) => spy.observe(step));
      }
    }

    if (narrator.supported) {
      const controls = $(".journey-controls", implantJourney);
      const startBtn = $("#narrate-btn", implantJourney);
      const stopBtn = $("#stop-btn", implantJourney);

      const textSource = () => steps
        .map((step) => {
          const title = $("h3", step)?.innerText ?? "";
          const copy = $("p", step)?.innerText ?? "";
          return `${title}. ${copy}`.trim();
        })
        .join(" ");

      if (startBtn && stopBtn) {
        let currentUtterance = null;

        const resetButtons = () => {
          startBtn.disabled = false;
          startBtn.setAttribute("aria-disabled", "false");
          stopBtn.disabled = true;
          stopBtn.setAttribute("aria-disabled", "true");
        };

        resetButtons();

        on(startBtn, "click", () => {
          const text = textSource();
          if (!text) return;
          currentUtterance = narrator.speak(text, { pitch: 1.1, rate: 1.0 });
          if (!currentUtterance) return;
          startBtn.disabled = true;
          startBtn.setAttribute("aria-disabled", "true");
          stopBtn.disabled = false;
          stopBtn.setAttribute("aria-disabled", "false");
          currentUtterance.onend = currentUtterance.onerror = resetButtons;
        });
        on(stopBtn, "click", () => {
          narrator.stop();
          resetButtons();
        });
      } else if (controls && !controls.querySelector(".narrator-btn.dynamic")) {
        narrator.addButton(controls, {
          className: "narrator-btn dynamic",
          startLabel: "Listen to My Journey",
          stopLabel: "Stop Narration",
          getText: textSource,
          pitch: 1.1,
          rate: 1.0,
    });
  }
  }

  /** Implant steps narrator ------------------------------------------------- */
  const stepsSection = $("#implant-steps");
  if (stepsSection && narrator.supported) {
    const header = $(".section-header", stepsSection);
    if (header && !header.querySelector(".narrator-btn")) {
      narrator.addButton(header, {
        className: "narrator-btn",
        startLabel: "Narrate Steps",
        stopLabel: "Stop Narration",
        getText: () => $$(".step-card", stepsSection)
          .map((card) => {
            const title = $("h3", card)?.innerText ?? "";
            const copy = $("p", card)?.innerText ?? "";
            return `${title}. ${copy}`.trim();
          })
          .join(" "),
      });
    }
  }

  /** PRF healing narration -------------------------------------------------- */
  const healingSection = $("#prf-bone");
  if (healingSection && narrator.supported) {
    const header = $(".section-header", healingSection);
    if (header && !header.querySelector(".narrator-btn")) {
      narrator.addButton(header, {
        className: "btn narrator-btn",
        startLabel: "Narrate Healing Science",
        stopLabel: "Stop Narration",
        getText: () => $$(".heal-card", healingSection)
          .map((card) => {
            const title = $("h3", card)?.innerText ?? "";
            const copy = $("p", card)?.innerText ?? "";
            return `${title}. ${copy}`.trim();
          })
          .join(" "),
      });
    }     
  }

  /** Floating bubbles background ------------------------------------------- */
  const careCanvas = $("#care-bubbles");
  if (careCanvas && careCanvas.getContext && !prefersReducedMotion) {
    const ctx = careCanvas.getContext("2d");
    let width = 0;
    let height = 0;
    const bubbles = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.2,
    }));

     
    const setSize = () => {
      width = careCanvas.width = window.innerWidth;
      height = careCanvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(59,169,224,0.25)";
      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
        bubble.y -= bubble.speed;
        if (bubble.y < -10) bubble.y = height + 10;
      });
      requestAnimationFrame(animate);
    };
     
    setSize();
    on(window, "resize", setSize);     
    animate();
  }

  /** CBCT monitoring canvas ------------------------------------------------- */
  const monitorCanvas = $("#monitor-bg");
  if (monitorCanvas && monitorCanvas.getContext && !prefersReducedMotion) {
    const ctx = monitorCanvas.getContext("2d");
    let width = 0;
    let height = 600;
    const points = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      angle: Math.random() * 360,
    }));
     
    const setSize = () => {
      width = monitorCanvas.width = window.innerWidth;
      height = monitorCanvas.height = 600;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        point.angle += 0.005;
        point.x += Math.cos(point.angle) * 0.3;
        point.y += Math.sin(point.angle) * 0.3;
        if (point.x < 0) point.x = width;
        if (point.y < 0) point.y = height;
        if (point.x > width) point.x = 0;
        if (point.y > height) point.y = 0;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,160,255,0.15)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    setSize();
    on(window, "resize", setSize);
    animate();
  }

  /** FAQ accordions --------------------------------------------------------- */
  const faqLists = $$(".faq-list details");
  faqLists.forEach((faq) => {
    on(faq, "toggle", () => {
      if (!faq.open) return;
      faqLists.forEach((item) => {
        if (item !== faq) item.open = false;
      });
    });
  });

  /** Smooth scrolling for on-page anchors ---------------------------------- */
  $$('a[href^="#"]').forEach((link) => {
    on(link, "click", (event) => {
      const target = $(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
});
