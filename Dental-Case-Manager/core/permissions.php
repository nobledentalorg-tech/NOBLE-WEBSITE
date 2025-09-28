<?php
/**
 * Role-Based Access Control
 * -------------------------
 * Denies access if role not allowed.
 */

require_once __DIR__ . '/auth.php';

function allowRoles(array $allowedRoles) {
    if (!isset($_SESSION['role']) || !in_array($_SESSION['role'], $allowedRoles)) {
        http_response_code(403);
        die("<h3>403 - Access Denied</h3>");
    }
}
?>
