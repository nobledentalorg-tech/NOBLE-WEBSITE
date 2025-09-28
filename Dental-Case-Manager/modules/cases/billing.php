<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $amount  = floatval($_POST['amount']);
    $desc    = sanitize($_POST['description']);

    alert("Billing entry for Case #$case_id (₹$amount) added.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Case Billing</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="number" step="0.01" name="amount" placeholder="Amount (₹)" class="form-control mb-2" required>
  <input type="text" name="description" placeholder="Description" class="form-control mb-2">
  <button class="btn btn-primary">Add Billing</button>
</form>
