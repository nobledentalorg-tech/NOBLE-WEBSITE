<?php
/**
 * PRINT PRESCRIPTION – DIGITAL SIGNATURE EDITION (SECURE QR)
 * ------------------------------------------------------------
 * Branded PDF with logo, watermark, e-signature, and QR verification link
 */

require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

require_once '../../vendor/autoload.php';
use Dompdf\Dompdf;
use Dompdf\Options;

// ----------------------------
// Inputs
// ----------------------------
$pid  = $_GET['pid'] ?? 0;
$rxid = $_GET['id'] ?? 0;
if (!$pid || !$rxid) die("Invalid request.");

// ----------------------------
// Data Fetch
// ----------------------------
$stmtP = $pdo->prepare("SELECT * FROM patients WHERE patient_id=?");
$stmtP->execute([$pid]);
$patient = $stmtP->fetch(PDO::FETCH_ASSOC);

$stmtRx = $pdo->prepare("
  SELECT drug_name, dose, frequency, duration, remarks
  FROM prescriptions_items WHERE prescription_id=?
");
$stmtRx->execute([$rxid]);
$items = $stmtRx->fetchAll(PDO::FETCH_ASSOC);

if (!$patient) die("Patient not found.");
if (!$items)   die("No drugs in prescription.");

// ----------------------------
// Clinic / Branding
// ----------------------------
$clinic = [
  "name"       => "Noble Dental Care",
  "address"    => "Nallagandla, Hyderabad, Telangana, India",
  "phone"      => "+91-XXXXXXXXXX",
  "email"      => "contact@nobledentalnallagandla.in",
  "doctor"     => $_SESSION['full_name'] ?? "Dr. Dhivakaran",
  "regno"      => "TS/DC/2025/XXXX",
  "logo"       => "https://nobledentalnallagandla.in/assets/images/logo-footer.webp",
  "signature"  => "https://nobledentalnallagandla.in/assets/images/digital-signature.webp"
];

// ----------------------------
// Secure QR Verification URL
// ----------------------------
$secret = "NDCaseManager2025"; // 🔑 move to .env later
// Build HMAC signature to prevent tampering
$sig = hash_hmac('sha256', $rxid . $patient['patient_id'] . date('Y-m-d'), $secret);

// Final verify URL
$verifyUrl = "https://nobledentalnallagandla.in/verify.php?rx=" . urlencode($rxid) . "&sig=" . urlencode($sig);

// Generate inline QR (Google Charts API)
$qr = "https://chart.googleapis.com/chart?chs=120x120&cht=qr&chl=" . urlencode($verifyUrl);

// ----------------------------
// Build HTML for PDF
// ----------------------------
$html = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Prescription – '.$clinic['name'].'</title>
<style>
@page { margin: 30px; }
body {
  font-family: DejaVu Sans, sans-serif;
  color: #0f172a;
  background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'600\'%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23a3a3a310\' font-size=\'60\' font-family=\'sans-serif\'%3ENoble Dental Care%3C/text%3E%3C/svg%3E") center center no-repeat;
  background-size: 400px;
}
.header { text-align:center; border-bottom:2px solid #12B2A0; padding-bottom:6px; margin-bottom:12px; }
.header img { height:60px; margin-bottom:4px; }
.clinic-name { font-size:22px; font-weight:700; color:#12B2A0; }
.contact { font-size:12px; color:#475569; }
table { width:100%; border-collapse:collapse; margin-top:12px; }
th,td { border:1px solid #ccc; padding:6px 8px; font-size:13px; }
th { background:#12B2A0; color:#fff; }
.section-title { margin-top:16px; font-size:15px; color:#0f172a; border-bottom:1px solid #12B2A0; }
.footer { text-align:center; font-size:11px; color:#475569; margin-top:20px; }
.sign-block { margin-top:40px; text-align:right; }
.sign-block img { height:50px; display:block; margin-left:auto; }
.qr-block { position:absolute; bottom:40px; left:40px; text-align:center; font-size:10px; }
</style>
</head>
<body>

<div class="header">
  <img src="'.$clinic['logo'].'" alt="Clinic Logo">
  <div class="clinic-name">'.$clinic['name'].'</div>
  <div class="contact">'.$clinic['address'].'<br>
  Phone: '.$clinic['phone'].' | '.$clinic['email'].'</div>
</div>

<h3 class="section-title">Patient Details</h3>
<table>
<tr>
  <td><strong>Name:</strong> '.sanitize($patient['full_name']).'</td>
  <td><strong>Gender:</strong> '.$patient['gender'].'</td>
  <td><strong>Age:</strong> '.(date('Y') - date('Y', strtotime($patient['dob']))).'</td>
</tr>
<tr><td colspan="3"><strong>Address:</strong> '.sanitize($patient['address']).'</td></tr>
</table>

<h3 class="section-title">Prescription</h3>
<table>
<thead>
<tr>
<th>#</th><th>Drug</th><th>Dose</th><th>Frequency</th><th>Duration</th><th>Remarks</th>
</tr>
</thead>
<tbody>';
$i = 1;
foreach ($items as $r) {
  $html .= "<tr>
    <td>{$i}</td>
    <td>".sanitize($r['drug_name'])."</td>
    <td>".sanitize($r['dose'])."</td>
    <td>".sanitize($r['frequency'])."</td>
    <td>".sanitize($r['duration'])."</td>
    <td>".sanitize($r['remarks'])."</td>
  </tr>";
  $i++;
}
$html .= '</tbody></table>

<div class="sign-block">
  <img src="'.$clinic['signature'].'" alt="Digital Signature"><br>
  <strong>'.$clinic['doctor'].'</strong><br>
  Reg No: '.$clinic['regno'].'<br>
  <em>Digitally Signed</em>
</div>

<div class="qr-block">
  <img src="'.$qr.'" alt="QR Code"><br>
  Scan to verify
</div>

<div class="footer">
  This is a computer-generated digital prescription for the mentioned patient only.<br>
  Verify authenticity at <strong>'.$clinic['name'].'</strong>.<br>
  Follow all dosage &amp; precautions as advised.
</div>

</body></html>';

// ----------------------------
// PDF Render
// ----------------------------
$options = new Options();
$options->set('isRemoteEnabled', true);

$dompdf = new Dompdf($options);
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

$filename = "Prescription_" . preg_replace('/\s+/', '_', $patient['full_name']) . ".pdf";
$dompdf->stream($filename, ["Attachment" => false]);
exit;
