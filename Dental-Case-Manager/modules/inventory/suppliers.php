<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','StoreManager']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = sanitize($_POST['name']);
    $phone = sanitize($_POST['phone']);
    $email = sanitize($_POST['email']);
    $address = sanitize($_POST['address']);

    $stmt = $pdo->prepare("INSERT INTO suppliers (name, phone, email, address) VALUES (?,?,?,?)");
    $stmt->execute([$name, $phone, $email, $address]);

    logAction($_SESSION['user_id'], "Add Supplier", $name);
    alert("Supplier added successfully.", "success");
}

$suppliers = $pdo->query("SELECT * FROM suppliers ORDER BY name")->fetchAll();
?>

<h3 class="p-3">Suppliers</h3>
<form method="POST" class="p-3 border mb-3">
  <h5>Add Supplier</h5>
  <input type="text" name="name" placeholder="Supplier Name" class="form-control mb-2" required>
  <input type="text" name="phone" placeholder="Phone" class="form-control mb-2">
  <input type="email" name="email" placeholder="Email" class="form-control mb-2">
  <textarea name="address" placeholder="Address" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Save</button>
</form>

<table class="table table-bordered">
  <thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Address</th></tr></thead>
  <tbody>
  <?php foreach($suppliers as $s): ?>
    <tr>
      <td><?= sanitize($s['name']) ?></td>
      <td><?= $s['phone'] ?></td>
      <td><?= $s['email'] ?></td>
      <td><?= sanitize($s['address']) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
