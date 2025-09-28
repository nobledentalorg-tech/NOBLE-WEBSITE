<?php
/**
 * Timezone Config
 * ----------------
 * Sets default timezone from .env or fallback.
 */

require_once __DIR__ . '/env_loader.php';

$timezone = $env['APP_TIMEZONE'] ?? 'Asia/Kolkata';
date_default_timezone_set($timezone);

// Optional: use in logs or timestamps
function now() {
    return date('Y-m-d H:i:s');
}
?>

