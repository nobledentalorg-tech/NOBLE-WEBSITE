<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor','Receptionist']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $patient_id  = intval($_POST['patient_id']);
    $doctor_id   = intval($_POST['doctor_id']);
    $case_id     = intval($_POST['case_id']);
    $appt_date   = sanitize($_POST['appt_date']);
    $status      = sanitize($_POST['status']);

    if (!$patient_id || !$doctor_id || !$appt_date) {
        alert("Patient, Doctor, and Appointment Date are required!", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO appointments (patient_id, doctor_id, case_id, appt_date, status)
                               VALUES (?,?,?,?,?)");
        $stmt->execute([$patient_id, $doctor_id, $case_id, $appt_date, $status]);
        logAction($_SESSION['user_id'], "Add Appointment", "Patient ID: $patient_id");
        alert("Appointment created successfully!", "success");
    }
}

// Fetch dropdown lists
$patients = $pdo->query("SELECT patient_id, full_name FROM patients ORDER BY full_name")->fetchAll();
$doctors  = $pdo->query("SELECT doctor_id, name FROM doctors ORDER BY name")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Add Appointment</h3>
  <label>Patient:</label>
  <select name="patient_id" class="form-control mb-2" required>
    <option value="">Select Patient</option>
    <?php foreach($patients as $p): ?>
      <option value="<?= $p['patient_id'] ?>"><?= $p['full_name'] ?></option>
    <?php endforeach; ?>
  </select>

  <label>Doctor:</label>
  <select name="doctor_id" class="form-control mb-2" required>
    <option value="">Select Doctor</option>
    <?php foreach($doctors as $d): ?>
      <option value="<?= $d['doctor_id'] ?>"><?= $d['name'] ?></option>
    <?php endforeach; ?>
  </select>

  <input type="number" name="case_id" placeholder="Linked Case ID (optional)" class="form-control mb-2">
  <input type="datetime-local" name="appt_date" class="form-control mb-2" required>
  <select name="status" class="form-control mb-2">
      <option>Scheduled</option>
      <option>Completed</option>
      <option>Cancelled</option>
  </select>
  <button class="btn btn-primary">Save Appointment</button>
</form>
