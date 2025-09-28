<!-- Generic Alert Modal -->
<div class="modal fade" id="alertModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title">Alert</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body" id="alertBody">
        Something happened.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

<script>
function showAlert(msg){
  document.getElementById('alertBody').innerText = msg;
  var modal = new bootstrap.Modal(document.getElementById('alertModal'));
  modal.show();
}
</script>
