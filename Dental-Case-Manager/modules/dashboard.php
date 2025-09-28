<?php
require_once '../config/db_connect.php';
require_once '../core/auth.php';
require_once '../core/functions.php';
checkLogin();

// ----------------------------
// Quick Stats
// ----------------------------
$total_patients = $pdo->query("SELECT COUNT(*) FROM patients")->fetchColumn() ?? 0;
$active_cases   = $pdo->query("SELECT COUNT(*) FROM cases WHERE status IN ('Open','Ongoing')")->fetchColumn() ?? 0;
$today_appts    = $pdo->query("SELECT COUNT(*) FROM appointments WHERE DATE(appointment_date)=CURDATE()")->fetchColumn() ?? 0;
$total_revenue  = $pdo->query("SELECT SUM(amount) FROM payments")->fetchColumn() ?? 0;

// ----------------------------
// Recent Activity
// ----------------------------
$recent_cases = $pdo->query("
  SELECT c.case_id, p.full_name, c.diagnosis, c.status, c.created_at 
  FROM cases c 
  JOIN patients p ON c.patient_id=p.patient_id
  ORDER BY c.created_at DESC LIMIT 5
")->fetchAll();

$upcoming_appointments = $pdo->query("
  SELECT a.appointment_id, p.full_name, a.appointment_date, a.status 
  FROM appointments a
  JOIN patients p ON a.patient_id=p.patient_id
  WHERE a.appointment_date >= CURDATE()
  ORDER BY a.appointment_date ASC LIMIT 5
")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard | Noble Dental Care</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="../assets/css/style.css">

  <!-- JS Dependencies -->
  <script src="../assets/js/jquery.min.js"></script>
  <script src="../assets/js/chart.js"></script>
</head>

<body>
<?php include '../includes/header.php'; ?>
<?php include '../includes/sidebar.php'; ?>

<div class="container-fluid p-4">
  <h2 class="mb-4">Welcome, <?= sanitize($_SESSION['full_name']) ?> 👋</h2>

  <!-- ===== QUICK METRICS ===== -->
  <div class="row text-center">
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm border-0 p-3 bg-light">
        <h6>Total Patients</h6>
        <h2><?= $total_patients ?></h2>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm border-0 p-3 bg-light">
        <h6>Active Cases</h6>
        <h2><?= $active_cases ?></h2>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm border-0 p-3 bg-light">
        <h6>Today’s Appointments</h6>
        <h2><?= $today_appts ?></h2>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm border-0 p-3 bg-light">
        <h6>Total Revenue</h6>
        <h2>₹<?= number_format($total_revenue, 2) ?></h2>
      </div>
    </div>
  </div>

  <!-- ===== CHARTS & ANALYTICS ===== -->
  <div class="row mt-4">
    <div class="col-md-6 mb-3">
      <div class="card shadow-sm p-3">
        <h5>Monthly Revenue Trend</h5>
        <canvas id="revenueChart" height="160"></canvas>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="card shadow-sm p-3">
        <h5>Patient Registrations (Last 6 Months)</h5>
        <canvas id="patientChart" height="160"></canvas>
      </div>
    </div>
  </div>

  <!-- ===== AI SUMMARY ===== -->
  <div class="card shadow-sm p-3 mt-4">
    <h5>AI Predictive Summary (Beta)</h5>
    <form id="aiForm" class="d-flex gap-2 flex-wrap">
      <input type="number" name="age" placeholder="Age" class="form-control w-auto" required>
      <input type="text" name="diagnosis" placeholder="Diagnosis" class="form-control w-auto" required>
      <input type="text" name="treatment" placeholder="Treatment" class="form-control w-auto" required>
      <button class="btn btn-primary">Predict</button>
    </form>
    <div id="aiResult" class="mt-3"></div>
  </div>

  <!-- ===== RECENT CASES & APPOINTMENTS ===== -->
  <div class="row mt-4">
    <div class="col-md-6 mb-3">
      <div class="card shadow-sm p-3">
        <h5>Recent Cases</h5>
        <table class="table table-sm">
          <thead><tr><th>Case ID</th><th>Patient</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            <?php foreach($recent_cases as $c): ?>
              <tr>
                <td>#<?= $c['case_id'] ?></td>
                <td><?= sanitize($c['full_name']) ?></td>
                <td><span class="badge bg-info"><?= $c['status'] ?></span></td>
                <td><?= date('d M', strtotime($c['created_at'])) ?></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <div class="card shadow-sm p-3">
        <h5>Upcoming Appointments</h5>
        <table class="table table-sm">
          <thead><tr><th>ID</th><th>Patient</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            <?php foreach($upcoming_appointments as $a): ?>
              <tr>
                <td>#<?= $a['appointment_id'] ?></td>
                <td><?= sanitize($a['full_name']) ?></td>
                <td><?= date('d M H:i', strtotime($a['appointment_date'])) ?></td>
                <td><span class="badge bg-secondary"><?= $a['status'] ?></span></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ===== LIVE NOTIFICATIONS ===== -->
  <div class="card shadow-sm p-3 mt-4">
    <h5>Notifications</h5>
    <div id="notifyBox">Loading...</div>
  </div>

  <!-- ===== QUICK LINKS ===== -->
  <div class="row mt-4">
    <div class="col-md-3 mb-3">
      <a href="../modules/patients/list_patients.php" class="btn btn-outline-primary w-100">Manage Patients</a>
    </div>
    <div class="col-md-3 mb-3">
      <a href="../modules/cases/list_cases.php" class="btn btn-outline-success w-100">View Cases</a>
    </div>
    <div class="col-md-3 mb-3">
      <a href="../modules/appointments/list_appointments.php" class="btn btn-outline-warning w-100">Appointments</a>
    </div>
    <div class="col-md-3 mb-3">
      <a href="../modules/reports/revenue_report.php" class="btn btn-outline-danger w-100">Reports</a>
    </div>
  </div>
</div>

<?php include '../includes/footer.php'; ?>

<script src="../assets/js/bootstrap.min.js"></script>

<script>
// ================= AI Summary =================
$('#aiForm').on('submit', function(e){
  e.preventDefault();
  $('#aiResult').html('<em>Analyzing...</em>');
  $.post('../modules/analytics/predictive_outcomes.php', $(this).serialize(), function(data){
    $('#aiResult').html(data);
  });
});

// ================= Notifications =================
function loadNotifications(){
  $.get('../modules/chat/notifications.php', function(data){
    $('#notifyBox').html(data || '<em>No new notifications</em>');
  });
}
loadNotifications();
setInterval(loadNotifications, 5000); // every 5 seconds

// ================= Charts =================
document.addEventListener("DOMContentLoaded", () => {
  const months = ['Apr','May','Jun','Jul','Aug','Sep'];
  const revenueData = [54000,62000,59000,66000,70000,75000];
  const patientData = [32,40,38,45,50,55];

  // Revenue Chart
  new Chart(document.getElementById('revenueChart'), {
    type: 'line',
    data: { 
      labels: months,
      datasets: [{
        label: 'Revenue (₹)',
        data: revenueData,
        borderColor: '#12B2A0',
        backgroundColor: 'rgba(18,178,160,0.15)',
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive:true, plugins:{ legend:{display:false} } }
  });

  // Patient Chart
  new Chart(document.getElementById('patientChart'), {
    type: 'bar',
    data: { 
      labels: months,
      datasets: [{
        label: 'New Patients',
        data: patientData,
        backgroundColor: '#7AA3FF'
      }]
    },
    options: { responsive:true, plugins:{ legend:{display:false} } }
  });
});
</script>
</body>
</html>
