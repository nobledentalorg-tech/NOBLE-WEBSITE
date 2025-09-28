<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$student = sanitize($_GET['name'] ?? '');
$from = sanitize($_GET['from'] ?? date('Y-m-d'));
$to = sanitize($_GET['to'] ?? date('Y-m-d'));
?>
<div class="p-4 border rounded">
  <h3 class="text-center mb-3">SCHOOL LEAVE CERTIFICATE</h3>
  <p>This is to certify that <b><?= $student ?: '________________' ?></b>
  was under dental treatment at <b>Noble Dental Care</b> from
  <b><?= date('d M Y', strtotime($from)) ?></b> to
  <b><?= date('d M Y', strtotime($to)) ?></b>.</p>

  <p>The student may resume regular classes from the next working day.</p>

  <p class="mt-4">Dentist’s Signature: _________________________</p>
  <p>Date: <?= date('d M Y') ?></p>
</div>
