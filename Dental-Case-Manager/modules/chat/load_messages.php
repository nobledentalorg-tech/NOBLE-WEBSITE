<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$uid = $_SESSION['user_id'];
$receiver_id = intval($_GET['receiver_id'] ?? 0);

if(!$receiver_id) exit("<em>Select a user to start chat.</em>");

$stmt = $pdo->prepare("
  SELECT m.*, u.full_name AS sender
  FROM chat_messages m
  JOIN users u ON m.sender_id = u.user_id
  WHERE (m.sender_id=? AND m.receiver_id=?) 
     OR (m.sender_id=? AND m.receiver_id=?)
  ORDER BY m.created_at ASC
");
$stmt->execute([$uid, $receiver_id, $receiver_id, $uid]);
$msgs = $stmt->fetchAll();

foreach($msgs as $m):
  $isMine = $m['sender_id'] == $uid;
?>
<div style="text-align:<?= $isMine?'right':'left' ?>;margin:4px;">
  <span class="badge bg-<?= $isMine?'primary':'secondary' ?>">
    <?= sanitize($m['message']) ?>
  </span>
  <small class="text-muted"><?= date('H:i', strtotime($m['created_at'])) ?></small>
</div>
<?php endforeach; ?>
