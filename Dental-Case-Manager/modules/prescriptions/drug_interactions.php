<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Doctor','Admin']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $drug_a = sanitize($_POST['drug_a']);
    $drug_b = sanitize($_POST['drug_b']);
    $interaction = sanitize($_POST['interaction']);

    $stmt = $pdo->prepare("INSERT INTO drug_interactions (drug_a, drug_b, interaction)
                           VALUES (?,?,?)");
    $stmt->execute([$drug_a, $drug_b, $interaction]);

    alert("Interaction recorded between $drug_a and $drug_b", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Record Drug Interaction</h3>
  <input type="text" name="drug_a" placeholder="Drug A" class="form-control mb-2" required>
  <input type="text" name="drug_b" placeholder="Drug B" class="form-control mb-2" required>
  <textarea name="interaction" placeholder="Describe interaction..." class="form-control mb-2"></textarea>
  <button class="btn btn-danger">Save Interaction</button>
</form>
