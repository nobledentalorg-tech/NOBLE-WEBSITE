<?php
/**
 * LOGS VIEWER – Noble Dental Case Manager
 * ---------------------------------------
 * Allows admin/doctors to view activity, error & audit logs safely
 */

require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/logger.php';

checkLogin();
allowRole(['Admin','Doctor']);

// ========== CONFIG ==========
$logDir = realpath(__DIR__ . '/../../logs');
$types = ['access', 'audit', 'error'];

// Selected log file
$type = $_GET['type'] ?? 'access';
$type = in_array($type, $types) ? $type : 'access';
$file = "$logDir/$type.log";

// ========== FETCH ==========
$lines = [];
if (file_exists($file)) {
    $lines = array_reverse(file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Logs Viewer | Noble Dental Care</title>
<link rel="stylesheet" href="../../assets/css/bootstrap.min.css">
<link rel="stylesheet" href="../../assets/css/style.css">
<style>
pre {
  font-family: monospace;
  background: #f8fafc;
  padding: 10px;
  border-radius: 8px;
  max-height: 70vh;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
.filter-bar { margin-bottom: 1rem; }
.badge-log { font-size: 0.85rem; margin-right: 6px; }
</style>
</head>
<body>
<?php include '../../includes/header.php'; ?>
<?php include '../../includes/sidebar.php'; ?>

<div class="container-fluid p-4">
  <h3 class="mb-3">System Logs Viewer 🩺</h3>

  <!-- ===== FILTER BAR ===== -->
  <div class="filter-bar d-flex flex-wrap gap-2 align-items-center">
    <form method="get" class="d-flex flex-wrap gap-2">
      <select name="type" class="form-select w-auto">
        <option value="access" <?= $type=='access'?'selected':'' ?>>Access Logs</option>
        <option value="audit" <?= $type=='audit'?'selected':'' ?>>Audit Logs</option>
        <option value="error" <?= $type=='error'?'selected':'' ?>>Error Logs</option>
      </select>
      <button class="btn btn-primary">View</button>
    </form>

    <button id="refreshBtn" class="btn btn-outline-secondary btn-sm ms-auto">⟳ Refresh</button>
    <form method="post" onsubmit="return confirm('Clear this log?');" class="ms-2">
      <input type="hidden" name="clear" value="<?= $type ?>">
      <button class="btn btn-outline-danger btn-sm">🗑 Clear</button>
    </form>
  </div>

  <?php
  // ===== CLEAR LOG =====
  if ($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['clear'])) {
      $clearType = $_POST['clear'];
      $target = "$logDir/$clearType.log";
      if (file_exists($target)) file_put_contents($target, '');
      echo '<div class="alert alert-success">Cleared '.$clearType.' log successfully!</div>';
      $lines = [];
  }
  ?>

  <!-- ===== LOGS DISPLAY ===== -->
  <pre id="logContent">
<?php
if (empty($lines)) {
    echo "No entries found in $type.log";
} else {
    foreach ($lines as $line) {
        // Highlight types
        if (strpos($line, '[error]') !== false)
            echo "<span class='text-danger'>$line</span>\n";
        elseif (strpos($line, '[audit]') !== false)
            echo "<span class='text-primary'>$line</span>\n";
        elseif (strpos($line, '[access]') !== false)
            echo "<span class='text-success'>$line</span>\n";
        else
            echo "$line\n";
    }
}
?>
  </pre>
</div>

<?php include '../../includes/footer.php'; ?>

<script src="../../assets/js/jquery.min.js"></script>
<script src="../../assets/js/bootstrap.min.js"></script>
<script>
$('#refreshBtn').on('click', function(){
  location.reload();
});
</script>
</body>
</html>
