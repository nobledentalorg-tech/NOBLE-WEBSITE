<?php
/**
 * Secure Upload Handler
 * ---------------------
 * Validates image/pdf uploads and stores in safe paths.
 */

require_once __DIR__ . '/../config/constants.php';

function safeUpload($file, $targetDir, $allowedExt = ['jpg','jpeg','png','pdf','webp']) {
    if (!isset($file) || $file['error'] !== UPLOAD_ERR_OK) {
        return ['status' => false, 'error' => 'File upload error'];
    }

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $allowedExt)) {
        return ['status' => false, 'error' => 'Invalid file type'];
    }

    $newName = uniqid('file_', true) . '.' . $ext;
    $targetPath = rtrim($targetDir, '/') . '/' . $newName;

    if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
        return ['status' => false, 'error' => 'Failed to move file'];
    }

    return ['status' => true, 'path' => $targetPath, 'name' => $newName];
}
?>
