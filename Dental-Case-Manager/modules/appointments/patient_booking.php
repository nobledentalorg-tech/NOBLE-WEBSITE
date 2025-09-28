<?php
require_once '../../config/db_connect.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = sanitize($_POST['name']);
    $phone = sanitize($_POST['phone']);
    $email = sanitize($_POST['email']);
    $doctor_id = intval($_POST['doctor_id']);
    $appt_date = sanitize($_POST['appt_date']);

    // Check if patient exists
    $stmt = $pdo->prepare("SELECT patient_id FROM patients WHERE phone=? LIMIT 1");
    $stmt->execute([$phone]);
    $patient = $stmt->fetch();

    if (!$patient) {
        $pdo->prepare("INSERT INTO patients (full_name, phone, email) VALUES (?,?,?)")
            ->execute([$name, $phone, $email]);
        $patient_id = $pdo->lastInsertId();
    } else {
        $patient_id = $patient['patient_id'];
    }

    $pdo->prepare("INSERT INTO appointments (patient_id, doctor_id, appt_date, status)
                   VALUES (?,?,?,?)")
        ->execute([$patient_id, $doctor_id, $appt_date, 'Scheduled']);

    logAction(0, "Online Booking", "$name ($phone)");
    alert("Appointment booked successfully!", "success");
}

// Doctors list
$doctors = $pdo->query("SELECT doctor_id, name FROM doctors ORDER BY name")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Book Appointment</h3>
  <input type="text" name="name" placeholder="Full Name" class="form-control mb-2" required>
  <input type="text" name="phone" placeholder="Phone" class="form-control mb-2" required>
  <input type="email" name="email" placeholder="Email" class="form-control mb-2">
  
  <select name="doctor_id" class="form-control mb-2" required>
    <option value="">Select Doctor</option>
    <?php foreach($doctors as $d): ?>
      <option value="<?= $d['doctor_id'] ?>"><?= $d['name'] ?></option>
    <?php endforeach; ?>
  </select>

  <input type="datetime-local" name="appt_date" class="form-control mb-2" required>
  <button class="btn btn-primary">Book Now</button>
</form>
