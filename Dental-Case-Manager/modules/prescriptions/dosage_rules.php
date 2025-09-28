<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Doctor']);
?>

<form method="POST" class="p-3">
  <h3>Dosage Rules</h3>
  <p>Example: Amoxicillin — 25 mg/kg/day divided every 8 hours.</p>
  <input type="text" name="drug" placeholder="Drug Name" class="form-control mb-2" required>
  <input type="text" name="age_range" placeholder="Age Range (e.g. 0-12 yrs)" class="form-control mb-2">
  <input type="text" name="weight_rule" placeholder="mg/kg/day" class="form-control mb-2">
  <textarea name="notes" placeholder="Additional notes" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Save Rule</button>
</form>
