<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $type = sanitize($_POST['type']);
    $agent = sanitize($_POST['agent']);
    $dose = sanitize($_POST['dose']);
    $remarks = sanitize($_POST['remarks']);

    $stmt = $pdo->prepare("INSERT INTO anesthesia_notes (case_id, type, agent, dose, remarks)
                           VALUES (?,?,?,?,?)");
    $stmt->execute([$case_id, $type, $agent, $dose, $remarks]);

    logAction($_SESSION['user_id'], "Add Anesthesia Note", "Case ID: $case_id");
    alert("Anesthesia note recorded.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Anesthesia Notes</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="type" placeholder="Type (Local/General)" class="form-control mb-2" required>
  <input type="text" name="agent" placeholder="Agent Used (e.g., Lignocaine)" class="form-control mb-2">
  <input type="text" name="dose" placeholder="Dose (ml/mg)" class="form-control mb-2">
  <textarea name="remarks" placeholder="Remarks or Complications" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Save</button>
</form>
