<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin','Doctor']);

// basic model: age, diagnosis, procedure, and follow-up
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $age = intval($_POST['age']);
    $diagnosis = strtolower(trim($_POST['diagnosis']));
    $treatment = strtolower(trim($_POST['treatment']));

    $score = 85; // base success %

    if ($age > 60) $score -= 10;
    if (strpos($diagnosis,'infection')!==false) $score -= 8;
    if (strpos($treatment,'implant')!==false) $score += 5;
    if (strpos($treatment,'rct')!==false) $score -= 3;

    $score = max(40, min($score, 98)); // clamp range

    echo "<div class='alert alert-success mt-3'>
            <b>Predicted Outcome:</b> $score% success probability
          </div>";
}
?>

<form method="POST" class="p-3">
  <h3>Predictive Outcome Estimator (AI Stub)</h3>
  <input type="number" name="age" placeholder="Age" class="form-control mb-2" required>
  <input type="text" name="diagnosis" placeholder="Diagnosis" class="form-control mb-2" required>
  <input type="text" name="treatment" placeholder="Treatment" class="form-control mb-2" required>
  <button class="btn btn-primary">Estimate</button>
</form>
