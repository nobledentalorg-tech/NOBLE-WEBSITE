<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

$case_id = intval($_GET['case_id'] ?? 0);

$stmt = $pdo->prepare("SELECT * FROM media_files WHERE case_id=? ORDER BY created_at DESC");
$stmt->execute([$case_id]);
$media = $stmt->fetchAll();
?>

<h3 class="p-3">Media Gallery (Case #<?= $case_id ?>)</h3>
<div class="row p-3">
<?php foreach($media as $m): ?>
  <div class="col-md-3 mb-3 text-center">
    <img src="../../assets/uploads/<?= strtolower($m['category']) ?>/<?= $m['file_name'] ?>" 
         class="img-fluid rounded shadow" alt="<?= $m['category'] ?>">
    <p><?= $m['category'] ?></p>
  </div>
<?php endforeach; ?>
</div>
