<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pkg_name  = sanitize($_POST['package_name']);
    $treat_ids = $_POST['treatments'] ?? [];
    $discount  = floatval($_POST['discount']);

    if (!$pkg_name || empty($treat_ids)) {
        alert("Package name and at least one treatment required.", "danger");
    } else {
        $pdo->beginTransaction();
        try {
            $stmt = $pdo->prepare("INSERT INTO packages (package_name, discount) VALUES (?,?)");
            $stmt->execute([$pkg_name, $discount]);
            $pkg_id = $pdo->lastInsertId();

            $link = $pdo->prepare("INSERT INTO package_items (package_id, treatment_id) VALUES (?,?)");
            foreach($treat_ids as $t) $link->execute([$pkg_id, $t]);

            $pdo->commit();
            logAction($_SESSION['user_id'], "Create Package", $pkg_name);
            alert("Package created successfully!", "success");
        } catch(Exception $e){
            $pdo->rollBack();
            alert("Error: ".$e->getMessage(), "danger");
        }
    }
}

$treats = $pdo->query("SELECT treatment_id, treatment_name FROM treatments ORDER BY treatment_name")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Package Builder</h3>
  <input type="text" name="package_name" placeholder="Package Name" class="form-control mb-2" required>
  <label>Select Treatments</label>
  <div class="border p-2 mb-2" style="max-height:200px;overflow-y:auto;">
    <?php foreach($treats as $tr): ?>
      <label><input type="checkbox" name="treatments[]" value="<?= $tr['treatment_id'] ?>"> <?= $tr['treatment_name'] ?></label><br>
    <?php endforeach; ?>
  </div>
  <input type="number" step="0.1" name="discount" placeholder="Discount %" class="form-control mb-2">
  <button class="btn btn-success">Create Package</button>
</form>
