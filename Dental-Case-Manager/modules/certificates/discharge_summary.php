<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$patient = sanitize($_GET['name'] ?? '');
$treatment = sanitize($_GET['treatment'] ?? '');
$advice = sanitize($_GET['advice'] ?? '');
$date = date('d M Y');
?>
<div class="p-4 border rounded">
  <h3 class="text-center mb-3">DISCHARGE SUMMARY</h3>
  <p><b>Patient Name:</b> <?= $patient ?: '________________' ?></p>
  <p><b>Treatment Done:</b> <?= $treatment ?: '________________' ?></p>
  <p><b>Date:</b> <?= $date ?></p>

  <h5 class="mt-3">Post-Operative Advice:</h5>
  <p><?= $advice ?: 'Maintain oral hygiene, avoid hard foods for 24 hours, and take prescribed medicines.' ?></p>

  <h5 class="mt-3">Follow-Up:</h5>
  <p>Review visit advised after 3–5 days or earlier if discomfort persists.</p>

  <p class="mt-4">Dentist’s Signature: _________________________</p>
</div>
