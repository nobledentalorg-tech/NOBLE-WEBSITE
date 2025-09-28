<?php
require_once '../../core/auth.php';
checkLogin();
?>

<style>
#imgCanvas { border:1px solid #ccc; cursor: crosshair; }
</style>

<div class="p-3">
  <h3>Annotate Image</h3>
  <input type="file" id="imgUpload" accept="image/*" class="form-control mb-2">
  <canvas id="imgCanvas" width="800" height="500"></canvas>
  <button onclick="saveCanvas()" class="btn btn-primary mt-2">Save Annotation</button>
</div>

<script>
const canvas = document.getElementById('imgCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

document.getElementById('imgUpload').addEventListener('change', e=>{
  const file = e.target.files[0];
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  img.src = URL.createObjectURL(file);
});

canvas.addEventListener('mousedown', ()=> drawing=true);
canvas.addEventListener('mouseup', ()=> drawing=false);
canvas.addEventListener('mousemove', e=>{
  if(!drawing) return;
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'red';
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

function saveCanvas(){
  const data = canvas.toDataURL();
  const a = document.createElement('a');
  a.href = data;
  a.download = 'annotation.png';
  a.click();
}
</script>
