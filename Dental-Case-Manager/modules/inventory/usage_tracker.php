<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor','StoreManager']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $item_id  = intval($_POST['item_id']);
    $case_id  = intval($_POST['case_id']);
    $qty_used = intval($_POST['qty_used']);
    $remarks  = sanitize($_POST['remarks']);

    $pdo->beginTransaction();
    try {
        // Record usage
        $stmt = $pdo->prepare("INSERT INTO inventory_usage (item_id, case_id, qty_used, remarks)
                               VALUES (?,?,?,?)");
        $stmt->execute([$item_id, $case_id, $qty_used, $remarks]);

        // Deduct stock
        $pdo->prepare("UPDATE inventory_items SET quantity = quantity - ? WHERE item_id=?")
            ->execute([$qty_used, $item_id]);

        $pdo->commit();
        logAction($_SESSION['user_id'], "Use Inventory", "Item ID: $item_id");
        alert("Usage recorded and stock updated.", "success");
    } catch(Exception $e) {
        $pdo->rollBack();
        alert("Error: " . $e->getMessage(), "danger");
    }
}

// Fetch items
$items = $pdo->query("SELECT item_id, item_name, quantity FROM inventory_items ORDER BY item_name")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Record Inventory Usage</h3>
  <select name="item_id" class="form-control mb-2" required>
    <option value="">Select Item</option>
    <?php foreach($items as $it): ?>
      <option value="<?= $it['item_id'] ?>"><?= $it['item_name'] ?> (<?= $it['quantity'] ?> left)</option>
    <?php endforeach; ?>
  </select>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="number" name="qty_used" placeholder="Quantity Used" class="form-control mb-2" required>
  <input type="text" name="remarks" placeholder="Remarks" class="form-control mb-2">
  <button class="btn btn-warning">Record Usage</button>
</form>
