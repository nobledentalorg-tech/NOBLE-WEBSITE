<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$invoice_id = intval($_GET['id'] ?? 0);

$stmt = $pdo->prepare("
  SELECT i.*, p.full_name 
  FROM invoices i
  JOIN cases c ON i.case_id = c.case_id
  JOIN patients p ON c.patient_id = p.patient_id
  WHERE i.invoice_id=?
");
$stmt->execute([$invoice_id]);
$inv = $stmt->fetch();

if (!$inv) {
    alert("Invoice not found.", "danger");
    exit;
}

header('Content-Type: text/plain');
header("Content-Disposition: attachment; filename=Receipt_{$invoice_id}.txt");

echo "PAYMENT RECEIPT\n";
echo "================\n";
echo "Invoice ID: {$invoice_id}\n";
echo "Patient: {$inv['full_name']}\n";
echo "Case ID: {$inv['case_id']}\n";
echo "Amount: ₹" . number_format($inv['net_total'],2) . "\n";
echo "Date: " . formatDateTime($inv['created_at']) . "\n";
echo "-------------------------------\n";
echo "Thank you for choosing Noble Dental Care\n";
exit;
?>
