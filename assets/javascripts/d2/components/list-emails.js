// ---------- list emails method -----------
// -----------------------------------------
$(function () {
  /* body... */
  var $list_email = $('.post-list-email');

  $list_email.find('.collection-header').click(function (event) {
    /* Act on the event */
    removeEventDefault(event);

    if ($(this).parent('.collection-item').hasClass('active')) {
      $(this).parent('.collection-item').removeClass('active');
    } else {
      if ($list_email.find('.collection-item').hasClass('active')) {
        $list_email.find('.collection-item').removeClass('active');
        $(this).parent('.collection-item').addClass('active');
      } else {
        $(this).parent('.collection-item').addClass('active');
      }
    }
  });
});
