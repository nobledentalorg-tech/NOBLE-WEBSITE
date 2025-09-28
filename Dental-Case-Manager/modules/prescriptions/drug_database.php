<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitize($_POST['drug_name']);
    $category = sanitize($_POST['category']);
    $description = sanitize($_POST['description']);
    $contra = sanitize($_POST['contraindications']);

    $stmt = $pdo->prepare("INSERT INTO drug_master (drug_name, category, description, contraindications)
                           VALUES (?,?,?,?)");
    $stmt->execute([$name, $category, $description, $contra]);

    logAction($_SESSION['user_id'], "Add Drug", $name);
    alert("Drug added to master database.", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Add Drug to Database</h3>
  <input type="text" name="drug_name" placeholder="Drug Name" class="form-control mb-2" required>
  <input type="text" name="category" placeholder="Category (Antibiotic, Analgesic...)" class="form-control mb-2">
  <textarea name="description" placeholder="Description" class="form-control mb-2"></textarea>
  <textarea name="contraindications" placeholder="Contraindications" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Add Drug</button>
</form>
