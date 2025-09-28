<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/rule_engine.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id   = intval($_POST['case_id']);
    $drug_name = sanitize($_POST['drug_name']);
    $dose      = sanitize($_POST['dose']);
    $duration  = sanitize($_POST['duration']);
    $remarks   = sanitize($_POST['remarks']);
    $age       = intval($_POST['age']);
    $weight    = floatval($_POST['weight']);
    $allergies = sanitize($_POST['allergies']);

    $check = canPrescribe($drug_name, $age, $weight, $allergies);

    if (!$check['ok']) {
        alert("⚠️ Cannot prescribe: {$check['reason']}", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO prescriptions (case_id, drug_name, dose, duration, remarks)
                               VALUES (?,?,?,?,?)");
        $stmt->execute([$case_id, $drug_name, $dose, $duration, $remarks]);

        logAction($_SESSION['user_id'], "Create Prescription", "Drug: $drug_name for Case ID: $case_id");
        alert("✅ Prescription added successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Create Prescription</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="drug_name" placeholder="Drug Name" class="form-control mb-2" required>
  <input type="text" name="dose" placeholder="Dose (e.g. 500mg)" class="form-control mb-2">
  <input type="text" name="duration" placeholder="Duration (e.g. 5 days)" class="form-control mb-2">
  <input type="text" name="remarks" placeholder="Remarks" class="form-control mb-2">
  
  <h5>Safety Check:</h5>
  <input type="number" name="age" placeholder="Age (yrs)" class="form-control mb-2" required>
  <input type="number" step="0.1" name="weight" placeholder="Weight (kg)" class="form-control mb-2" required>
  <input type="text" name="allergies" placeholder="Allergies (comma-separated)" class="form-control mb-2">
  <button class="btn btn-primary">Save Prescription</button>
</form>
