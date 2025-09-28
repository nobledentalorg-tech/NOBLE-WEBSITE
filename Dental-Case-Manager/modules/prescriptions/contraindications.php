<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $drug = sanitize($_POST['drug']);
    $condition = sanitize($_POST['condition']);
    $description = sanitize($_POST['description']);

    $stmt = $pdo->prepare("INSERT INTO contraindications (drug, condition_name, description)
                           VALUES (?,?,?)");
    $stmt->execute([$drug, $condition, $description]);

    alert("Contraindication saved for $drug.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Drug Contraindication</h3>
  <input type="text" name="drug" placeholder="Drug Name" class="form-control mb-2" required>
  <input type="text" name="condition" placeholder="Condition (e.g., Pregnancy, Ulcer)" class="form-control mb-2">
  <textarea name="description" placeholder="Details" class="form-control mb-2"></textarea>
  <button class="btn btn-warning">Save Contraindication</button>
</form>
