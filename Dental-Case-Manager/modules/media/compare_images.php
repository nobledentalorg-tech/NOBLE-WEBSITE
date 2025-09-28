<?php
require_once '../../core/auth.php';
checkLogin();
?>

<div class="p-3">
  <h3>Compare Images (Before / After)</h3>
  <div style="display:flex;gap:20px;">
    <div>
      <h5>Before</h5>
      <input type="file" id="before" accept="image/*" class="form-control mb-2">
      <img id="beforeImg" class="img-fluid rounded shadow" width="350">
    </div>
    <div>
      <h5>After</h5>
      <input type="file" id="after" accept="image/*" class="form-control mb-2">
      <img id="afterImg" class="img-fluid rounded shadow" width="350">
    </div>
  </div>
</div>

<script>
document.getElementById('before').addEventListener('change', e=>{
  document.getElementById('beforeImg').src = URL.createObjectURL(e.target.files[0]);
});
document.getElementById('after').addEventListener('change', e=>{
  document.getElementById('afterImg').src = URL.createObjectURL(e.target.files[0]);
});
</script>
