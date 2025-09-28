<?php
/**
 * JSON / AJAX Response Wrapper
 * ----------------------------
 * Returns standardized JSON for API endpoints.
 */

function jsonResponse($success = true, $message = '', $data = []) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data'    => $data
    ]);
    exit;
}
?>
