<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = sanitize($_POST['clinic_name']);
    $phone   = sanitize($_POST['phone']);
    $email   = sanitize($_POST['email']);
    $address = sanitize($_POST['address']);
    $logo    = '';

    // handle logo upload
    if (!empty($_FILES['logo']['name'])) {
        $uploadDir = '../../assets/uploads/';
        $logoName = 'clinic_logo_'.time().'.png';
        move_uploaded_file($_FILES['logo']['tmp_name'], $uploadDir.$logoName);
        $logo = 'assets/uploads/'.$logoName;
    }

    $stmt = $pdo->prepare("
      INSERT INTO clinic_profile (id, clinic_name, phone, email, address, logo)
      VALUES (1,?,?,?,?,?)
      ON DUPLICATE KEY UPDATE clinic_name=VALUES(clinic_name),
          phone=VALUES(phone), email=VALUES(email),
          address=VALUES(address), logo=IF(VALUES(logo)='',logo,VALUES(logo))
    ");
    $stmt->execute([$name,$phone,$email,$address,$logo]);
    logAction($_SESSION['user_id'], "Update Clinic Profile", $name);
    alert("Clinic profile updated successfully!", "success");
}

$profile = $pdo->query("SELECT * FROM clinic_profile LIMIT 1")->fetch();
?>

<h3 class="p-3">Clinic Profile</h3>
<form method="POST" enctype="multipart/form-data" class="p-3">
  <input type="text" name="clinic_name" value="<?= sanitize($profile['clinic_name'] ?? '') ?>" placeholder="Clinic Name" class="form-control mb-2" required>
  <input type="text" name="phone" value="<?= sanitize($profile['phone'] ?? '') ?>" placeholder="Phone" class="form-control mb-2" required>
  <input type="email" name="email" value="<?= sanitize($profile['email'] ?? '') ?>" placeholder="Email" class="form-control mb-2" required>
  <textarea name="address" class="form-control mb-2" placeholder="Address"><?= sanitize($profile['address'] ?? '') ?></textarea>
  <label>Logo: <input type="file" name="logo" class="form-control mb-2"></label>
  <?php if(!empty($profile['logo'])): ?>
    <img src="../../<?= $profile['logo'] ?>" alt="Logo" style="max-height:60px;">
  <?php endif; ?>
  <button class="btn btn-success">Save Changes</button>
</form>
