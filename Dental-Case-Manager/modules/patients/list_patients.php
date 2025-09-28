<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();
allowRole(['Admin','Doctor','Receptionist']);

$stmt = $pdo->query("SELECT * FROM patients ORDER BY created_at DESC");
$patients = $stmt->fetchAll();
?>

<?php include '../../includes/header.php'; ?>
<?php include '../../includes/sidebar.php'; ?>

<div class="container-fluid p-4">
  <h3 class="mb-4">👩‍⚕️ Patient List</h3>

  <div class="card shadow-sm p-3">
    <?php if (count($patients) > 0): ?>
      <table class="table table-sm datatable">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Allergies</th>
            <th>Registered</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach($patients as $p): ?>
          <tr>
            <td><?= $p['patient_id'] ?></td>
            <td><?= sanitize($p['full_name']) ?></td>
            <td><?= $p['gender'] ?></td>
            <td><?= $p['phone'] ?></td>
            <td><?= sanitize($p['email']) ?></td>
            <td><?= $p['allergies'] ? sanitize($p['allergies']) : '<em>None</em>' ?></td>
            <td><?= date('d M Y', strtotime($p['created_at'])) ?></td>
            <td>
              <a href="view_patient.php?id=<?= $p['patient_id'] ?>" class="btn btn-sm btn-info" data-bs-toggle="tooltip" title="View"><i class="bi bi-eye"></i></a>
              <a href="edit_patient.php?id=<?= $p['patient_id'] ?>" class="btn btn-sm btn-warning" data-bs-toggle="tooltip" title="Edit"><i class="bi bi-pencil"></i></a>
            </td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    <?php else: ?>
      <p class="text-muted m-0">No patients found.</p>
    <?php endif; ?>
  </div>
</div>

<?php include '../../includes/footer.php'; ?>
