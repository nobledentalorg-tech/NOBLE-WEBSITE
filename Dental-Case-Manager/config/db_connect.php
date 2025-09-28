<?php
/**
 * DB CONNECT (PDO)
 * ----------------------------
 * Uses .env credentials for secure DB connection
 */

require_once __DIR__ . '/env_loader.php';

try {
    // Fetch credentials from .env
    $host = env('DB_HOST', 'localhost');
    $name = env('DB_NAME', 'dental_case_manager');
    $user = env('DB_USER', 'root');
    $pass = env('DB_PASS', '');
    $charset = 'utf8mb4';

    // Build DSN
    $dsn = "mysql:host={$host};dbname={$name};charset={$charset}";

    // PDO options
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw exceptions on errors
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch associative arrays
        PDO::ATTR_EMULATE_PREPARES   => false,                  // Use native prepared statements
    ];

    // Create PDO instance
    $pdo = new PDO($dsn, $user, $pass, $options);

} catch (PDOException $e) {
    // Graceful failure
    error_log("❌ Database Connection Failed: " . $e->getMessage());
    die("<h3 style='color:red;text-align:center;'>Database connection failed.<br>Please contact admin.</h3>");
}
?>
