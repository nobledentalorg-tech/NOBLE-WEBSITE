<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $treatment_id = intval($_POST['treatment_id']);
    $diagnosis_id = sanitize($_POST['diagnosis_id']);
    $drug_id      = sanitize($_POST['drug_id']);

    if (!$treatment_id) {
        alert("Select a treatment.", "danger");
    } else {
        $stmt = $pdo->prepare("
          INSERT INTO procedure_links (treatment_id, diagnosis_code, drug_code)
          VALUES (?,?,?)
          ON DUPLICATE KEY UPDATE diagnosis_code=VALUES(diagnosis_code), drug_code=VALUES(drug_code)
        ");
        $stmt->execute([$treatment_id, $diagnosis_id, $drug_id]);
        logAction($_SESSION['user_id'], "Link Procedure", "Treatment #$treatment_id");
        alert("Mapping saved successfully!", "success");
    }
}

$treats = $pdo->query("SELECT treatment_id, treatment_name FROM treatments")->fetchAll();
?>

<form method="POST" class="p-3">
  <h3>Procedure Mapping</h3>
  <select name="treatment_id" class="form-control mb-2" required>
    <option value="">Select Treatment</option>
    <?php foreach($treats as $t): ?>
      <option value="<?= $t['treatment_id'] ?>"><?= $t['treatment_name'] ?></option>
    <?php endforeach; ?>
  </select>
  <input type="text" name="diagnosis_id" placeholder="Diagnosis Code (ICD-10)" class="form-control mb-2">
  <input type="text" name="drug_id" placeholder="Suggested Drug Code" class="form-control mb-2">
  <button class="btn btn-success">Save Mapping</button>
</form>
