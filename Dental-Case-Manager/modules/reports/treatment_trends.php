<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$rows = $pdo->query("
  SELECT t.treatment_name, COUNT(c.case_id) AS total
  FROM cases c
  JOIN treatments t ON c.treatment_id = t.treatment_id
  GROUP BY c.treatment_id
  ORDER BY total DESC
  LIMIT 10
")->fetchAll();
?>

<h3 class="p-3">Top 10 Treatment Trends</h3>
<table class="table table-bordered">
  <thead><tr><th>Treatment</th><th>Total Cases</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= sanitize($r['treatment_name']) ?></td>
        <td><?= $r['total'] ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
