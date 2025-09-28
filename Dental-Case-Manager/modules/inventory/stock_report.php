<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','StoreManager']);

$stmt = $pdo->query("
  SELECT item_name, category, quantity, unit, supplier_name, updated_at
  FROM inventory_items
  ORDER BY item_name ASC
");
$rows = $stmt->fetchAll();
?>

<h3 class="p-3">Stock Report</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>Item</th><th>Category</th><th>Qty</th><th>Unit</th><th>Supplier</th><th>Last Updated</th></tr>
  </thead>
  <tbody>
  <?php foreach($rows as $r): ?>
    <tr>
      <td><?= sanitize($r['item_name']) ?></td>
      <td><?= sanitize($r['category']) ?></td>
      <td><?= $r['quantity'] ?></td>
      <td><?= sanitize($r['unit']) ?></td>
      <td><?= sanitize($r['supplier_name']) ?></td>
      <td><?= formatDateTime($r['updated_at']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
