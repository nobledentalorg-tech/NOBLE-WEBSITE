<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin', 'Doctor']);

$id = $_GET['id'] ?? 0;

$stmt = $pdo->prepare("SELECT * FROM patients WHERE patient_id=?");
$stmt->execute([$id]);
$patient = $stmt->fetch();

if (!$patient) {
    alert("Patient not found.", "danger");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = sanitize($_POST['full_name']);
    $gender  = sanitize($_POST['gender']);
    $dob     = sanitize($_POST['dob']);
    $phone   = sanitize($_POST['phone']);
    $email   = sanitize($_POST['email']);
    $address = sanitize($_POST['address']);
    $allergies = sanitize($_POST['allergies']);

    $stmt = $pdo->prepare("UPDATE patients SET full_name=?, gender=?, dob=?, phone=?, email=?, address=?, allergies=? WHERE patient_id=?");
    $stmt->execute([$name, $gender, $dob, $phone, $email, $address, $allergies, $id]);

    logAction($_SESSION['user_id'], "Edit Patient", $name);
    alert("Patient details updated.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Edit Patient</h3>
  <input type="text" name="full_name" value="<?= $patient['full_name'] ?>" class="form-control mb-2">
  <select name="gender" class="form-control mb-2">
      <option <?= $patient['gender']=='Male'?'selected':'' ?>>Male</option>
      <option <?= $patient['gender']=='Female'?'selected':'' ?>>Female</option>
      <option <?= $patient['gender']=='Other'?'selected':'' ?>>Other</option>
  </select>
  <input type="date" name="dob" value="<?= $patient['dob'] ?>" class="form-control mb-2">
  <input type="text" name="phone" value="<?= $patient['phone'] ?>" class="form-control mb-2">
  <input type="email" name="email" value="<?= $patient['email'] ?>" class="form-control mb-2">
  <textarea name="address" class="form-control mb-2"><?= $patient['address'] ?></textarea>
  <input type="text" name="allergies" value="<?= $patient['allergies'] ?>" class="form-control mb-2">
  <button class="btn btn-success">Update</button>
</form>
