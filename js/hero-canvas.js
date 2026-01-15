
(function () {
  /* ================== THEME LOGIC ================== */
  const docEl = document.documentElement;
  const themeButtons = document.querySelectorAll('[data-theme-choice]');
  const themes = ['white', 'cosmic'];

  // 1. Load saved theme or default to 'white'
  const savedTheme = localStorage.getItem('nobleTheme') || 'white';
  setTheme(savedTheme);

  // 2. Button Listeners
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.themeChoice;
      setTheme(choice);
    });
  });

  function setTheme(theme) {
    if (!themes.includes(theme)) return;

    // Update DOM
    docEl.dataset.theme = theme;
    localStorage.setItem('nobleTheme', theme);

    // Update Buttons State
    themeButtons.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.themeChoice === theme);
    });
  }

  /* ================== ANIMATION LOGIC ================== */
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const context = canvas.getContext('2d');
  let width = canvas.width = canvas.offsetWidth * devicePixelRatio;
  let height = canvas.height = canvas.offsetHeight * devicePixelRatio;

  const particles = Array.from({ length: 90 }, () => createParticle(width, height));

  function createParticle(w, h) {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      orbit: Math.random() * 120 + 40,
      angle: Math.random() * Math.PI * 2
    };
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.globalCompositeOperation = 'lighter';

    particles.forEach((p) => {
      p.angle += 0.002;
      p.x += p.speedX + Math.cos(p.angle) * 0.6;
      p.y += p.speedY + Math.sin(p.angle) * 0.6;

      if (p.x < -p.orbit) p.x = width + p.orbit;
      if (p.x > width + p.orbit) p.x = -p.orbit;
      if (p.y < -p.orbit) p.y = height + p.orbit;
      if (p.y > height + p.orbit) p.y = -p.orbit;

      const gradient = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.orbit);
      // Dynamic colors based on theme could be added here, but safely hardcoded for now
      gradient.addColorStop(0, 'rgba(84, 179, 255, 0.65)');
      gradient.addColorStop(1, 'rgba(14, 21, 48, 0)');

      context.fillStyle = gradient;
      context.fillRect(p.x - p.orbit, p.y - p.orbit, p.orbit * 2, p.orbit * 2);

      context.fillStyle = 'rgba(255, 158, 94, 0.26)';
      context.beginPath();
      context.arc(p.x, p.y, p.size * 1.6, 0, Math.PI * 2);
      context.fill();
    });

    context.restore();
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth * devicePixelRatio;
    height = canvas.height = canvas.offsetHeight * devicePixelRatio;
  });
})();
