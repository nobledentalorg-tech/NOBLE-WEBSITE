<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id   = intval($_POST['case_id']);
    $form_name = sanitize($_POST['form_name']);
    $signature = $_POST['signature']; // base64 data URL from signature pad

    if (!$case_id || !$form_name || !$signature) {
        alert("All fields are required.", "danger");
    } else {
        $sig_data = explode(',', $signature)[1];
        $file_name = 'consent_' . time() . '.png';
        file_put_contents("../../assets/uploads/consent_forms/$file_name", base64_decode($sig_data));

        $stmt = $pdo->prepare("INSERT INTO consent_forms (case_id, form_name, file_path, signed)
                               VALUES (?,?,?,1)");
        $stmt->execute([$case_id, $form_name, $file_name]);

        logAction($_SESSION['user_id'], "Consent Signed", "Case ID: $case_id");
        alert("Consent signed successfully!", "success");
    }
}
?>

<form method="POST" class="p-3" onsubmit="saveSignature()">
  <h3>Sign Consent Form</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <input type="text" name="form_name" placeholder="Form Name (e.g., Extraction Consent)" class="form-control mb-2" required>
  
  <canvas id="sigPad" width="400" height="200" style="border:1px solid #ccc"></canvas>
  <input type="hidden" name="signature" id="sigData">
  <button type="button" class="btn btn-secondary my-2" onclick="clearPad()">Clear</button>
  <button class="btn btn-primary">Submit Signature</button>
</form>

<script src="../../assets/js/signature-pad.min.js"></script>
<script>
const canvas = document.getElementById('sigPad');
const pad = new SignaturePad(canvas);
function clearPad(){ pad.clear(); }
function saveSignature(){
  document.getElementById('sigData').value = pad.toDataURL();
}
</script>
