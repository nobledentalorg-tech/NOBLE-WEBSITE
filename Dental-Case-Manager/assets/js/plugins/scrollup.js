/* =========================================================
   SCROLL UP PLUGIN
========================================================= */

(function(){
  const btn = document.getElementById('scrollUpBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
