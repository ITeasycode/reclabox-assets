// ----------- Users form method -----------
// -----------------------------------------
;(function ( $ ) {
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

    function width_tab_register( argument ) {
        var argument = argument;

        $obj_register.find( '.tab' ).click( function ( event ) {
            /* Act on the event */

            var this_href = $( this ).find( 'a' ).attr( 'href' )

            if ( this_href == argument ) {
                // statement
                $obj_register.addClass( 'register-form' );
                setTimeout( function () {
                    $obj_register.find( '.register-nav' ).removeClass( 'invisible' );
                }, 400 );

            } else {
                $obj_register.removeClass( 'register-form' );
                $obj_register.find( '.register-nav' ).addClass( 'invisible' );
            }
        } );
    };
    width_tab_register( '#userRegisterTabContent' );

    $obj_register.find( '.btn-register-nav' ).click( function ( event ) {
        /* Act on the event */
        this_href = $( this ).attr( 'href' );
        $obj_register.find( '.tabs' ).addClass( 'hide' );
        $obj_register.find( '.register-nav' ).addClass( 'hide' );
        $obj_register.find( '.register-forms > .card-image.hide' ).removeClass( 'hide' );
        $( this_href ).removeClass( 'hide' );
        $uFBtn.removeClass( 'hide' ).addClass( 'prev-regisrer-nav' );
    } );


    // ------- password --------
    // - password display method, and hide it.
    // - Methods to display the password entering and form recovery

    // password display method, and hide it.
    var inputArrayPassword = $( 'input[type^="password"]' ),
        iconEye = $( '<i class="mdi mdi-eye password-eye small hide"></i>' );
    inputArrayPassword.after( iconEye );

    inputArrayPassword.on( 'input', function ( event ) {
        var inputEventThis = $( this );
        if ( inputEventThis.val().length > 0 ) {
            inputEventThis.next( 'i.password-eye' ).removeClass( 'hide' );
        } else {
            inputEventThis.next( 'i.password-eye' ).addClass( 'hide' );
        }
    } );

    inputArrayPassword.next( 'i.password-eye' ).on( 'click', function ( event ) {
        event.preventDefault();
        /* Act on the event */
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

    $uFBtn.click( function ( event ) {
        /* Act on the event */
        removeEventDefault( event );

        if ( $( this ).hasClass( 'prev-login' ) ) {
            $( id ).addClass( 'hide' );
            $siblingsCardContent.removeClass( 'hide' )
            setTimeout( function () {
                $uFBtn.addClass( 'hide' ).removeClass( 'prev-login' );
            }, 500 );
        } else {
            $obj_register.find( '.tabs' ).removeClass( 'hide' );
            $obj_register.find( '.register-nav' ).removeClass( 'hide' );
            $obj_register.find( '.register-forms > .card-image' ).addClass( 'hide' );
            $( this_href ).addClass( 'hide' );
            $uFBtn.addClass( 'hide' ).removeClass( 'prev-regisrer-nav' );
        }
    } );

    // Methods intercept the request and send an ajax request
    // - event click to button
    // - ajax request and processing request
    var $formLogin = $( '.form-login' );
    var userEmail, userPassword, btnSubmit, ajaxRequest, dataAjaxRequest, userGreeting;

    //---------- event click to button -----------
    $formLogin.find( 'button' ).click( function ( event ) {
        /* Act on the event */
        removeEventDefault( event );

        userEmail = $( '#emailLogin' ).val();
        userPassword = $( '#passwordLogin' ).val();

        if ( userEmail && userPassword ) {
            btnSubmit = true;
        } else {
            btnSubmit = false;
        }

        // ajax request
        if ( btnSubmit === true ) {
            dataAjaxRequest = { login: userEmail, password: userPassword };
            ajaxRequest( dataAjaxRequest );
        }
    } );

    //---------- ajax request and processing request -----------
    ajaxRequest = function ( argument ) {
        $.get( "login.txt", argument, processingRequest, "json" );
    }
    processingRequest = function ( data ) {
        if ( data.login === dataAjaxRequest.login && data.password === dataAjaxRequest.password ) {
            console.log( 'Есть такие данные' );
            userGreeting( data );
        } else {
            console.log( 'Нет таких данных' );
        }
    }

    //----------- user greeting --------------
    userGreeting = function ( argument ) {
        // body...
        var $formLogin = $( '.form-login' )
        var h_f_l = $formLogin.height();
        var dataArgument = argument;
        var content;
        var $loader = $( '<i class="loader">Loading...</i>' );

        $formLogin.height( h_f_l );
        $formLogin.find( ' > *' ).addClass( 'hide' );

        content = '<p><img components=" ' + dataArgument.img + ' " alt="" /></p>';
        content += '<h4>' + dataArgument.name + '</h4>';
        content += '<p>' + dataArgument.login + '</p>';
        content += '<a class="sign-out" href="#!">Sign out</a>'

        $formLogin.addClass( 'center logged' );
        // $formLogin.html($loader);
        $formLogin.html( content );

    }

})( jQuery );