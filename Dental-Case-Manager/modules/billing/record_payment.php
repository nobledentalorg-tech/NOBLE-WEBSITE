<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Receptionist']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $invoice_id = intval($_POST['invoice_id']);
    $amount     = floatval($_POST['amount']);
    $method     = sanitize($_POST['method']);
    $ref        = sanitize($_POST['ref_no']);

    $stmt = $pdo->prepare("INSERT INTO payments (invoice_id, amount, method, ref_no)
                           VALUES (?,?,?,?)");
    $stmt->execute([$invoice_id, $amount, $method, $ref]);

    logAction($_SESSION['user_id'], "Record Payment", "Invoice: $invoice_id");
    alert("Payment recorded successfully.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Record Payment</h3>
  <input type="number" name="invoice_id" placeholder="Invoice ID" class="form-control mb-2" required>
  <input type="number" step="0.01" name="amount" placeholder="Amount (₹)" class="form-control mb-2" required>
  <select name="method" class="form-control mb-2" required>
    <option>UPI</option>
    <option>Cash</option>
    <option>Card</option>
    <option>Bank Transfer</option>
  </select>
  <input type="text" name="ref_no" placeholder="Transaction Ref No (if any)" class="form-control mb-2">
  <button class="btn btn-success">Record</button>
</form>
