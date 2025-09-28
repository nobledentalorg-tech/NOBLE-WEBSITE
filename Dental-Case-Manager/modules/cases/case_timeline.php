<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['id'] ?? 0);

$stmt = $pdo->prepare("SELECT * FROM case_notes WHERE case_id=? ORDER BY created_at ASC");
$stmt->execute([$case_id]);
$notes = $stmt->fetchAll();
?>

<h3 class="p-3">Case Timeline</h3>
<ul class="list-group">
<?php foreach($notes as $n): ?>
  <li class="list-group-item">
    <strong><?= formatDateTime($n['created_at']) ?>:</strong> <?= sanitize($n['note_text']) ?>
  </li>
<?php endforeach; ?>
</ul>
