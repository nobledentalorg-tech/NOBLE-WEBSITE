<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

$logs = $pdo->query("
  SELECT a.id, u.full_name AS user, a.action, a.details, a.created_at
  FROM audit_log a 
  LEFT JOIN users u ON a.user_id=u.user_id
  ORDER BY a.id DESC LIMIT 200
")->fetchAll();
?>
<h3 class="p-3">System Audit Trail</h3>
<table class="table table-striped table-bordered">
<thead><tr><th>ID</th><th>User</th><th>Action</th><th>Details</th><th>Timestamp</th></tr></thead>
<tbody>
<?php foreach($logs as $l): ?>
<tr>
  <td><?= $l['id'] ?></td>
  <td><?= sanitize($l['user']) ?></td>
  <td><?= sanitize($l['action']) ?></td>
  <td><?= sanitize($l['details']) ?></td>
  <td><?= formatDateTime($l['created_at']) ?></td>
</tr>
<?php endforeach; ?>
</tbody>
</table>
