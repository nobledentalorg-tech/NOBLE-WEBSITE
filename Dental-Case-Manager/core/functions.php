
<?php
/**
 * General Helper Functions
 * ------------------------
 * Common utilities, formatters, and alerts.
 */

require_once __DIR__ . '/../config/timezone.php';

function alert($msg, $type = 'info') {
    echo "<div class='alert alert-{$type}'>{$msg}</div>";
}

function redirect($url) {
    header("Location: {$url}");
    exit;
}

function sanitize($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

function formatDate($date) {
    return date('d M Y', strtotime($date));
}

function formatDateTime($datetime) {
    return date('d M Y h:i A', strtotime($datetime));
}

function randomCode($length = 8) {
    return strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, $length));
}

function getClientIP() {
    return $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
}
?>
