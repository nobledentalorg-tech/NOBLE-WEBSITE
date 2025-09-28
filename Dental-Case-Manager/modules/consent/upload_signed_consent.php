<?php
require_once '../../core/uploader.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
require_once '../../config/constants.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $form_name = sanitize($_POST['form_name']);

    $upload = uploadFile($_FILES['file'], CONSENT_FORMS);
    if (isset($upload['error'])) {
        alert($upload['error'], "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO consent_forms (case_id, form_name, file_path, signed)
                               VALUES (?,?,?,1)");
        $stmt->execute([$case_id, $form_name, $upload['filename']]);
        logAction($_SESSION['user_id'], "Consent Uploaded", "Case ID: $case_id");
        alert("Signed consent uploaded successfully!", "success");
    }
}
?>

<form method="POST" enctype="multipart/form-data" class="p-3">
  <h3>Upload Signed Consent</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="form_name" placeholder="Form Name" class="form-control mb-2" required>
  <input type="file" name="file" class="form-control mb-2" required>
  <button class="btn btn-success">Upload</button>
</form>
