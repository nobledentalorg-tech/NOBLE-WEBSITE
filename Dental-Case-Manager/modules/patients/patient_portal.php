<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Patient']);

$patient_id = $_SESSION['linked_id'] ?? 0;

$stmt = $pdo->prepare("SELECT * FROM patients WHERE patient_id=?");
$stmt->execute([$patient_id]);
$patient = $stmt->fetch();

if (!$patient) {
    alert("Patient not found.", "danger");
    exit;
}
?>

<h3 class="p-3">Welcome <?= sanitize($patient['full_name']) ?></h3>
<p><strong>Upcoming Appointments:</strong></p>

<?php
$appt = $pdo->prepare("SELECT * FROM appointments WHERE patient_id=? ORDER BY appt_date DESC LIMIT 5");
$appt->execute([$patient_id]);
foreach($appt as $a) {
  echo "<p>📅 " . formatDateTime($a['appt_date']) . " — " . $a['status'] . "</p>";
}
?>

<form method="POST" action="feedback_form.php" class="mt-4">
  <h4>Submit Feedback</h4>
  <textarea name="feedback" class="form-control mb-2" required></textarea>
  <button class="btn btn-primary">Submit</button>
</form>
