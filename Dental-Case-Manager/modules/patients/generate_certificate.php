<?php
require_once '../../core/auth.php';
require_once '../../config/timezone.php';

checkLogin();

$patient_name = $_GET['name'] ?? 'Unknown';
$date = now();

header('Content-Type: text/plain');
header("Content-Disposition: attachment; filename=certificate.txt");

echo "FITNESS CERTIFICATE\n";
echo "===================\n";
echo "This is to certify that $patient_name was examined and is fit for dental treatment.\n";
echo "\nIssued on: $date\n\n";
echo "Signature:\n";
exit;
?>
