<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $role = sanitize($_POST['role']);
    $desc = sanitize($_POST['description']);
    if(!$role) alert("Role name required","danger");
    else {
        $stmt = $pdo->prepare("
            INSERT INTO roles (role_name, description)
            VALUES (?,?) ON DUPLICATE KEY UPDATE description=VALUES(description)
        ");
        $stmt->execute([$role, $desc]);
        logAction($_SESSION['user_id'],"Add/Update Role",$role);
        alert("Role saved successfully!","success");
    }
}

$roles = $pdo->query("SELECT * FROM roles ORDER BY role_name")->fetchAll();
?>

<h3 class="p-3">Role Manager</h3>
<form method="POST" class="p-3">
  <input type="text" name="role" placeholder="Role Name" class="form-control mb-2" required>
  <input type="text" name="description" placeholder="Description" class="form-control mb-2">
  <button class="btn btn-primary">Add Role</button>
</form>

<hr>
<table class="table table-bordered p-3">
<thead><tr><th>Role</th><th>Description</th></tr></thead>
<tbody>
<?php foreach($roles as $r): ?>
<tr><td><?= sanitize($r['role_name']) ?></td><td><?= sanitize($r['description']) ?></td></tr>
<?php endforeach; ?>
</tbody>
</table>
