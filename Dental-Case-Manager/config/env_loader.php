<?php
/**
 * ENV LOADER
 * -------------------------
 * Loads environment variables from `.env`
 * and stores them in global $env array.
 */

$env = [];

// Determine .env path relative to this file
$envPath = dirname(__DIR__) . '/.env';

// Check if file exists
if (file_exists($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        // Skip comments (#)
        if (strpos(trim($line), '#') === 0) continue;

        // Split key=value
        [$name, $value] = array_pad(explode('=', $line, 2), 2, null);

        if ($name && $value !== null) {
            // Remove quotes if any
            $value = trim($value, "\"' \t\n\r\0\x0B");
            $env[trim($name)] = $value;

            // Also set for getenv()
            putenv("$name=$value");
        }
    }
} else {
    error_log("⚠️ .env file not found at: $envPath");
}

// ----------------------------
// Convenience getters
// ----------------------------
function env(string $key, $default = null) {
    global $env;
    return $env[$key] ?? getenv($key) ?? $default;
}

// ----------------------------
// Example usage:
//   $dbHost = env('DB_HOST', 'localhost');
//   $verifySecret = env('VERIFY_SECRET');
// ----------------------------
?>
