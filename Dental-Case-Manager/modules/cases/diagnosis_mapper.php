<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tooth = sanitize($_POST['tooth']);
    $diagnosis = sanitize($_POST['diagnosis']);
    alert("Diagnosis '$diagnosis' mapped to Tooth $tooth.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Diagnosis Mapper</h3>
  <input type="text" name="tooth" placeholder="Tooth Number" class="form-control mb-2" required>
  <input type="text" name="diagnosis" placeholder="Diagnosis (ICD/CPT)" class="form-control mb-2" required>
  <button class="btn btn-primary">Map</button>
</form>
