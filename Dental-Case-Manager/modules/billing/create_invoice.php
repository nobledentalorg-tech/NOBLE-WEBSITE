<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Receptionist','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $amount  = floatval($_POST['amount']);
    $description = sanitize($_POST['description']);
    $tax = floatval($_POST['tax']);
    $discount = floatval($_POST['discount']);
    $net_total = ($amount + $tax) - $discount;

    $stmt = $pdo->prepare("INSERT INTO invoices (case_id, amount, tax, discount, net_total, description)
                           VALUES (?,?,?,?,?,?)");
    $stmt->execute([$case_id, $amount, $tax, $discount, $net_total, $description]);

    logAction($_SESSION['user_id'], "Create Invoice", "Case ID: $case_id");
    alert("Invoice created successfully! Total ₹$net_total", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Create Invoice</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="number" step="0.01" name="amount" placeholder="Base Amount (₹)" class="form-control mb-2" required>
  <input type="number" step="0.01" name="tax" placeholder="Tax (₹)" class="form-control mb-2" value="0">
  <input type="number" step="0.01" name="discount" placeholder="Discount (₹)" class="form-control mb-2" value="0">
  <textarea name="description" placeholder="Invoice Description" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Generate Invoice</button>
</form>
