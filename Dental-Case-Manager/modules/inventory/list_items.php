<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$stmt = $pdo->query("SELECT * FROM inventory_items ORDER BY item_name ASC");
$items = $stmt->fetchAll();
?>

<h3 class="p-3">Inventory Items</h3>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>ID</th><th>Name</th><th>Category</th><th>Qty</th><th>Unit</th><th>Supplier</th><th>Reorder</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach($items as $i): ?>
    <tr class="<?= $i['quantity'] <= $i['reorder_level'] ? 'table-warning' : '' ?>">
      <td><?= $i['item_id'] ?></td>
      <td><?= sanitize($i['item_name']) ?></td>
      <td><?= sanitize($i['category']) ?></td>
      <td><?= $i['quantity'] ?></td>
      <td><?= sanitize($i['unit']) ?></td>
      <td><?= sanitize($i['supplier_name']) ?></td>
      <td><?= $i['reorder_level'] ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>
