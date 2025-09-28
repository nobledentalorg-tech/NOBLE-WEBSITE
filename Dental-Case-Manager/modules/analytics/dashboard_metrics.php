<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

// Total Patients
$total_patients = $pdo->query("SELECT COUNT(*) FROM patients")->fetchColumn();

// Active Cases
$active_cases = $pdo->query("SELECT COUNT(*) FROM cases WHERE status IN ('Open','Ongoing')")->fetchColumn();

// Monthly Revenue
$month_revenue = $pdo->query("
  SELECT SUM(amount) FROM payments 
  WHERE MONTH(payment_date)=MONTH(CURDATE()) AND YEAR(payment_date)=YEAR(CURDATE())
")->fetchColumn();

// Top Doctor
$top_doc = $pdo->query("
  SELECT u.full_name, SUM(b.amount) as total 
  FROM billing b
  JOIN cases c ON b.case_id=c.case_id
  JOIN users u ON c.doctor_id=u.user_id
  GROUP BY u.user_id ORDER BY total DESC LIMIT 1
")->fetch();

?>
<h3 class="p-3">Dashboard Metrics</h3>
<div class="row p-3">
  <div class="col-md-3">
    <div class="card shadow-sm text-center p-3">
      <h5>Total Patients</h5>
      <h2><?= $total_patients ?></h2>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm text-center p-3">
      <h5>Active Cases</h5>
      <h2><?= $active_cases ?></h2>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm text-center p-3">
      <h5>Monthly Revenue</h5>
      <h2>₹<?= number_format($month_revenue,2) ?></h2>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm text-center p-3">
      <h5>Top Doctor</h5>
      <h6><?= $top_doc['full_name'] ?? 'N/A' ?></h6>
      <small>₹<?= number_format($top_doc['total'] ?? 0,2) ?></small>
    </div>
  </div>
</div>
