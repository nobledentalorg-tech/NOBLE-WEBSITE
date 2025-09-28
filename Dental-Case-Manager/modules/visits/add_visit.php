<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id   = intval($_POST['case_id']);
    $visit_date = sanitize($_POST['visit_date']);
    $complaint = sanitize($_POST['complaint']);
    $treatment = sanitize($_POST['treatment_done']);
    $next_visit = sanitize($_POST['next_visit']);

    if (!$case_id || !$visit_date) {
        alert("Case ID and Visit Date are required.", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO visits (case_id, visit_date, complaint, treatment_done, next_visit)
                               VALUES (?,?,?,?,?)");
        $stmt->execute([$case_id, $visit_date, $complaint, $treatment, $next_visit]);

        logAction($_SESSION['user_id'], "Add Visit", "Case ID: $case_id");
        alert("Visit added successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Add Visit</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="date" name="visit_date" class="form-control mb-2" required>
  <textarea name="complaint" placeholder="Chief Complaint" class="form-control mb-2"></textarea>
  <textarea name="treatment_done" placeholder="Treatment Done" class="form-control mb-2"></textarea>
  <input type="date" name="next_visit" placeholder="Next Visit Date" class="form-control mb-2">
  <button class="btn btn-primary">Save Visit</button>
</form>
