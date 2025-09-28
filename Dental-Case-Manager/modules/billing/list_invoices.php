<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Receptionist']);

$stmt = $pdo->query("
  SELECT i.invoice_id, i.case_id, i.net_total, i.created_at, p.full_name
  FROM invoices i
  JOIN cases c ON i.case_id = c.case_id
  JOIN patients p ON c.patient_id = p.patient_id
  ORDER BY i.invoice_id DESC
");
$invoices = $stmt->fetchAll();
?>

<h3 class="p-3">Invoices List</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>ID</th><th>Patient</th><th>Case</th><th>Total (₹)</th><th>Date</th></tr>
  </thead>
  <tbody>
  <?php foreach($invoices as $i): ?>
    <tr>
      <td><?= $i['invoice_id'] ?></td>
      <td><?= sanitize($i['full_name']) ?></td>
      <td>#<?= $i['case_id'] ?></td>
      <td><?= number_format($i['net_total'],2) ?></td>
      <td><?= formatDateTime($i['created_at']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
