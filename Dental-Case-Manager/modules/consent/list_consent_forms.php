<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$stmt = $pdo->query("
  SELECT c.case_id, p.full_name, cf.form_name, cf.file_path, cf.signed, cf.created_at
  FROM consent_forms cf
  JOIN cases c ON cf.case_id = c.case_id
  JOIN patients p ON c.patient_id = p.patient_id
  ORDER BY cf.created_at DESC
");
$forms = $stmt->fetchAll();
?>

<h3 class="p-3">Consent Forms</h3>
<table class="table table-bordered">
  <thead>
    <tr><th>Patient</th><th>Case</th><th>Form Name</th><th>Signed</th><th>Date</th><th>File</th></tr>
  </thead>
  <tbody>
    <?php foreach($forms as $f): ?>
    <tr>
      <td><?= sanitize($f['full_name']) ?></td>
      <td>#<?= $f['case_id'] ?></td>
      <td><?= sanitize($f['form_name']) ?></td>
      <td><?= $f['signed'] ? '✅' : '❌' ?></td>
      <td><?= formatDateTime($f['created_at']) ?></td>
      <td>
        <?php if($f['file_path']): ?>
          <a href="../../assets/uploads/consent_forms/<?= $f['file_path'] ?>" target="_blank">View</a>
        <?php else: ?> - <?php endif; ?>
      </td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>
