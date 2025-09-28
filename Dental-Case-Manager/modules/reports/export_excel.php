<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=clinic_report_" . date('Ymd') . ".xls");

$stmt = $pdo->query("
  SELECT p.full_name AS Patient, c.case_id AS CaseNo, c.diagnosis, c.treatment_plan, c.status, c.created_at
  FROM cases c
  JOIN patients p ON c.patient_id = p.patient_id
  ORDER BY c.created_at DESC
");
$data = $stmt->fetchAll();

echo "<table border='1'>";
echo "<tr><th>Case No</th><th>Patient</th><th>Diagnosis</th><th>Treatment</th><th>Status</th><th>Date</th></tr>";
foreach($data as $row){
  echo "<tr>
          <td>{$row['CaseNo']}</td>
          <td>{$row['Patient']}</td>
          <td>{$row['diagnosis']}</td>
          <td>{$row['treatment_plan']}</td>
          <td>{$row['status']}</td>
          <td>{$row['created_at']}</td>
        </tr>";
}
echo "</table>";
exit;
