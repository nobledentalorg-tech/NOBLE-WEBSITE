<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("
    SELECT v.*, c.case_type
    FROM visits v
    JOIN cases c ON v.case_id = c.case_id
    WHERE v.case_id = ?
    ORDER BY v.visit_date DESC
");
$stmt->execute([$case_id]);
$visits = $stmt->fetchAll();
?>

<h3 class="p-3">Visit History (Case #<?= $case_id ?>)</h3>
<table class="table table-bordered">
  <thead><tr><th>Date</th><th>Complaint</th><th>Treatment</th><th>Next Visit</th></tr></thead>
  <tbody>
    <?php foreach($visits as $v): ?>
    <tr>
      <td><?= formatDate($v['visit_date']) ?></td>
      <td><?= sanitize($v['complaint']) ?></td>
      <td><?= sanitize($v['treatment_done']) ?></td>
      <td><?= $v['next_visit'] ? formatDate($v['next_visit']) : '-' ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>
