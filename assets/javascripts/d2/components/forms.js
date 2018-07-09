$( function () {
  var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

  // Add active if form auto complete
  $( document ).on( 'change input', input_selector, function () {
    // Min length
    var thisDataMinLength = $( this ).data( 'min-length' ) !== undefined && $( this ).data( 'min-length' );
    if ( thisDataMinLength && $( this ).val().length < thisDataMinLength && $( this ).val().length !== 0 ) {
      $( this ).removeClass( 'valid' ).addClass( 'invalid-min' );
    } else {
      $( this ).removeClass( 'invalid-min' );
    }

    // Required
    var thisDataRequired = $( this ).data( 'required' ) !== undefined && $( this ).data( 'required' );
    if ( thisDataRequired && $( this ).val() === '' ) {
      $( this ).removeClass( 'valid' ).addClass( 'invalid-required' ).find('~ label').addClass('active');
    } else {
      $( this ).removeClass( 'invalid-required' );
    }
  } );
} );
