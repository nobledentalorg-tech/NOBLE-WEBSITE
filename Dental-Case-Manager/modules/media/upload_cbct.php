<?php
require_once '../../core/uploader.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../config/constants.php';
require_once '../../core/audit_logger.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);

    $upload = uploadFile($_FILES['cbct'], CBCT_SCANS);
    if (isset($upload['error'])) {
        alert($upload['error'], "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO media_files (case_id, file_name, category)
                               VALUES (?,?,?)");
        $stmt->execute([$case_id, $upload['filename'], 'CBCT']);

        logAction($_SESSION['user_id'], "Upload CBCT", "Case ID: $case_id");
        alert("CBCT scan uploaded successfully!", "success");
    }
}
?>

<form method="POST" enctype="multipart/form-data" class="p-3">
  <h3>Upload CBCT Scan</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="file" name="cbct" class="form-control mb-2" accept=".jpg,.jpeg,.png,.dcm" required>
  <button class="btn btn-info">Upload</button>
</form>
