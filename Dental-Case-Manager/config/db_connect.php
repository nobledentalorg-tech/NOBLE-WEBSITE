
<?php
/**
 * Database Connection (PDO)
 * --------------------------
 * Securely connects to MySQL using credentials
 * from the .env file. Throws exception if connection fails.
 */

require_once __DIR__ . '/env_loader.php';

try {
    $dsn = "mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']};charset=utf8mb4";

    $pdo = new PDO($dsn, $env['DB_USER'], $env['DB_PASS'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,   // show detailed errors in dev
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);

} catch (PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    die("Database Connection Failed. Please contact the administrator.");
}
?>
