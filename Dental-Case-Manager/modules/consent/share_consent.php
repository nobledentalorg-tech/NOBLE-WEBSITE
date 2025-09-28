<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $email   = sanitize($_POST['email']);
    $link    = sanitize($_POST['file_link']);

    // In a real app, integrate with mailer (PHPMailer)
    alert("Consent form shared to $email (link: $link)", "info");
}
?>

<form method="POST" class="p-3">
  <h3>Share Consent Form</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="email" name="email" placeholder="Patient Email" class="form-control mb-2" required>
  <input type="text" name="file_link" placeholder="File Link (URL)" class="form-control mb-2" required>
  <button class="btn btn-primary">Share via Email</button>
</form>
