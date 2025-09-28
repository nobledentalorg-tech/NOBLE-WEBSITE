<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $file = $_FILES['image'];

    // Future ML Hook: call AI endpoint here (e.g., Python FastAPI)
    alert("AI analysis feature coming soon! Case ID: $case_id", "info");
}
?>

<form method="POST" enctype="multipart/form-data" class="p-3">
  <h3>AI Image Analysis (Beta)</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="file" name="image" accept="image/*" class="form-control mb-2" required>
  <button class="btn btn-primary">Analyze</button>
</form>
