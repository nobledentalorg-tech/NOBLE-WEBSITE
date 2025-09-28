<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

$rows = $pdo->query("
  SELECT DATE(payment_date) as day, SUM(amount) as total
  FROM payments
  GROUP BY DATE(payment_date)
  ORDER BY day DESC
  LIMIT 30
")->fetchAll();
?>

<h3 class="p-3">Revenue Report (Last 30 Days)</h3>
<table class="table table-bordered">
  <thead><tr><th>Date</th><th>Total Revenue (₹)</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= $r['day'] ?></td>
        <td><?= number_format($r['total'],2) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
