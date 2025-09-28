<?php
if (session_status() === PHP_SESSION_NONE) session_start();
require_once '../core/auth.php';
require_once '../core/functions.php';
checkLogin();
?>
<header class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="../modules/dashboard.php">
      🦷 Noble Dental Care
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="topNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="../modules/settings/clinic_profile.php">Settings</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="userMenu" data-bs-toggle="dropdown">
            <?= sanitize($_SESSION['full_name'] ?? 'User') ?>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="../modules/users/change_password.php">Change Password</a></li>
            <li><a class="dropdown-item text-danger" href="../logout.php">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</header>
