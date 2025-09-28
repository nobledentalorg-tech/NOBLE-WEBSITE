<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Doctor','Receptionist']);

$tomorrow = date('Y-m-d', strtotime('+1 day'));

$stmt = $pdo->prepare("
    SELECT p.full_name, p.phone, d.name AS doctor_name, a.appt_date
    FROM appointments a
    JOIN patients p ON a.patient_id = p.patient_id
    JOIN doctors d ON a.doctor_id = d.doctor_id
    WHERE DATE(a.appt_date)=?
");
$stmt->execute([$tomorrow]);
$reminders = $stmt->fetchAll();
?>

<h3 class="p-3">Tomorrow’s Appointment Reminders</h3>
<table class="table table-bordered">
  <thead><tr><th>Patient</th><th>Phone</th><th>Doctor</th><th>Date/Time</th></tr></thead>
  <tbody>
  <?php foreach($reminders as $r): ?>
    <tr>
      <td><?= sanitize($r['full_name']) ?></td>
      <td><?= $r['phone'] ?></td>
      <td><?= sanitize($r['doctor_name']) ?></td>
      <td><?= formatDateTime($r['appt_date']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
