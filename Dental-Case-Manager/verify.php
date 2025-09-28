<?php
require_once __DIR__ . '/config/db_connect.php';
require_once __DIR__ . '/core/functions.php';

// ==================================
// VERIFY.PHP – Prescription Validator
// Publicly accessible via QR link
// Example: verify.php?rx=123&sig=HASH
// ==================================

$rx_id = $_GET['rx'] ?? null;
$sig   = $_GET['sig'] ?? null;

if (!$rx_id || !$sig) {
    die("<h3 style='color:red;text-align:center;'>❌ Invalid or incomplete verification link.</h3>");
}

// Fetch prescription
$stmt = $pdo->prepare("
    SELECT pr.*, p.full_name, p.dob, p.gender, d.full_name AS doctor_name 
    FROM prescriptions pr
    JOIN patients p ON pr.patient_id = p.patient_id
    JOIN users d ON pr.doctor_id = d.user_id
    WHERE pr.prescription_id = ?
");
$stmt->execute([$rx_id]);
$rx = $stmt->fetch();

if (!$rx) {
    die("<h3 style='color:red;text-align:center;'>❌ Prescription not found.</h3>");
}

// Generate expected signature
$secret = "NDCaseManager2025"; // 🔑 change to env secret
$expected = hash_hmac('sha256', $rx['prescription_id'].$rx['patient_id'].$rx['created_at'], $secret);

// Validate signature
$isValid = hash_equals($expected, $sig);

// ==================================
// HTML OUTPUT
// ==================================
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Prescription Verification | Noble Dental Care</title>
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <style>
    body { background:#f8fafc; font-family: 'Manrope', sans-serif; }
    .verify-card {
      max-width:600px; margin:50px auto; padding:20px;
      border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);
      background:white;
    }
    .status {
      font-size:1.2rem; font-weight:bold; padding:10px 15px; border-radius:6px;
      display:inline-block; margin-bottom:15px;
    }
    .valid { background:#12B2A0; color:white; }
    .invalid { background:#ef4444; color:white; }
  </style>
</head>
<body>

<div class="verify-card">
  <h3 class="text-center mb-3">Noble Dental Care</h3>
  <h5 class="text-center text-muted">Prescription Verification Portal</h5>
  <hr>

  <?php if ($isValid): ?>
    <div class="status valid">✔ Valid Prescription</div>
  <?php else: ?>
    <div class="status invalid">❌ Tampered / Invalid</div>
  <?php endif; ?>

  <p><strong>Prescription ID:</strong> #<?= $rx['prescription_id'] ?></p>
  <p><strong>Patient:</strong> <?= sanitize($rx['full_name']) ?> (<?= $rx['gender'] ?>, DOB: <?= $rx['dob'] ?>)</p>
  <p><strong>Doctor:</strong> <?= sanitize($rx['doctor_name']) ?></p>
  <p><strong>Date:</strong> <?= date("d M Y, H:i", strtotime($rx['created_at'])) ?></p>

  <h6 class="mt-3">Medications:</h6>
  <p><?= nl2br(sanitize($rx['medications'])) ?></p>

  <footer class="text-muted small mt-4">
    Verified on <?= date("d M Y H:i:s") ?>
  </footer>
</div>

</body>
</html>
