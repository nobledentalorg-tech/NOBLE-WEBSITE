<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

$stmt = $pdo->query("SELECT user_id, full_name, email, role, created_at FROM users ORDER BY role");
$users = $stmt->fetchAll();
?>

<h3 class="p-3">System Users</h3>
<table class="table table-bordered table-striped">
  <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Edit</th></tr></thead>
  <tbody>
  <?php foreach($users as $u): ?>
    <tr>
      <td><?= $u['user_id'] ?></td>
      <td><?= sanitize($u['full_name']) ?></td>
      <td><?= sanitize($u['email']) ?></td>
      <td><?= $u['role'] ?></td>
      <td><?= formatDateTime($u['created_at']) ?></td>
      <td><a href="edit_user.php?id=<?= $u['user_id'] ?>" class="btn btn-sm btn-outline-secondary">Edit</a></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
