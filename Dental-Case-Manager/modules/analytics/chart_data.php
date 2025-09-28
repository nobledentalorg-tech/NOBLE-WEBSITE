<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

// Helper: get last 6 months
$months = [];
for ($i = 5; $i >= 0; $i--) {
    $months[] = date('M', strtotime("-$i months"));
}
$month_nums = [];
for ($i = 5; $i >= 0; $i--) {
    $month_nums[] = date('m', strtotime("-$i months"));
}

// =============== Revenue Data ===============
$revenue = [];
foreach ($month_nums as $m) {
    $stmt = $pdo->prepare("
        SELECT SUM(amount) AS total 
        FROM payments 
        WHERE MONTH(payment_date) = ? 
        AND YEAR(payment_date) = YEAR(CURDATE())
    ");
    $stmt->execute([$m]);
    $revenue[] = (float)($stmt->fetchColumn() ?: 0);
}

// =============== Patient Data ===============
$patients = [];
foreach ($month_nums as $m) {
    $stmt = $pdo->prepare("
        SELECT COUNT(*) 
        FROM patients 
        WHERE MONTH(created_at) = ? 
        AND YEAR(created_at) = YEAR(CURDATE())
    ");
    $stmt->execute([$m]);
    $patients[] = (int)$stmt->fetchColumn();
}

// =============== Output JSON ===============
header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'months'   => $months,
    'revenue'  => $revenue,
    'patients' => $patients
], JSON_PRETTY_PRINT);
