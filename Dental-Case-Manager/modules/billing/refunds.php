<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $invoice_id = intval($_POST['invoice_id']);
    $amount     = floatval($_POST['amount']);
    $reason     = sanitize($_POST['reason']);

    $stmt = $pdo->prepare("INSERT INTO refunds (invoice_id, amount, reason) VALUES (?,?,?)");
    $stmt->execute([$invoice_id, $amount, $reason]);

    logAction($_SESSION['user_id'], "Refund Issued", "Invoice ID: $invoice_id");
    alert("Refund of ₹$amount processed successfully.", "warning");
}
?>

<form method="POST" class="p-3">
  <h3>Issue Refund</h3>
  <input type="number" name="invoice_id" placeholder="Invoice ID" class="form-control mb-2" required>
  <input type="number" step="0.01" name="amount" placeholder="Refund Amount (₹)" class="form-control mb-2" required>
  <textarea name="reason" placeholder="Reason for refund" class="form-control mb-2"></textarea>
  <button class="btn btn-warning">Process Refund</button>
</form>
