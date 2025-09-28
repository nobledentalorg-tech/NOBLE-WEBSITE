<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','StoreManager']);

$stmt = $pdo->query("
  SELECT item_name, quantity, reorder_level 
  FROM inventory_items 
  WHERE quantity <= reorder_level
");
$lowStock = $stmt->fetchAll();
?>

<h3 class="p-3 text-danger">Low Stock Alerts</h3>
<?php if(!$lowStock): ?>
  <p class="p-3 text-success">All stock levels are healthy ✅</p>
<?php else: ?>
<table class="table table-bordered">
  <thead><tr><th>Item</th><th>Qty Left</th><th>Reorder Level</th></tr></thead>
  <tbody>
    <?php foreach($lowStock as $l): ?>
      <tr>
        <td><?= sanitize($l['item_name']) ?></td>
        <td><?= $l['quantity'] ?></td>
        <td><?= $l['reorder_level'] ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
<?php endif; ?>
