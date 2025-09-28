<?php
require_once '../../core/uploader.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
require_once '../../config/constants.php';

checkLogin();
allowRole(['Admin','LabTechnician']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $order_id = intval($_POST['order_id']);

    $upload = uploadFile($_FILES['report'], LAB_REPORTS ?? XRAY_REPORTS); // LAB_REPORTS constant if defined
    if (isset($upload['error'])) {
        alert($upload['error'], "danger");
    } else {
        $stmt = $pdo->prepare("
          UPDATE lab_orders 
          SET report_file=?, status='Delivered' 
          WHERE order_id=?
        ");
        $stmt->execute([$upload['filename'], $order_id]);

        logAction($_SESSION['user_id'], "Upload Lab Report", "Order ID $order_id");
        alert("Report uploaded successfully!", "success");
    }
}
?>
<form method="POST" enctype="multipart/form-data" class="p-3">
  <h3>Upload Lab Report</h3>
  <input type="number" name="order_id" placeholder="Order ID" class="form-control mb-2" required>
  <input type="file" name="report" class="form-control mb-2" accept=".pdf,.jpg,.png" required>
  <button class="btn btn-success">Upload Report</button>
</form>
