<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$rows = $pdo->query("
  SELECT 
    CASE 
      WHEN TIMESTAMPDIFF(YEAR, p.dob, CURDATE()) < 12 THEN 'Children (<12)'
      WHEN TIMESTAMPDIFF(YEAR, p.dob, CURDATE()) BETWEEN 12 AND 19 THEN 'Teens (12–19)'
      WHEN TIMESTAMPDIFF(YEAR, p.dob, CURDATE()) BETWEEN 20 AND 39 THEN 'Adults (20–39)'
      WHEN TIMESTAMPDIFF(YEAR, p.dob, CURDATE()) BETWEEN 40 AND 59 THEN 'Middle Age (40–59)'
      ELSE 'Senior (60+)'
    END AS age_group,
    COUNT(c.case_id) AS total_cases
  FROM patients p
  JOIN cases c ON p.patient_id = c.patient_id
  GROUP BY age_group
  ORDER BY total_cases DESC
")->fetchAll();
?>

<h3 class="p-3">Age-Wise Case Distribution</h3>
<table class="table table-bordered">
  <thead><tr><th>Age Group</th><th>Total Cases</th></tr></thead>
  <tbody>
    <?php foreach($rows as $r): ?>
      <tr>
        <td><?= sanitize($r['age_group']) ?></td>
        <td><?= $r['total_cases'] ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
