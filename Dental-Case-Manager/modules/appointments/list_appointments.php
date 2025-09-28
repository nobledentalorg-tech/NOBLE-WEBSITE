<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$stmt = $pdo->query("
    SELECT a.*, p.full_name, d.name AS doctor_name
    FROM appointments a
    JOIN patients p ON a.patient_id = p.patient_id
    JOIN doctors d ON a.doctor_id = d.doctor_id
    ORDER BY a.appt_date DESC
");
$appointments = $stmt->fetchAll();
?>

<h3 class="p-3">Appointment List</h3>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>ID</th><th>Patient</th><th>Doctor</th><th>Date/Time</th><th>Status</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach($appointments as $a): ?>
    <tr>
      <td><?= $a['appt_id'] ?></td>
      <td><?= sanitize($a['full_name']) ?></td>
      <td><?= sanitize($a['doctor_name']) ?></td>
      <td><?= formatDateTime($a['appt_date']) ?></td>
      <td><?= $a['status'] ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>
