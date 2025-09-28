<?php
/**
 * VERIFY.PHP – Secure Prescription Verification Portal
 * ----------------------------------------------------
 * Validates prescription authenticity using HMAC signature
 * Example: https://nobledentalnallagandla.in/verify.php?rx=123&sig=abc123
 */

require_once __DIR__ . '/config/db_connect.php';
require_once __DIR__ . '/core/functions.php';

// ----------------------------
// Input parameters
// ----------------------------
$rx_id = $_GET['rx'] ?? null;
$sig   = $_GET['sig'] ?? null;

if (!$rx_id || !$sig) {
  die("<h3 style='color:red;text-align:center;'>❌ Invalid or incomplete verification link.</h3>");
}

// ----------------------------
// Fetch Prescription Info
// ----------------------------
$stmt = $pdo->prepare("
  SELECT pr.prescription_id, pr.patient_id, pr.created_at, pr.medications,
         p.full_name AS patient_name, p.gender, p.dob,
         u.full_name AS doctor_name
  FROM prescriptions pr
  JOIN patients p ON pr.patient_id = p.patient_id
  JOIN users u ON pr.doctor_id = u.user_id
  WHERE pr.prescription_id = ?
");
$stmt->execute([$rx_id]);
$rx = $stmt->fetch();

if (!$rx) {
  die("<h3 style='color:red;text-align:center;'>❌ Prescription not found.</h3>");
}

// ----------------------------
// Recompute Expected Signature
// ----------------------------
$secret = "NDCaseManager2025"; // 🔑 Move to .env later
$expected = hash_hmac('sha256', $rx['prescription_id'] . $rx['patient_id'] . date('Y-m-d', strtotime($rx['created_at'])), $secret);

$isValid = hash_equals($expected, $sig);

// ----------------------------
// Output UI
// ----------------------------
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Prescription Verification | Noble Dental Care</title>
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<style>
body {
  background:#f8fafc;
  font-family:'Manrope', sans-serif;
  display:flex; align-items:center; justify-content:center;
  min-height:100vh;
}
.card {
  max-width:600px; background:white; border-radius:10px;
  padding:30px; box-shadow:0 5px 15px rgba(0,0,0,0.1);
}
h2 { color:#12B2A0; font-weight:700; }
.status {
  font-size:1.1rem; font-weight:bold; padding:10px 15px; border-radius:6px;
  display:inline-block; margin-bottom:15px;
}
.valid { background:#12B2A0; color:white; }
.invalid { background:#ef4444; color:white; }
table { width:100%; font-size:0.95rem; }
th { text-align:left; color:#475569; padding-top:8px; }
td { color:#0f172a; padding-bottom:6px; }
footer { font-size:0.8rem; color:#64748b; text-align:center; margin-top:20px; }
</style>
</head>
<body>

<div class="card">
  <h2 class="text-center mb-3">Noble Dental Care</h2>
  <h5 class="text-center text-muted mb-4">Prescription Verification Portal</h5>

  <?php if ($isValid): ?>
    <div class="status valid">✔ Valid Prescription</div>
  <?php else: ?>
    <div class="status invalid">❌ Tampered / Invalid</div>
  <?php endif; ?>

  <table>
    <tr><th>Prescription ID:</th><td>#<?= $rx['prescription_id'] ?></td></tr>
    <tr><th>Patient:</th><td><?= sanitize($rx['patient_name']) ?> (<?= $rx['gender'] ?>)</td></tr>
    <tr><th>DOB:</th><td><?= date('d M Y', strtotime($rx['dob'])) ?></td></tr>
    <tr><th>Doctor:</th><td><?= sanitize($rx['doctor_name']) ?></td></tr>
    <tr><th>Date:</th><td><?= date('d M Y, H:i', strtotime($rx['created_at'])) ?></td></tr>
  </table>

  <h6 class="mt-4">Medications:</h6>
  <p><?= nl2br(sanitize($rx['medications'])) ?></p>

  <footer>
    Verified on <?= date('d M Y, H:i:s') ?><br>
    <?= $isValid ? 'This prescription is authentic.' : 'Verification failed. Please contact clinic.' ?>
  </footer>
</div>

</body>
</html>
