<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("
  SELECT lo.*, p.full_name
  FROM lab_orders lo
  JOIN cases c ON lo.case_id = c.case_id
  JOIN patients p ON c.patient_id = p.patient_id
  WHERE lo.case_id = ?
  ORDER BY lo.created_at DESC
");
$stmt->execute([$case_id]);
$orders = $stmt->fetchAll();
?>
<h3 class="p-3">Lab Orders (Case #<?= $case_id ?>)</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>ID</th><th>Test Name</th><th>Lab</th><th>Status</th><th>Date</th></tr>
  </thead>
  <tbody>
    <?php foreach($orders as $o): ?>
      <tr>
        <td><?= $o['order_id'] ?></td>
        <td><?= sanitize($o['test_name']) ?></td>
        <td><?= sanitize($o['lab_name']) ?></td>
        <td><?= sanitize($o['status']) ?></td>
        <td><?= formatDateTime($o['created_at']) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
