<?php
require_once 'core/auth.php';

if (isLoggedIn()) {
  header("Location: modules/dashboard.php");
  exit;
} else {
  header("Location: login.php");
  exit;
}
?>
