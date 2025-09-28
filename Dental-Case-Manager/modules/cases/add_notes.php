<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Doctor','Admin']);

$case_id = intval($_GET['id'] ?? 0);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $note = sanitize($_POST['note_text']);
    $stmt = $pdo->prepare("INSERT INTO case_notes (case_id, note_text) VALUES (?, ?)");
    $stmt->execute([$case_id, $note]);
    logAction($_SESSION['user_id'], "Add Case Note", "Case ID: $case_id");
    alert("Note added successfully!", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Add Note</h3>
  <textarea name="note_text" class="form-control mb-2" required></textarea>
  <button class="btn btn-primary">Save Note</button>
</form>
