<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $role = sanitize($_POST['role']);
    $modules = implode(',', $_POST['modules'] ?? []);

    $stmt = $pdo->prepare("
        INSERT INTO role_permissions (role, allowed_modules)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE allowed_modules=VALUES(allowed_modules)
    ");
    $stmt->execute([$role, $modules]);
    logAction($_SESSION['user_id'], "Update Role Permissions", $role);
    alert("Permissions updated for role: $role", "success");
}

$roles = ['Admin','Doctor','Receptionist','StoreManager','LabTechnician'];
$modules = ['patients','cases','appointments','billing','inventory','lab','reports','settings','chat','analytics'];
?>

<form method="POST" class="p-3">
  <h3>Role-Based Permissions</h3>
  <select name="role" class="form-control mb-2" required>
    <option value="">Select Role</option>
    <?php foreach($roles as $r): ?><option><?= $r ?></option><?php endforeach; ?>
  </select>

  <label>Allowed Modules</label>
  <div class="border p-2 mb-2" style="max-height:220px;overflow-y:auto;">
    <?php foreach($modules as $m): ?>
      <label><input type="checkbox" name="modules[]" value="<?= $m ?>"> <?= ucfirst($m) ?></label><br>
    <?php endforeach; ?>
  </div>

  <button class="btn btn-success">Save Permissions</button>
</form>

<hr>
<h5 class="p-3">Current Role Permissions</h5>
<table class="table table-bordered">
  <thead><tr><th>Role</th><th>Allowed Modules</th></tr></thead>
  <tbody>
    <?php
    $rows = $pdo->query("SELECT * FROM role_permissions")->fetchAll();
    foreach($rows as $r): ?>
      <tr>
        <td><?= $r['role'] ?></td>
        <td><?= sanitize($r['allowed_modules']) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
