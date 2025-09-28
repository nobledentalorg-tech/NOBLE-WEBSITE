<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$rows = $pdo->query("
  SELECT d.drug_name, SUM(iu.qty_used) AS total_used
  FROM inventory_usage iu
  JOIN inventory_items d ON iu.item_id = d.item_id
  GROUP BY iu.item_id
  ORDER BY total_used DESC
")->fetchAll();
?>

<h3 class="p-3">Drug / Item Usage Report</h3>
<table class="table table-bordered">
  <thead><tr><th>Item Name</th><th>Total Quantity Used</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= sanitize($r['drug_name']) ?></td>
        <td><?= $r['total_used'] ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
