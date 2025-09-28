<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$patient = sanitize($_GET['name'] ?? '');
$procedure = sanitize($_GET['procedure'] ?? '');
$date = date('d M Y');
?>
<div class="p-4 border rounded">
  <h3 class="text-center mb-3">PROCEDURE CERTIFICATE</h3>
  <p>This is to certify that <b><?= $patient ?: '________________' ?></b> has undergone
  the dental procedure <b><?= $procedure ?: '________________' ?></b> on <b><?= $date ?></b>
  at <b>Noble Dental Care</b>.</p>

  <p>The treatment was performed under aseptic conditions and the patient
  is advised appropriate post-operative care.</p>

  <p class="mt-4">Dentist’s Signature: _________________________</p>
  <p>Date: <?= $date ?></p>
</div>
