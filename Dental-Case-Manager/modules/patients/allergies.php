<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/validator.php';

checkLogin();
allowRole(['Doctor', 'Admin']);

$patient_id = $_GET['id'] ?? 0;

$stmt = $pdo->prepare("SELECT full_name, allergies FROM patients WHERE patient_id=?");
$stmt->execute([$patient_id]);
$patient = $stmt->fetch();

if (!$patient) {
    alert("Patient not found.", "danger");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newAllergies = sanitize($_POST['allergies']);
    $stmt = $pdo->prepare("UPDATE patients SET allergies=? WHERE patient_id=?");
    $stmt->execute([$newAllergies, $patient_id]);
    alert("Allergy list updated!", "success");
}
?>

<div class="p-3">
  <h3>Allergies for <?= sanitize($patient['full_name']) ?></h3>
  <form method="POST">
    <textarea name="allergies" class="form-control mb-2" rows="3"><?= $patient['allergies'] ?></textarea>
    <button class="btn btn-warning">Update Allergies</button>
  </form>
</div>
