<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$stmt = $pdo->query("
  SELECT c.case_id, p.full_name, c.case_type, c.status, c.created_at
  FROM cases c
  JOIN patients p ON c.patient_id = p.patient_id
  ORDER BY c.case_id DESC
");
$cases = $stmt->fetchAll();
?>

<h3 class="p-3">Case List</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>ID</th><th>Patient</th><th>Case Type</th><th>Status</th><th>Created</th><th>Action</th></tr>
  </thead>
  <tbody>
  <?php foreach($cases as $c): ?>
    <tr>
      <td><?= $c['case_id'] ?></td>
      <td><?= sanitize($c['full_name']) ?></td>
      <td><?= sanitize($c['case_type']) ?></td>
      <td><?= $c['status'] ?></td>
      <td><?= formatDate($c['created_at']) ?></td>
      <td>
        <a href="view_case.php?id=<?= $c['case_id'] ?>" class="btn btn-sm btn-info">View</a>
        <a href="edit_case.php?id=<?= $c['case_id'] ?>" class="btn btn-sm btn-warning">Edit</a>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
