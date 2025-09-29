<?php
/**
 * LOGGER.PHP
 * ----------------------------------------
 * Centralized file logger for access, error, and audit trails.
 */

function writeLog($type, $message, $user = 'system') {
    $logDir = __DIR__ . '/../logs';
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $fileMap = [
        'access' => 'access.log',
        'error'  => 'error.log',
        'audit'  => 'audit.log'
    ];

    $filename = $fileMap[$type] ?? 'access.log';
    $path = "$logDir/$filename";

    $timestamp = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'CLI';
    $line = "[$timestamp] [$user@$ip] [$type] $message" . PHP_EOL;

    file_put_contents($path, $line, FILE_APPEND | LOCK_EX);
}

/**
 * Shortcut Wrappers
 */
function logAccess($msg) {
    $user = $_SESSION['full_name'] ?? 'Guest';
    writeLog('access', $msg, $user);
}

function logError($msg) {
    $user = $_SESSION['full_name'] ?? 'System';
    writeLog('error', $msg, $user);
}

function logAudit($msg) {
    $user = $_SESSION['full_name'] ?? 'System';
    writeLog('audit', $msg, $user);
}
?>
