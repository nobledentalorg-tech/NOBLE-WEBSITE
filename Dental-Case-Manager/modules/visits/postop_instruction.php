<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Doctor','Admin']);
?>

<form method="POST" class="p-3">
  <h3>Postoperative Instructions</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <textarea name="instructions" placeholder="Write Dos and Don’ts for the patient..." class="form-control mb-2" required></textarea>
  <button class="btn btn-primary">Generate PDF</button>
</form>
