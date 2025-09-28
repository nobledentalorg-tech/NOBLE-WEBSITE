<?php
/**
 * PRINT PRESCRIPTION
 * -------------------------------------------------------
 * Generates a printable / downloadable prescription PDF
 * for Noble Dental Care – with clinic branding and signature
 */

require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

require_once '../../vendor/autoload.php'; // if you use composer (dompdf/mpdf)
use Dompdf\Dompdf;

// ----------------------------
// Input Handling
// ----------------------------
$patient_id = $_GET['pid'] ?? 0;
$prescription_id = $_GET['id'] ?? 0;

if (!$patient_id || !$prescription_id) {
  die("Invalid request");
}

// ----------------------------
// Fetch Data
// ----------------------------
$stmtP = $pdo->prepare("SELECT * FROM patients WHERE patient_id = ?");
$stmtP->execute([$patient_id]);
$patient = $stmtP->fetch(PDO::FETCH_ASSOC);

$stmtRx = $pdo->prepare("
  SELECT drug_name, dose, frequency, duration, remarks 
  FROM prescriptions_items 
  WHERE prescription_id = ?
");
$stmtRx->execute([$prescription_id]);
$items = $stmtRx->fetchAll(PDO::FETCH_ASSOC);

if (!$patient) die("Patient not found");
if (!$items) die("No prescription data available");

// ----------------------------
// Clinic Info (could come from settings)
// ----------------------------
$clinic = [
  "name" => "Noble Dental Care",
  "address" => "Nallagandla, Hyderabad, Telangana, India",
  "phone" => "+91-XXXXXXXXXX",
  "email" => "contact@nobledentalnallagandla.in",
  "doctor" => $_SESSION['full_name'] ?? "Dr. Dhivakaran",
  "regno" => "TS/DC/2025/XXXX"
];

// ----------------------------
// Build HTML
// ----------------------------
$html = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Prescription - '.$clinic['name'].'</title>
  <style>
    body { font-family: DejaVu Sans, sans-serif; color:#0f172a; }
    .header { text-align:center; border-bottom:2px solid #12B2A0; margin-bottom:10px; }
    .clinic-name { font-size:20px; font-weight:bold; color:#12B2A0; }
    .contact { font-size:12px; color:#475569; }
    table { width:100%; border-collapse:collapse; margin-top:15px; }
    th, td { border:1px solid #ccc; padding:8px; font-size:13px; }
    th { background:#12B2A0; color:#fff; }
    h3 { margin-top:20px; }
    .footer { text-align:center; font-size:11px; color:#475569; margin-top:20px; }
    .sign { text-align:right; margin-top:40px; }
  </style>
</head>
<body>

<div class="header">
  <div class="clinic-name">'.$clinic['name'].'</div>
  <div class="contact">'.$clinic['address'].'<br>
  Phone: '.$clinic['phone'].' | Email: '.$clinic['email'].'</div>
</div>

<h3>Patient Details</h3>
<table>
  <tr><td><strong>Name:</strong> '.sanitize($patient['full_name']).'</td>
      <td><strong>Gender:</strong> '.$patient['gender'].'</td>
      <td><strong>Age:</strong> '.(date('Y')-date('Y',strtotime($patient['dob']))).'</td></tr>
  <tr><td colspan="3"><strong>Address:</strong> '.sanitize($patient['address']).'</td></tr>
</table>

<h3>Prescription</h3>
<table>
  <thead><tr>
    <th>#</th>
    <th>Drug</th>
    <th>Dose</th>
    <th>Frequency</th>
    <th>Duration</th>
    <th>Remarks</th>
  </tr></thead>
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

$html .= '
  </tbody>
</table>

<div class="sign">
  <strong>'.$clinic['doctor'].'</strong><br>
  Reg No: '.$clinic['regno'].'<br>
  <em>Signature</em>
</div>

<div class="footer">
  This prescription is computer-generated and valid only for the mentioned patient.<br>
  Always follow dosage instructions and precautions as advised by your dentist.
</div>

</body>
</html>
';

// ----------------------------
// Generate PDF (Dompdf)
// ----------------------------
$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

// Stream to browser
$filename = "Prescription_" . preg_replace('/\s+/', '_', $patient['full_name']) . ".pdf";
$dompdf->stream($filename, ["Attachment" => false]); // open in browser
exit;
