/* =========================================================
   RULE ENGINE – Live Prescription Filtering
========================================================= */

$(document).ready(function(){
  $('#diagnosis, #age, #allergy').on('change keyup', function(){
    const age = $('#age').val();
    const diagnosis = $('#diagnosis').val();
    const allergy = $('#allergy').val();

    if (diagnosis.length > 2) {
      $.ajax({
        url: '../modules/prescriptions/drug_interactions.php',
        method: 'POST',
        data: { age, diagnosis, allergy },
        success: function(response){
          $('#suggestedDrugs').html(response);
        }
      });
    }
  });
});
