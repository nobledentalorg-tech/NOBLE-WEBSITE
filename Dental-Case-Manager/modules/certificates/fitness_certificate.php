<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$patient = sanitize($_GET['name'] ?? '');
$date = date('d M Y');
?>
<div class="p-4 border rounded">
  <h3 class="text-center mb-3">FITNESS CERTIFICATE</h3>
  <p>This is to certify that <b><?= $patient ?: '________________' ?></b> has been examined
  at <b>Noble Dental Care</b> and is found <b>fit to resume normal activities</b>
  after completion of dental treatment.</p>

  <p>The patient is free from active oral infection or conditions interfering with
  regular duties as of <b><?= $date ?></b>.</p>

  <p class="mt-4">Dentist’s Signature: _________________________</p>
  <p>Date: <?= $date ?></p>
</div>
