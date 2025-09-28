<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Doctor','Admin']);

$stmt = $pdo->query("
  SELECT a.appt_id, p.full_name, d.name AS doctor_name, a.appt_date, a.status
  FROM appointments a
  JOIN patients p ON a.patient_id = p.patient_id
  JOIN doctors d ON a.doctor_id = d.doctor_id
  WHERE a.status='Scheduled' AND a.appt_date < NOW()
");
$followups = $stmt->fetchAll();
?>

<h3 class="p-3">Follow-ups Pending</h3>
<table class="table table-bordered">
  <thead><tr><th>Patient</th><th>Doctor</th><th>Last Visit</th><th>Status</th></tr></thead>
  <tbody>
  <?php foreach($followups as $f): ?>
    <tr>
      <td><?= sanitize($f['full_name']) ?></td>
      <td><?= sanitize($f['doctor_name']) ?></td>
      <td><?= formatDateTime($f['appt_date']) ?></td>
      <td><span class="badge bg-warning"><?= $f['status'] ?></span></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
