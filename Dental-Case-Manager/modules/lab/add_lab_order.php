<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id   = intval($_POST['case_id']);
    $test_name = sanitize($_POST['test_name']);
    $lab_name  = sanitize($_POST['lab_name']);
    $remarks   = sanitize($_POST['remarks']);
    $status    = 'Ordered';

    if (!$case_id || !$test_name) {
        alert("Case ID and Test Name are required.", "danger");
    } else {
        $stmt = $pdo->prepare("
            INSERT INTO lab_orders (case_id, test_name, lab_name, remarks, status)
            VALUES (?,?,?,?,?)
        ");
        $stmt->execute([$case_id, $test_name, $lab_name, $remarks, $status]);

        logAction($_SESSION['user_id'], "Add Lab Order", "Case ID $case_id – $test_name");
        alert("Lab order added successfully!", "success");
    }
}
?>
<form method="POST" class="p-3">
  <h3>Add Lab Order</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="test_name" placeholder="Test Name (e.g. CBC, Blood Sugar)" class="form-control mb-2" required>
  <input type="text" name="lab_name" placeholder="External Lab Name (optional)" class="form-control mb-2">
  <textarea name="remarks" placeholder="Additional Remarks" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Create Order</button>
</form>
