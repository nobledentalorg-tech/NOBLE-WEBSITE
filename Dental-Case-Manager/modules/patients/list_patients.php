<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();
allowRole(['Admin','Doctor','Receptionist']);

$stmt = $pdo->query("SELECT * FROM patients ORDER BY patient_id DESC");
$patients = $stmt->fetchAll();
?>

<h3 class="p-3">Patient List</h3>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>ID</th><th>Name</th><th>Gender</th><th>Phone</th><th>Actions</th>
    </tr>
  </thead>
  <tbody>
  <?php foreach($patients as $p): ?>
    <tr>
      <td><?= $p['patient_id'] ?></td>
      <td><?= sanitize($p['full_name']) ?></td>
      <td><?= $p['gender'] ?></td>
      <td><?= $p['phone'] ?></td>
      <td>
        <a href="view_patient.php?id=<?= $p['patient_id'] ?>" class="btn btn-sm btn-info">View</a>
        <a href="edit_patient.php?id=<?= $p['patient_id'] ?>" class="btn btn-sm btn-warning">Edit</a>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
