<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$events = [];
$stmt = $pdo->query("
  SELECT a.appt_id, a.appt_date, p.full_name, d.name AS doctor_name
  FROM appointments a
  JOIN patients p ON a.patient_id = p.patient_id
  JOIN doctors d ON a.doctor_id = d.doctor_id
");
foreach($stmt->fetchAll() as $row) {
  $events[] = [
    'title' => $row['full_name'] . ' with Dr. ' . $row['doctor_name'],
    'start' => $row['appt_date']
  ];
}
?>

<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/main.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/main.min.js"></script>
</head>
<body>
<div id="calendar" class="p-3"></div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
      initialView: 'dayGridMonth',
      events: <?= json_encode($events) ?>
    });
    calendar.render();
  });
</script>
</body>
</html>
