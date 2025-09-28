<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

header("Content-Type: application/json; charset=utf-8");

// Build AI dataset with minimal PHI exposure
$data = [];

$stmt = $pdo->query("
  SELECT c.case_id, p.gender, 
         TIMESTAMPDIFF(YEAR, p.dob, CURDATE()) AS age,
         c.diagnosis, c.treatment_plan, c.status,
         b.amount AS cost, b.payment_mode, b.payment_date
  FROM cases c
  JOIN patients p ON c.patient_id=p.patient_id
  LEFT JOIN billing b ON c.case_id=b.case_id
  WHERE c.status <> 'Draft'
");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
  "source" => "Noble Dental Case Manager",
  "generated_at" => date('Y-m-d H:i:s'),
  "record_count" => count($data),
  "data" => $data
], JSON_PRETTY_PRINT);
