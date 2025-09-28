<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name     = sanitize($_POST['name']);
    $category = sanitize($_POST['category']);
    $cost     = floatval($_POST['cost']);
    $duration = sanitize($_POST['duration']);
    $remarks  = sanitize($_POST['remarks']);

    if (!$name || !$cost) {
        alert("Treatment name and cost are required.", "danger");
    } else {
        $stmt = $pdo->prepare("
          INSERT INTO treatments (treatment_name, category, cost, duration, remarks)
          VALUES (?,?,?,?,?)
        ");
        $stmt->execute([$name, $category, $cost, $duration, $remarks]);

        logAction($_SESSION['user_id'], "Add Treatment", $name);
        alert("Treatment added successfully!", "success");
    }
}
?>

<form method="POST" class="p-3">
  <h3>Add Treatment</h3>
  <input type="text" name="name" placeholder="Treatment Name" class="form-control mb-2" required>
  <input type="text" name="category" placeholder="Category (e.g. Endodontics, Ortho)" class="form-control mb-2">
  <input type="number" step="0.01" name="cost" placeholder="Base Cost" class="form-control mb-2" required>
  <input type="text" name="duration" placeholder="Duration (e.g. 45 mins)" class="form-control mb-2">
  <textarea name="remarks" placeholder="Remarks / Notes" class="form-control mb-2"></textarea>
  <button class="btn btn-primary">Save Treatment</button>
</form>
