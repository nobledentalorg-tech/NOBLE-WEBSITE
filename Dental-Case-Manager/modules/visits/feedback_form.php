<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $case_id = intval($_POST['case_id']);
    $rating = intval($_POST['rating']);
    $feedback = sanitize($_POST['feedback']);

    $stmt = $pdo->prepare("INSERT INTO feedback (case_id, rating, feedback_text)
                           VALUES (?,?,?)");
    $stmt->execute([$case_id, $rating, $feedback]);

    logAction($_SESSION['user_id'], "Add Feedback", "Case ID: $case_id");
    alert("Feedback submitted!", "success");
}
?>

<form method="POST" class="p-3">
  <h3>Patient Feedback</h3>
  <input type="number" name="case_id" placeholder="Case ID" class="form-control mb-2" required>
  <select name="rating" class="form-control mb-2" required>
      <option value="">Select Rating</option>
      <option value="5">Excellent</option>
      <option value="4">Good</option>
      <option value="3">Average</option>
      <option value="2">Poor</option>
      <option value="1">Very Poor</option>
  </select>
  <textarea name="feedback" placeholder="Share your experience..." class="form-control mb-2" required></textarea>
  <button class="btn btn-success">Submit</button>
</form>
