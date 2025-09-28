<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("SELECT * FROM prescriptions WHERE case_id=? ORDER BY id DESC");
$stmt->execute([$case_id]);
$prescriptions = $stmt->fetchAll();
?>

<h3 class="p-3">Prescriptions (Case #<?= $case_id ?>)</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>Drug</th><th>Dose</th><th>Duration</th><th>Remarks</th></tr>
  </thead>
  <tbody>
  <?php foreach($prescriptions as $p): ?>
    <tr>
      <td><?= sanitize($p['drug_name']) ?></td>
      <td><?= sanitize($p['dose']) ?></td>
      <td><?= sanitize($p['duration']) ?></td>
      <td><?= sanitize($p['remarks']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
