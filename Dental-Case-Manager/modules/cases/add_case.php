<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor','Receptionist']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $patient_id = intval($_POST['patient_id']);
    $case_type  = sanitize($_POST['case_type']);
    $diagnosis  = sanitize($_POST['diagnosis']);
    $status     = sanitize($_POST['status']);

    if (!$patient_id || !$case_type) {
        alert("Patient and Case Type are required.", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO cases (patient_id, case_type, diagnosis, status)
                               VALUES (?,?,?,?)");
        $stmt->execute([$patient_id, $case_type, $diagnosis, $status]);

        logAction($_SESSION['user_id'], "Add Case", "Case for Patient ID: $patient_id");
        alert("Case created successfully!", "success");
    }
}

// Fetch patient list
$patients = $pdo->query("SELECT patient_id, full_name FROM patients ORDER BY full_name")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Add Case</h3>
  <label>Patient:</label>
  <select name="patient_id" class="form-control mb-2" required>
    <option value="">Select Patient</option>
    <?php foreach($patients as $p): ?>
      <option value="<?= $p['patient_id'] ?>"><?= $p['full_name'] ?></option>
    <?php endforeach; ?>
  </select>

  <input type="text" name="case_type" placeholder="Case Type (e.g. RCT, Extraction)" class="form-control mb-2" required>
  <textarea name="diagnosis" placeholder="Initial Diagnosis" class="form-control mb-2"></textarea>
  
  <select name="status" class="form-control mb-2">
    <option>Open</option>
    <option>Ongoing</option>
    <option>Closed</option>
  </select>

  <button class="btn btn-primary">Create Case</button>
</form>
