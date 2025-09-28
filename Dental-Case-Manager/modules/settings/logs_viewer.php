<?php
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin']);

$logDir = '../../logs/';
$files = ['access.log','error.log','audit.log'];
$selected = $_GET['file'] ?? 'error.log';

$filePath = $logDir.$selected;
$content = file_exists($filePath) ? file_get_contents($filePath) : "File not found.";
?>
<h3 class="p-3">System Logs Viewer</h3>
<form method="GET" class="p-3">
  <select name="file" onchange="this.form.submit()" class="form-control mb-3">
    <?php foreach($files as $f): ?>
      <option <?= $selected==$f?'selected':'' ?>><?= $f ?></option>
    <?php endforeach; ?>
  </select>
</form>

<pre class="border p-3 bg-light" style="max-height:500px;overflow:auto;"><?= htmlspecialchars($content) ?></pre>
