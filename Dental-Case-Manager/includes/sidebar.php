<aside class="bg-light border-end vh-100 position-fixed sidebar" style="width:240px;">
  <div class="p-3 border-bottom">
    <h6 class="text-primary fw-bold">Navigation</h6>
  </div>

  <ul class="nav flex-column p-2">
    <li class="nav-item"><a href="../modules/dashboard.php" class="nav-link">🏠 Dashboard</a></li>
    <li class="nav-item"><a href="../modules/patients/list_patients.php" class="nav-link">🧑‍⚕️ Patients</a></li>
    <li class="nav-item"><a href="../modules/cases/list_cases.php" class="nav-link">📁 Cases</a></li>
    <li class="nav-item"><a href="../modules/appointments/list_appointments.php" class="nav-link">📅 Appointments</a></li>
    <li class="nav-item"><a href="../modules/prescriptions/list_prescriptions.php" class="nav-link">💊 Prescriptions</a></li>
    <li class="nav-item"><a href="../modules/billing/list_invoices.php" class="nav-link">💳 Billing</a></li>
    <li class="nav-item"><a href="../modules/reports/revenue_report.php" class="nav-link">📈 Reports</a></li>
    <li class="nav-item"><a href="../modules/chat/chat.php" class="nav-link">💬 Chat</a></li>
    <li class="nav-item"><a href="../modules/settings/clinic_profile.php" class="nav-link">⚙️ Settings</a></li>
  </ul>
</aside>

<style>
  body { margin-left:240px; } /* shift main content */
  @media(max-width:768px){
    .sidebar{display:none;}
    body{margin-left:0;}
  }
</style>
