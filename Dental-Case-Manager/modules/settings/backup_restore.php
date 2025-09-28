<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';
checkLogin();
allowRole(['Admin']);

$backupDir = '../../database/backups/';

if(isset($_POST['backup'])){
  $filename = 'backup_'.date('Ymd_His').'.sql';
  $cmd = "mysqldump -u {$env['DB_USER']} -p'{$env['DB_PASS']}' {$env['DB_NAME']} > $backupDir$filename";
  shell_exec($cmd);
  logAction($_SESSION['user_id'],'Database Backup',$filename);
  alert("Backup created: $filename","success");
}

if(isset($_POST['restore'])){
  $file = $backupDir.basename($_POST['file']);
  if(file_exists($file)){
    $cmd = "mysql -u {$env['DB_USER']} -p'{$env['DB_PASS']}' {$env['DB_NAME']} < $file";
    shell_exec($cmd);
    logAction($_SESSION['user_id'],'Database Restore',$file);
    alert("Database restored successfully!","warning");
  } else alert("File not found","danger");
}

$files = glob($backupDir.'*.sql');
?>
<h3 class="p-3">Backup & Restore</h3>
<form method="POST" class="p-3">
  <button class="btn btn-success" name="backup">Create Backup</button>
</form>

<form method="POST" class="p-3">
  <select name="file" class="form-control mb-2" required>
    <option value="">Select Backup File</option>
    <?php foreach($files as $f): ?>
      <option><?= basename($f) ?></option>
    <?php endforeach; ?>
  </select>
  <button class="btn btn-danger" name="restore">Restore Selected</button>
</form>
