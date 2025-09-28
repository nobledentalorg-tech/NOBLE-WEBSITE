<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $procedure = sanitize($_POST['procedure']);
    $duration = sanitize($_POST['duration']);
    $findings = sanitize($_POST['findings']);
    $complications = sanitize($_POST['complications']);

    $stmt = $pdo->prepare("INSERT INTO surgery_notes (case_id, procedure, duration, findings, complications)
                           VALUES (?,?,?,?,?)");
    $stmt->execute([$case_id, $procedure, $duration, $findings, $complications]);

    logAction($_SESSION['user_id'], "Add Surgery Note", "Case ID: $case_id");
    alert("Surgery note saved!", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Surgery Notes</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="procedure" placeholder="Procedure" class="form-control mb-2" required>
  <input type="text" name="duration" placeholder="Duration (mins)" class="form-control mb-2">
  <textarea name="findings" placeholder="Findings" class="form-control mb-2"></textarea>
  <textarea name="complications" placeholder="Complications" class="form-control mb-2"></textarea>
  <button class="btn btn-success">Save Notes</button>
</form>
