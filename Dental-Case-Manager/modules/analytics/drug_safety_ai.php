<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin','Doctor']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $drug = sanitize($_POST['drug']);
    $allergy = sanitize($_POST['allergy']);
    $age = intval($_POST['age']);

    // ⚙️ ML Stub (future AI model integration)
    $risk = "Low";

    if (stripos($allergy, $drug) !== false) {
        $risk = "High (Direct Allergy)";
    } elseif ($age < 5 && in_array(strtolower($drug), ['ibuprofen','aspirin'])) {
        $risk = "High (Age Restriction)";
    } elseif (in_array(strtolower($drug), ['metronidazole','amoxicillin']) && stripos($allergy, 'penicillin') !== false) {
        $risk = "Moderate (Cross Sensitivity)";
    }

    echo "<div class='alert alert-info mt-3'><b>Risk Level:</b> $risk</div>";
}
?>

<form method="POST" class="p-3">
  <h3>Drug Safety AI (Beta)</h3>
  <input type="text" name="drug" placeholder="Drug Name" class="form-control mb-2" required>
  <input type="text" name="allergy" placeholder="Known Allergies (comma separated)" class="form-control mb-2">
  <input type="number" name="age" placeholder="Patient Age" class="form-control mb-2" required>
  <button class="btn btn-primary">Check Safety</button>
</form>
