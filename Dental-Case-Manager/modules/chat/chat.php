<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
checkLogin();

$uid = $_SESSION['user_id'];
$users = $pdo->query("SELECT user_id, full_name, role FROM users WHERE user_id != $uid ORDER BY full_name")->fetchAll();
?>
<h3 class="p-3">Internal Chat</h3>

<div class="row p-3">
  <div class="col-md-3">
    <h5>Contacts</h5>
    <ul class="list-group" id="userList">
      <?php foreach($users as $u): ?>
        <li class="list-group-item user" data-id="<?= $u['user_id'] ?>">
          <?= sanitize($u['full_name']) ?> <small>(<?= $u['role'] ?>)</small>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>

  <div class="col-md-9">
    <div id="chatBox" class="border p-3 mb-2" style="height:400px;overflow-y:auto;background:#fafafa;"></div>
    <form id="chatForm" class="d-flex gap-2">
      <input type="hidden" id="receiver_id">
      <input type="text" id="message" placeholder="Type your message..." class="form-control" required>
      <button class="btn btn-primary">Send</button>
    </form>
  </div>
</div>

<script src="../../assets/js/jquery.min.js"></script>
<script>
let currentReceiver = null;

$('.user').click(function(){
  currentReceiver = $(this).data('id');
  $('#receiver_id').val(currentReceiver);
  $('#chatBox').html('<em>Loading messages...</em>');
  loadMessages();
});

function loadMessages(){
  if(!currentReceiver) return;
  $.get('load_messages.php', {receiver_id: currentReceiver}, function(data){
    $('#chatBox').html(data);
    $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
  });
}

$('#chatForm').on('submit', function(e){
  e.preventDefault();
  $.post('send_message.php', {
    receiver_id: $('#receiver_id').val(),
    message: $('#message').val()
  }, function(){
    $('#message').val('');
    loadMessages();
  });
});

setInterval(loadMessages, 4000); // auto-refresh
</script>
