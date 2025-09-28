<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$rows = $pdo->query("
  SELECT d.drug_name, COUNT(pres.prescription_id) AS times_prescribed
  FROM prescriptions pres
  JOIN drugs d ON pres.drug_id = d.drug_id
  GROUP BY pres.drug_id
  ORDER BY times_prescribed DESC
  LIMIT 15
")->fetchAll();
?>

<h3 class="p-3">Prescription Audit — Top 15 Drugs</h3>
<table class="table table-bordered">
  <thead><tr><th>Drug Name</th><th>Times Prescribed</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= sanitize($r['drug_name']) ?></td>
        <td><?= $r['times_prescribed'] ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
