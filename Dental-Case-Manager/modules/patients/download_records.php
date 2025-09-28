<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/api_response.php';

checkLogin();

$id = $_GET['id'] ?? 0;

$stmt = $pdo->prepare("SELECT * FROM patients WHERE patient_id=?");
$stmt->execute([$id]);
$patient = $stmt->fetch();

if (!$patient) {
    jsonResponse('error', 'Patient not found.');
}

header('Content-Type: text/plain');
header("Content-Disposition: attachment; filename=Patient_{$id}.txt");

echo "Patient Record\n";
echo "==============\n";
foreach($patient as $k=>$v) {
  echo ucfirst($k).": $v\n";
}
exit;
?>
