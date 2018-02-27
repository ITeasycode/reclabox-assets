$( function () {
  var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

  // Add active if form auto complete
  $( document ).on( 'change input', input_selector, function () {
    var thisDataMinLength = $( this ).data( 'min-length' ) !== undefined ? $( this ).data( 'min-length' ) : false;
    if ( $( this ).val().length < thisDataMinLength && $( this ).val().length !== 0 ) {
      $( this ).removeClass( 'valid' ).addClass( 'invalid-min' );
    } else {
      $( this ).removeClass( 'invalid-min' );
    }
  } );
} );
