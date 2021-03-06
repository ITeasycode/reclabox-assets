// ----------- Users form method -----------
// -----------------------------------------
$(function () {
  // Methods for testing the validation form
  // - user forms
  // - password
  // - search
  var $btnDisabled = $( 'button.disabled' );
  var $passwordLogin = $( '#passwordLogin' );

  // ------- User Forms -------
  // - register
  // - login
  var $obj_register = $( '#usersLogin' );
  var $uFBtn = $( '.u-f-btn-prev' );
  var this_href;

  $obj_register.find( '.tab a' ).click( function ( event ) {
    /* Act on the event */
    removeEventDefault( event );

    var this_href = $( this ).attr( 'href' )

    if ( this_href == '#userRegisterTabContent' ) {
      // statement
      $obj_register.addClass( 'register-form' );
      setTimeout( function () {
        $obj_register.find( '.register-nav' ).removeClass( 'invisible' );
      }, 400 );
    } else {
      $obj_register.find( '.form-login' ).removeClass( 'hide' );
      $obj_register.find( '.form-newpassword' ).addClass( 'hide' );
      $obj_register.find( '.register-nav' ).addClass( 'invisible' );
      $obj_register.removeClass( 'register-form' );
    }
  } );

  $obj_register.find( '.btn-register-nav' ).click( function ( event ) {
    /* Act on the event */
    removeEventDefault( event );

    this_href = $( this ).attr( 'href' );
    $obj_register.find( '.tabs' ).addClass( 'hide' );
    $obj_register.find( '.register-nav' ).addClass( 'hide' );
    $obj_register.find( '.register-forms > .card-image.hide' ).removeClass( 'hide' );
    $( this_href ).removeClass( 'hide' );
    $uFBtn.removeClass( 'hide' ).removeClass( 'prev-login' ).addClass( 'prev-regisrer-nav' );
  } );


  // ------- validation forms --------
  // - event for submit form
  // - tooltip terms of use
  var $registerFroms = $('#userMitgliedschaft, #firmaMitgliedschaft, #newPassword').find('form');

  $registerFroms.submit(function(e) {
    e.preventDefault();

    var $form = $(this),
        errors = [],
        isChecked = $form.find('.js-terms-of-use').is(':checked');

    // $.each( $form[0], function (index, field) {
    //   var $field = $(field)
    //   validationFields.apply(field)
    //   errors.push( $field.hasClass( 'invalid' ) || $field.hasClass( 'invalid-min' ) || $field.hasClass( 'invalid-required' ) );
    // } );

    // TODO
    // $form.find('.terms-of-use-tooltip').toggleClass('show-tooltip', !isChecked);

    // if ( !errors.includes(true) && isChecked) $form[0].submit();
  });

  // TODO
  // $registerFroms.find('.js-terms-of-use').on('change', function () {
  //   $(this).siblings('.terms-of-use-tooltip').toggleClass('show-tooltip', !this.checked);
  // });


  // ------- password --------
  // - password display method, and hide it.
  // - Methods to display the password entering and form recovery

  // password display method, and hide it.
  var inputArrayPassword = 'input[type^="password"]',
      iconEye = $( '<i class="mdi mdi-eye password-eye small hide"></i>' );

  $( inputArrayPassword ).after( iconEye );

  $(document).on( 'input', inputArrayPassword, function ( event ) {
    var inputEventThis = $( this );

    if ( inputEventThis.next( 'i.password-eye' ).length == 0 ) {
      inputEventThis.after( iconEye );
    }

    inputEventThis.next( 'i.password-eye' ).toggleClass( 'hide', inputEventThis.val().length == 0 );
  } );

  $(document).on( 'click', 'i.password-eye', function ( event ) {
    /* Act on the event */
    removeEventDefault( event );

    if ( $( this ).prev( 'input' ).attr( 'type' ) == "password" ) {
      $( this ).prev( 'input' ).attr( 'type', 'text' );
      $( this ).removeClass( 'mdi-eye' ).addClass( 'mdi-eye-off' );
    } else {
      $( this ).prev( 'input' ).attr( 'type', 'password' );
      $( this ).removeClass( 'mdi-eye-off' ).addClass( 'mdi-eye' );
    }
  } );


  // Methods to display the password entering and form recovery
  var $questionsLink = $( '.questions > a' );
  var $siblingsCardContent, id;

  $questionsLink.click( function ( event ) {
    /* Act on the event */
    id = $( this ).attr( 'href' );

    if ( $( id ) ) {
      removeEventDefault( event );

      $siblingsCardContent = $( id ).siblings( '.card-content' );
      $siblingsCardContent.addClass( 'hide' );
      $( id ).removeClass( 'hide' );
      $uFBtn.removeClass( 'hide' ).addClass( 'prev-login' );
    }
  } );

  window.showForgotPasswordForm = function() {
    $('#usersLogin')
      .modal('open')
      .find('a[href="#newPassword"]')
      .trigger('click');

    return false;
  }

  $uFBtn.on( 'click', function ( event ) {
    /* Act on the event */
    removeEventDefault( event );

    if ( $( this ).hasClass( 'prev-login' ) ) {
      $( id ).addClass( 'hide' );
      $siblingsCardContent.removeClass( 'hide' )
      $uFBtn.addClass( 'hide' ).removeClass( 'prev-login' );
    } else {
      $obj_register.find( '.tabs' ).removeClass( 'hide' );
      $obj_register.find( '.register-nav' ).removeClass( 'hide' );
      $obj_register.find( '.register-forms > .card-image' ).addClass( 'hide' );
      $( this_href ).addClass( 'hide' );
      $uFBtn.addClass( 'hide' ).removeClass( 'prev-regisrer-nav' );
    }

    // trgger for init tabs
    $obj_register.resize();
  } );

  // Methods intercept the request and send an ajax request
  // - event click to button
  // - ajax request and processing request
  // var $formLogin = $( '.form-login' );
  // var userEmail, userPassword, btnSubmit, ajaxRequest, dataAjaxRequest, userGreeting;

  // //---------- event click to button -----------
  // $formLogin.find( 'button' ).click( function ( event ) {
  //   /* Act on the event */
  //   removeEventDefault( event );

  //   userEmail = $( '#emailLogin' ).val();
  //   userPassword = $( '#passwordLogin' ).val();

  //   if ( userEmail && userPassword ) {
  //     btnSubmit = true;
  //   } else {
  //     btnSubmit = false;
  //   }

  //   // ajax request
  //   if ( btnSubmit === true ) {
  //     dataAjaxRequest = { login: userEmail, password: userPassword };
  //     ajaxRequest( dataAjaxRequest );
  //   }
  // } );

  // //---------- ajax request and processing request -----------
  // ajaxRequest = function ( argument ) {
  //   $.get( "login.txt", argument, processingRequest, "json" );
  // }
  // processingRequest = function ( data ) {
  //   if ( data.login === dataAjaxRequest.login && data.password === dataAjaxRequest.password ) {
  //     console.log( 'Есть такие данные' );
  //     userGreeting( data );
  //   } else {
  //     console.log( 'Нет таких данных' );
  //   }
  // }

  // //----------- user greeting --------------
  // userGreeting = function ( argument ) {
  //   // body...
  //   var $formLogin = $( '.form-login' )
  //   var h_f_l = $formLogin.height();
  //   var dataArgument = argument;
  //   var content;
  //   var $loader = $( '<i class="loader">Loading...</i>' );

  //   $formLogin.height( h_f_l );
  //   $formLogin.find( ' > *' ).addClass( 'hide' );

  //   content = '<p><img components=" ' + dataArgument.img + ' " alt="" /></p>';
  //   content += '<h4>' + dataArgument.name + '</h4>';
  //   content += '<p>' + dataArgument.login + '</p>';
  //   content += '<a class="sign-out" href="#!">Sign out</a>'

  //   $formLogin.addClass( 'center logged' );
  //   // $formLogin.html($loader);
  //   $formLogin.html( content );

  // }

  //----------- toggle button submit (rails-ujs) --------------
  window.clearUserFormAndBackToLogin = function( form, time ) {
    time = time || 0;

    setTimeout( function() {
      $( form )[0].reset();
      $( form + ' input' ).each( function() { $(this).blur(); } );
      $( '.u-f-btn-prev' ).click();
      $( 'a[href="#userLoginTabContent"]' ).delay(10).click();
    }, time );
  }

  //----------- toggle button submit (rails-ujs) --------------
  buttonSubmitToggle = function ( event ) {
    $(this)
      .find( '[type=submit]' )
      .toggleClass( 'sending', event.type == 'ajax:beforeSend' );
  }

  $obj_register.find( 'form' )
    .on( 'ajax:beforeSend', buttonSubmitToggle )
    .on( 'ajax:complete', buttonSubmitToggle );
});
