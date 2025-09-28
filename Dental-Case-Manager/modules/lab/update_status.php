<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor','LabTechnician']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $order_id = intval($_POST['order_id']);
    $status   = sanitize($_POST['status']);

    $pdo->prepare("UPDATE lab_orders SET status=? WHERE order_id=?")
        ->execute([$status, $order_id]);

    logAction($_SESSION['user_id'], "Update Lab Status", "Order ID $order_id → $status");
    alert("Status updated successfully!", "success");
}
?>
<form method="POST" class="p-3">
  <h3>Update Lab Order Status</h3>
  <input type="number" name="order_id" placeholder="Order ID" class="form-control mb-2" required>
  <select name="status" class="form-control mb-2" required>
    <option>Ordered</option>
    <option>In Progress</option>
    <option>Completed</option>
    <option>Delivered</option>
  </select>
  <button class="btn btn-warning">Update</button>
</form>
