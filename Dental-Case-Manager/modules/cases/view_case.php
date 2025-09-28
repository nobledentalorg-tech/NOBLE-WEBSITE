<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['id'] ?? 0);

$stmt = $pdo->prepare("
    SELECT c.*, p.full_name 
    FROM cases c 
    JOIN patients p ON c.patient_id = p.patient_id 
    WHERE case_id=?");
$stmt->execute([$case_id]);
$case = $stmt->fetch();

if (!$case) {
    alert("Case not found.", "danger");
    exit;
}
?>

<div class="p-3">
  <h3><?= sanitize($case['case_type']) ?> (<?= sanitize($case['status']) ?>)</h3>
  <p><strong>Patient:</strong> <?= sanitize($case['full_name']) ?></p>
  <p><strong>Diagnosis:</strong> <?= sanitize($case['diagnosis']) ?></p>
  <p><strong>Created On:</strong> <?= formatDateTime($case['created_at']) ?></p>
</div>
