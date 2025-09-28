<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$id = $_GET['id'] ?? 0;

$stmt = $pdo->prepare("SELECT * FROM patients WHERE patient_id=?");
$stmt->execute([$id]);
$patient = $stmt->fetch();

if (!$patient) {
    alert("Patient not found.", "danger");
    exit;
}
?>

<div class="p-3">
  <h3><?= sanitize($patient['full_name']) ?></h3>
  <p><strong>Gender:</strong> <?= $patient['gender'] ?></p>
  <p><strong>DOB:</strong> <?= formatDate($patient['dob']) ?></p>
  <p><strong>Phone:</strong> <?= $patient['phone'] ?></p>
  <p><strong>Email:</strong> <?= $patient['email'] ?></p>
  <p><strong>Address:</strong> <?= $patient['address'] ?></p>
  <p><strong>Allergies:</strong> <?= $patient['allergies'] ?></p>
</div>
