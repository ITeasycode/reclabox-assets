$(document).ready(function(){
  $('.modal').modal({
  	ending_top: '0%',
  });
  $('a[href="#USER-MITGLIEDSCHAFT"]').click(function() {
  	$('.user').removeClass('hidden');
  	$('.firm').addClass('hidden');
  })
   $('a[href="#FIRMA-MITGLIEDSCHAFT"]').click(function() {
  	$('.firm').removeClass('hidden');
  	$('.user').addClass('hidden');
  })
});
