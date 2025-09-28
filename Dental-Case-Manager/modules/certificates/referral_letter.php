<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$patient = sanitize($_GET['name'] ?? '');
$reason  = sanitize($_GET['reason'] ?? '');
$refer_to = sanitize($_GET['doctor'] ?? 'Specialist');
$date = date('d M Y');
?>
<div class="p-4 border rounded">
  <h3 class="text-center mb-3">REFERRAL LETTER</h3>
  <p>Date: <?= $date ?></p>

  <p>To,<br><b>Dr. <?= $refer_to ?></b><br>
  (Specialist)</p>

  <p>Dear Doctor,</p>
  <p>This is to refer my patient <b><?= $patient ?: '________________' ?></b> for
  evaluation and management of <b><?= $reason ?: '________________' ?></b>.</p>

  <p>Please find attached relevant case history and radiographs.</p>

  <p>Thank you for your kind attention.</p>

  <p class="mt-4">Sincerely,<br><b>Dr. Dhivakaran</b><br>Noble Dental Care</p>
</div>
