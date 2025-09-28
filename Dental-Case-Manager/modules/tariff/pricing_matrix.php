<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $treatment_id = intval($_POST['treatment_id']);
    $doctor_level = sanitize($_POST['doctor_level']);
    $price        = floatval($_POST['price']);

    $stmt = $pdo->prepare("
        INSERT INTO pricing_matrix (treatment_id, doctor_level, price)
        VALUES (?,?,?)
        ON DUPLICATE KEY UPDATE price=VALUES(price)
    ");
    $stmt->execute([$treatment_id, $doctor_level, $price]);
    logAction($_SESSION['user_id'], "Update Pricing", "Treatment #$treatment_id for $doctor_level");
    alert("Pricing updated successfully!", "success");
}

$treats = $pdo->query("SELECT treatment_id, treatment_name FROM treatments")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Pricing Matrix</h3>
  <select name="treatment_id" class="form-control mb-2" required>
    <option value="">Select Treatment</option>
    <?php foreach($treats as $t): ?>
      <option value="<?= $t['treatment_id'] ?>"><?= $t['treatment_name'] ?></option>
    <?php endforeach; ?>
  </select>
  <input type="text" name="doctor_level" placeholder="Doctor Level (e.g. Senior, Junior)" class="form-control mb-2" required>
  <input type="number" step="0.01" name="price" placeholder="Custom Price ₹" class="form-control mb-2" required>
  <button class="btn btn-warning">Save Price</button>
</form>

<hr>
<h5 class="p-3">Existing Matrix</h5>
<table class="table table-bordered">
  <thead><tr><th>Treatment</th><th>Doctor Level</th><th>Price (₹)</th></tr></thead>
  <tbody>
  <?php
  $rows = $pdo->query("
    SELECT pm.*, t.treatment_name 
    FROM pricing_matrix pm 
    JOIN treatments t ON pm.treatment_id = t.treatment_id
    ORDER BY t.treatment_name
  ")->fetchAll();
  foreach($rows as $r): ?>
    <tr>
      <td><?= sanitize($r['treatment_name']) ?></td>
      <td><?= sanitize($r['doctor_level']) ?></td>
      <td><?= number_format($r['price'],2) ?></td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
