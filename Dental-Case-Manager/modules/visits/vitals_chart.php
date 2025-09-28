<?php
require_once '../../core/auth.php';
checkLogin();
?>

<div class="p-3">
  <h3>Vitals Trend Chart</h3>
  <canvas id="vitalsChart" width="600" height="300"></canvas>
</div>

<script src="../../assets/js/chart.js"></script>
<script>
const ctx = document.getElementById('vitalsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Visit 1', 'Visit 2', 'Visit 3', 'Visit 4'],
    datasets: [
      { label: 'Blood Pressure (mmHg)', data: [120,118,116,115], borderColor: 'blue', fill: false },
      { label: 'Pulse Rate (bpm)', data: [80,78,76,75], borderColor: 'red', fill: false }
    ]
  },
  options: { responsive: true, tension: 0.3 }
});
</script>
