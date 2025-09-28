<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("
  SELECT c.*, p.full_name, p.gender, p.dob
  FROM cases c
  JOIN patients p ON c.patient_id = p.patient_id
  WHERE c.case_id=?
");
$stmt->execute([$case_id]);
$case = $stmt->fetch();

if (!$case) { alert("Invalid Case ID", "danger"); exit; }
?>

<h3 class="p-3">Case Summary — #<?= $case_id ?></h3>
<div class="p-3 border rounded">
  <p><strong>Patient:</strong> <?= sanitize($case['full_name']) ?> (<?= $case['gender'] ?>)</p>
  <p><strong>Diagnosis:</strong> <?= sanitize($case['diagnosis']) ?></p>
  <p><strong>Treatment:</strong> <?= sanitize($case['treatment_plan']) ?></p>
  <p><strong>Status:</strong> <?= sanitize($case['status']) ?></p>
  <p><strong>Created:</strong> <?= formatDateTime($case['created_at']) ?></p>
</div>
