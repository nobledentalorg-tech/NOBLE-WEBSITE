<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
require_once '../../core/validator.php';

checkLogin();
allowRole(['Admin', 'Doctor', 'Receptionist']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = sanitize($_POST['full_name']);
    $gender  = sanitize($_POST['gender']);
    $dob     = sanitize($_POST['dob']);
    $phone   = sanitize($_POST['phone']);
    $email   = sanitize($_POST['email']);
    $address = sanitize($_POST['address']);
    $allergies = sanitize($_POST['allergies']);

    // Basic validation
    if (!$name || !$gender || !$dob) {
        alert("Name, Gender, and DOB are required!", "danger");
    } elseif (!validatePhone($phone)) {
        alert("Invalid phone number.", "danger");
    } elseif ($email && !validateEmail($email)) {
        alert("Invalid email address.", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO patients (full_name, gender, dob, phone, email, address, allergies)
                               VALUES (?,?,?,?,?,?,?)");
        $stmt->execute([$name, $gender, $dob, $phone, $email, $address, $allergies]);

        logAction($_SESSION['user_id'], "Add Patient", $name);
        alert("Patient added successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Add Patient</h3>
  <input type="text" name="full_name" placeholder="Full Name" class="form-control mb-2" required>
  <select name="gender" class="form-control mb-2" required>
      <option value="">Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
  </select>
  <input type="date" name="dob" class="form-control mb-2" required>
  <input type="text" name="phone" placeholder="Phone" class="form-control mb-2">
  <input type="email" name="email" placeholder="Email" class="form-control mb-2">
  <textarea name="address" placeholder="Address" class="form-control mb-2"></textarea>
  <input type="text" name="allergies" placeholder="Known Allergies (comma separated)" class="form-control mb-2">
  <button class="btn btn-primary">Save</button>
</form>
