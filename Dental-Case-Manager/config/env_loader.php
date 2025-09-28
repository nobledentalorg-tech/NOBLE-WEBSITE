<?php
/**
 * Simple .env Loader
 * ------------------
 * Parses .env key=value pairs into $env array.
 */

$env = [];

$envFile = __DIR__ . '/../.env';

if (!file_exists($envFile)) {
    die("Environment file (.env) not found.");
}

foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    // Skip comments
    if (strpos(trim($line), '#') === 0) continue;

    // Parse KEY=VALUE pairs
    [$key, $value] = array_map('trim', explode('=', $line, 2));

    // Remove quotes around values
    $value = trim($value, "\"'");

    $env[$key] = $value;
}
?>

