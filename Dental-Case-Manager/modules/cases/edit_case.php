<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

$case_id = intval($_GET['id'] ?? 0);

$stmt = $pdo->prepare("SELECT * FROM cases WHERE case_id=?");
$stmt->execute([$case_id]);
$case = $stmt->fetch();

if (!$case) {
    alert("Case not found.", "danger");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_type  = sanitize($_POST['case_type']);
    $diagnosis  = sanitize($_POST['diagnosis']);
    $status     = sanitize($_POST['status']);

    $stmt = $pdo->prepare("UPDATE cases SET case_type=?, diagnosis=?, status=? WHERE case_id=?");
    $stmt->execute([$case_type, $diagnosis, $status, $case_id]);

    logAction($_SESSION['user_id'], "Edit Case", "Case ID: $case_id");
    alert("Case updated successfully!", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Edit Case</h3>
  <input type="text" name="case_type" value="<?= sanitize($case['case_type']) ?>" class="form-control mb-2">
  <textarea name="diagnosis" class="form-control mb-2"><?= sanitize($case['diagnosis']) ?></textarea>
  <select name="status" class="form-control mb-2">
    <option <?= $case['status']=='Open'?'selected':'' ?>>Open</option>
    <option <?= $case['status']=='Ongoing'?'selected':'' ?>>Ongoing</option>
    <option <?= $case['status']=='Closed'?'selected':'' ?>>Closed</option>
  </select>
  <button class="btn btn-success">Update Case</button>
</form>
