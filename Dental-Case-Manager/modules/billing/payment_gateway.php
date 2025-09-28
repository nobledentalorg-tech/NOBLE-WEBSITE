<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $invoice_id = intval($_POST['invoice_id']);
    $amount = floatval($_POST['amount']);
    alert("Redirecting to UPI Gateway for ₹$amount (Invoice #$invoice_id)...", "info");
    // 🔗 Later integrate Razorpay / Paytm API here.
}
?>

<form method="POST" class="p-3">
  <h3>Online Payment (UPI Gateway)</h3>
  <input type="number" name="invoice_id" placeholder="Invoice ID" class="form-control mb-2" required>
  <input type="number" step="0.01" name="amount" placeholder="Amount (₹)" class="form-control mb-2" required>
  <button class="btn btn-primary">Pay via UPI</button>
</form>
