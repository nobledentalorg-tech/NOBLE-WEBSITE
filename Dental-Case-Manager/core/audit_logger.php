<?php
/**
 * Audit Logger
 * -------------
 * Records all add/edit/delete actions for accountability.
 */

require_once __DIR__ . '/../config/db_connect.php';
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/functions.php';

function logAction($pdo, $action, $details = '') {
    $userId = currentUserId() ?? 0;
    $ip = getClientIP();
    $stmt = $pdo->prepare("INSERT INTO audit_log (user_id, action, details, ip_address)
                           VALUES (?, ?, ?, ?)");
    $stmt->execute([$userId, $action, $details, $ip]);
}
?>
