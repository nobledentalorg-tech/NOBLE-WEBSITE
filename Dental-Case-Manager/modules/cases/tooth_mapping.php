<?php
require_once '../../core/auth.php';
checkLogin();
?>

<div class="p-3">
  <h3>Tooth Mapping (Odontogram)</h3>
  <canvas id="odontogram" width="800" height="400" style="border:1px solid #ccc"></canvas>
</div>

<script src="../../assets/js/odontogram.js"></script>
