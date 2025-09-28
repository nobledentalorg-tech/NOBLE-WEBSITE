/* =========================================================
   POPUP PLUGIN
========================================================= */
function showPopup(message, type = "info") {
  const div = document.createElement('div');
  div.className = `popup-message ${type}`;
  div.innerText = message;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}
