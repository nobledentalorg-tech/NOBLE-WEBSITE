<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $old = $_POST['old_password'];
    $new = $_POST['new_password'];
    $confirm = $_POST['confirm_password'];
    $uid = $_SESSION['user_id'];

    $stmt = $pdo->prepare("SELECT password FROM users WHERE user_id=?");
    $stmt->execute([$uid]);
    $user = $stmt->fetch();

    if (!password_verify($old, $user['password'])) {
        alert("Old password is incorrect!", "danger");
    } elseif ($new !== $confirm) {
        alert("Passwords do not match!", "danger");
    } else {
        $hash = password_hash($new, PASSWORD_DEFAULT);
        $pdo->prepare("UPDATE users SET password=? WHERE user_id=?")->execute([$hash, $uid]);
        logAction($uid, "Password Change", "User changed password");
        alert("Password updated successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Change Password</h3>
  <input type="password" name="old_password" placeholder="Old Password" class="form-control mb-2" required>
  <input type="password" name="new_password" placeholder="New Password" class="form-control mb-2" required>
  <input type="password" name="confirm_password" placeholder="Confirm Password" class="form-control mb-2" required>
  <button class="btn btn-primary">Update Password</button>
</form>
