<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
?>

<form method="POST" class="p-3">
  <h3>Post-op Tracker</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <textarea name="remarks" placeholder="Healing status or notes" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Update</button>
</form>
