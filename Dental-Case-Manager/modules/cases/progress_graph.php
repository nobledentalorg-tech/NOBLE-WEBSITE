<?php
require_once '../../core/auth.php';
checkLogin();
?>

<div class="p-3">
  <h3>Case Progress</h3>
  <canvas id="progressChart" width="600" height="300"></canvas>
</div>

<script src="../../assets/js/chart.js"></script>
<script>
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1','Day 3','Day 7','Day 14'],
    datasets: [{
      label: 'Pain Level',
      data: [8,6,3,1],
      fill: false,
      borderColor: 'teal',
      tension: 0.3
    }]
  },
  options: { responsive: true }
});
</script>
