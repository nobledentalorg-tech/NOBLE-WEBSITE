<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
?>

<form method="POST" class="p-3">
  <h3>RCT Tracker</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="number" step="0.1" name="working_length" placeholder="Working Length (mm)" class="form-control mb-2" required>
  <input type="number" name="canals" placeholder="Number of Canals" class="form-control mb-2" required>
  <button class="btn btn-success">Save</button>
</form>
