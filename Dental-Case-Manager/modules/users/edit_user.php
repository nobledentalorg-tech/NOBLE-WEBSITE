<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin']);

$user_id = intval($_GET['id'] ?? 0);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitize($_POST['full_name']);
    $email = sanitize($_POST['email']);
    $role = sanitize($_POST['role']);

    $stmt = $pdo->prepare("UPDATE users SET full_name=?, email=?, role=? WHERE user_id=?");
    $stmt->execute([$name, $email, $role, $user_id]);
    logAction($_SESSION['user_id'], "Edit User", "User ID: $user_id");
    alert("User updated successfully!", "success");
}

$user = $pdo->prepare("SELECT * FROM users WHERE user_id=?");
$user->execute([$user_id]);
$data = $user->fetch();
if(!$data){ alert("Invalid user ID","danger"); exit; }
?>

<form method="POST" class="p-3">
  <h3>Edit User</h3>
  <input type="text" name="full_name" value="<?= sanitize($data['full_name']) ?>" class="form-control mb-2">
  <input type="email" name="email" value="<?= sanitize($data['email']) ?>" class="form-control mb-2">
  <select name="role" class="form-control mb-2">
    <option <?= $data['role']=='Admin'?'selected':'' ?>>Admin</option>
    <option <?= $data['role']=='Doctor'?'selected':'' ?>>Doctor</option>
    <option <?= $data['role']=='Receptionist'?'selected':'' ?>>Receptionist</option>
    <option <?= $data['role']=='StoreManager'?'selected':'' ?>>StoreManager</option>
    <option <?= $data['role']=='LabTechnician'?'selected':'' ?>>LabTechnician</option>
  </select>
  <button class="btn btn-warning">Update</button>
</form>
