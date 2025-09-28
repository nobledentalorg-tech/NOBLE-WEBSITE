<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$uid = $_SESSION['user_id'];

// fetch unseen messages or alerts
$stmt = $pdo->prepare("
  SELECT COUNT(*) as unread 
  FROM chat_messages 
  WHERE receiver_id=? AND seen=0
");
$stmt->execute([$uid]);
$count = $stmt->fetchColumn();

if($count>0){
  echo "<span class='badge bg-danger'>$count</span> new message(s)";
}

// mark as seen (optional)
if(isset($_GET['mark']) && $_GET['mark']=='seen'){
  $pdo->prepare("UPDATE chat_messages SET seen=1 WHERE receiver_id=?")->execute([$uid]);
}
