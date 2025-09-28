<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

$rows = $pdo->query("
  SELECT u.full_name AS doctor, COUNT(c.case_id) AS total_cases,
         SUM(b.amount) AS revenue
  FROM users u
  LEFT JOIN cases c ON u.user_id = c.doctor_id
  LEFT JOIN billing b ON c.case_id = b.case_id
  WHERE u.role='Doctor'
  GROUP BY u.user_id
  ORDER BY revenue DESC
")->fetchAll();
?>

<h3 class="p-3">Doctor Performance Summary</h3>
<table class="table table-bordered">
  <thead><tr><th>Doctor</th><th>Cases</th><th>Total Revenue (₹)</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= sanitize($r['doctor']) ?></td>
        <td><?= $r['total_cases'] ?></td>
        <td><?= number_format($r['revenue'],2) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
