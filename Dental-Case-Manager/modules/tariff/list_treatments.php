<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$stmt = $pdo->query("SELECT * FROM treatments ORDER BY category, treatment_name ASC");
$treatments = $stmt->fetchAll();
?>

<h3 class="p-3">Treatment Tariff List</h3>
<table class="table table-bordered table-hover">
  <thead>
    <tr><th>Name</th><th>Category</th><th>Cost (₹)</th><th>Duration</th><th>Remarks</th></tr>
  </thead>
  <tbody>
    <?php foreach($treatments as $t): ?>
      <tr>
        <td><?= sanitize($t['treatment_name']) ?></td>
        <td><?= sanitize($t['category']) ?></td>
        <td><?= number_format($t['cost'],2) ?></td>
        <td><?= sanitize($t['duration']) ?></td>
        <td><?= sanitize($t['remarks']) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
