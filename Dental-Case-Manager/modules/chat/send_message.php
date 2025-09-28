<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
require_once '../../core/api_response.php';
checkLogin();

$sender   = $_SESSION['user_id'];
$receiver = intval($_POST['receiver_id']);
$message  = sanitize($_POST['message']);

if(!$receiver || !$message) jsonResponse(false, "Missing fields.");

$stmt = $pdo->prepare("INSERT INTO chat_messages (sender_id, receiver_id, message) VALUES (?,?,?)");
$stmt->execute([$sender, $receiver, $message]);

logAction($sender, "Send Message", "To User ID: $receiver");
jsonResponse(true, "Message sent");
