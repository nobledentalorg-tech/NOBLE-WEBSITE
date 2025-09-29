<?php
/**
 * LOGGER.PHP
 * ----------------------------------------
 * Centralized file logger for Access, Error, and Audit events.
 * Automatically creates log directory if missing.
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Write a message to a log file.
 *
 * @param string $type  access|error|audit
 * @param string $message  message content
 * @param string $user  username or system
 */
function writeLog(string $type, string $message, string $user = 'system') {
    $logDir = __DIR__ . '/../logs';

    // Ensure logs folder exists
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    // Map types to filenames
    $fileMap = [
        'access' => 'access.log',
        'error'  => 'error.log',
        'audit'  => 'audit.log'
    ];

    $filename = $fileMap[$type] ?? 'access.log';
    $path = $logDir . DIRECTORY_SEPARATOR . $filename;

    // Prepare log entry
    $timestamp = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'CLI';
    $line = sprintf("[%s] [%s@%s] [%s] %s%s", $timestamp, $user, $ip, strtoupper($type), $message, PHP_EOL);

    // Write to file
    file_put_contents($path, $line, FILE_APPEND | LOCK_EX);
}

/**
 * Log Access Event
 */
function logAccess(string $msg) {
    $user = $_SESSION['full_name'] ?? 'Guest';
    writeLog('access', $msg, $user);
}

/**
 * Log Error Event
 */
function logError(string $msg) {
    $user = $_SESSION['full_name'] ?? 'System';
    writeLog('error', $msg, $user);
}

/**
 * Log Audit Trail
 */
function logAudit(string $msg) {
    $user = $_SESSION['full_name'] ?? 'System';
    writeLog('audit', $msg, $user);
}

/**
 * Example Usage:
 * ---------------
 * logAccess("User viewed case #45");
 * logAudit("Doctor updated prescription ID 123");
 * logError("Database connection failed");
 */
?>
