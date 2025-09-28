<?php
require_once '../../core/uploader.php';
require_once '../../core/auth.php';
require_once '../../config/constants.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $result = uploadFile($_FILES['file'], XRAY_REPORTS);

    if (isset($result['error'])) {
        alert($result['error'], "danger");
    } else {
        alert("File uploaded: " . $result['filename'], "success");
    }
}
?>

<form method="POST" enctype="multipart/form-data" class="p-3">
  <h3>Upload Case File</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="file" name="file" class="form-control mb-2" required>
  <button class="btn btn-primary">Upload</button>
</form>
