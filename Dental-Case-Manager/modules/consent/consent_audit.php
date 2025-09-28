<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Doctor']);

$stmt = $pdo->query("
  SELECT cf.form_name, cf.file_path, cf.signed, cf.created_at,
         p.full_name, c.case_id
  FROM consent_forms cf
  JOIN cases c ON cf.case_id = c.case_id
  JOIN patients p ON c.patient_id = p.patient_id
  ORDER BY cf.created_at DESC
");
$records = $stmt->fetchAll();
?>

<h3 class="p-3">Consent Audit Trail</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>Patient</th><th>Case</th><th>Form</th><th>Signed</th><th>Timestamp</th></tr>
  </thead>
  <tbody>
    <?php foreach($records as $r): ?>
      <tr>
        <td><?= sanitize($r['full_name']) ?></td>
        <td>#<?= $r['case_id'] ?></td>
        <td><?= sanitize($r['form_name']) ?></td>
        <td><?= $r['signed'] ? '✅' : '❌' ?></td>
        <td><?= formatDateTime($r['created_at']) ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
