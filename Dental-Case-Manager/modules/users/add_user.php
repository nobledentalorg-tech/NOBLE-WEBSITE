<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = sanitize($_POST['full_name']);
    $email = sanitize($_POST['email']);
    $role  = sanitize($_POST['role']);
    $pass  = password_hash($_POST['password'], PASSWORD_DEFAULT);

    if (!$name || !$email || !$role) {
        alert("All fields are required.", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO users (full_name, email, role, password) VALUES (?,?,?,?)");
        $stmt->execute([$name, $email, $role, $pass]);
        logAction($_SESSION['user_id'], "Add User", $name);
        alert("User added successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Add New User</h3>
  <input type="text" name="full_name" placeholder="Full Name" class="form-control mb-2" required>
  <input type="email" name="email" placeholder="Email" class="form-control mb-2" required>
  <select name="role" class="form-control mb-2" required>
    <option value="">Select Role</option>
    <option>Admin</option>
    <option>Doctor</option>
    <option>Receptionist</option>
    <option>StoreManager</option>
    <option>LabTechnician</option>
  </select>
  <input type="password" name="password" placeholder="Temporary Password" class="form-control mb-2" required>
  <button class="btn btn-primary">Add User</button>
</form>
