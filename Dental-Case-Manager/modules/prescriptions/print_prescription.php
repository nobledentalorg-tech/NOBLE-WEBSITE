<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("
    SELECT p.full_name, pr.drug_name, pr.dose, pr.duration, pr.remarks
    FROM prescriptions pr
    JOIN cases c ON pr.case_id = c.case_id
    JOIN patients p ON c.patient_id = p.patient_id
    WHERE pr.case_id = ?");
$stmt->execute([$case_id]);
$data = $stmt->fetchAll();

if (!$data) {
    alert("No prescriptions found.", "danger");
    exit;
}

header('Content-Type: text/plain');
header("Content-Disposition: attachment; filename=Prescription_Case{$case_id}.txt");

$patient = $data[0]['full_name'];
echo "PRESCRIPTION SUMMARY\n";
echo "====================\n";
echo "Patient: $patient\nCase ID: $case_id\n\n";

foreach($data as $d) {
  echo "- {$d['drug_name']} — {$d['dose']} — {$d['duration']}";
  if ($d['remarks']) echo " ({$d['remarks']})";
  echo "\n";
}
exit;
?>
