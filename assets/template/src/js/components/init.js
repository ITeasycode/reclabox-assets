// ------------ init components ------------
// -----------------------------------------
(function ( $ ) {

    $( function () {

        // ------------ init components ----------
        $( '.hot-story' ).limitationOutputChareacters( { limitSignsForTitle: 86, limitSignsForContent: 327 } );
        $( '#topBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 94, limitSignsForContent: 135 } );
        $( '#neuesteBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 154, limitSignsForContent: 225 } );
        // Forms
        // ---------------------------------------
        $( 'select' ).material_select();
        $( '#textarea1' ).trigger( 'autoresize' );

        $( 'input[type = "text"]' ).characterCounter();

        var $pageWrite = $( '.page-write' );
        var $slideInput = $pageWrite.find( '#slide-input' );

        $slideInput.removeClass( 'hide' ).slideUp( 'slow' ).addClass( 'hide' );

        $pageWrite.find( '.btn' ).click( function ( event ) {
            var id = $( this ).attr( 'href' );
            if ( id === '#slide-input' ) {
                // statement
                removeEventDefault( event );

                if ( $( id ).hasClass( 'hide' ) ) {
                    $( id ).removeClass( 'hide' ).slideDown( 'slow' );
                } else {
                    $( id ).slideUp( 'slow', function () {
                        $( this ).addClass( 'hide' );
                    } );
                }
            }
        } );

        // Slide Nav
        // ----------------------------------------
        $( '.button-collapse' ).slideNav( {
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        } );

        // Slider
        // ----------------------------------------
        $( '.slider-post' ).slider( { height: 400, autoScroll: false } );

        // Slick
        // ----------------------------------------
        $( "#topBeschwerden" ).slick( {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        } );
        $( "#neuesteBeschwerden" ).slick( {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        } );

        // Modal
        // -----------------------------------
        $( '.modal' ).modal( {
            ending_top: '3%'
        } );
        $( '.modal.modal-report' ).modal( {
            ending_top: '35%'
        } );

        // Nav Theme
        // -----------------------------------
        $( window ).resize( function ( event ) {
            /* Act on the event */
            $( 'ul#navHeader' ).navTheme( { fixedItems: true, indentItem: 50 } );
            $( 'ul#navTop' ).navTheme();
            $( 'ul#navContent' ).navTheme( { fixedItems: true } );
        } );

        $( 'ul#navHeader' ).navTheme( { fixedItems: true, indentItem: 50 } );
        $( 'ul#navTop' ).navTheme();
        $( 'ul#navContent' ).navTheme( { fixedItems: true } );

        // Tooltip
        // -----------------------------------
        $( '.tooltipped' ).tooltip( { delay: 50, position: 'top' } );

        // Methods
        // - Image adjustment
        // - Card comment hover
        // - Rating
        // - Button collapse
        // -----------------------------------

        // Variables
        // -----------------------------------
        var $uploaded_items = $( '.uploaded-item' ),
            $card_comment = $( '.card-comment' );

        // Image adjustment method
        // -----------------------------------
        $uploaded_items.find( 'img' ).each( function () {
            var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            if ( $( this ).attr( 'src' ) !== placeholderBase64 ) {
                $( this ).css( {
                    'background-image': 'url(' + $( this ).attr( 'src' ) + ')',
                    'background-size': 'cover'
                } );
                $( this ).attr( 'src', placeholderBase64 );
            }
        } );

        // Card comment hover
        // ------------------------------------
        $card_comment.hover( function () {
            $( this ).find( '.report-alert a.hide' ).removeClass( 'hide' );
        }, function () {
            $( this ).find( '.report-alert a' ).addClass( 'hide' );
        } );

        $( 'a[href="#USER-MITGLIEDSCHAFT"]' ).click( function () {
            $( '.user' ).removeClass( 'hide' );
            $( '.firm' ).addClass( 'hide' );
        } )
        $( 'a[href="#FIRMA-MITGLIEDSCHAFT"]' ).click( function () {
            $( '.firm' ).removeClass( 'hide' );
            $( '.user' ).addClass( 'hide' );
        } )

        // Rating methods
        // ------------------------------------
        var $rating = $( '.rating' ),
            $ratingText = $( '.rating-text' );

        $rating.find( 'a' ).hover( function () {
            $ratingText.empty();
            $ratingText.html( $( this ).attr( 'title' ) );
        }, function () {
            $ratingText.html( $( this ).attr( 'title' ) );
        } );

        $rating.find( 'a' ).on( 'click', function ( event ) {
            removeEventDefault( event );
            var $this = $( this );
            $this.addClass( 'star-scale' );
            setTimeout( function () {
                $this.removeClass( 'star-scale' );
            }, 400 );
        } );

        // Button collapse
        // -------------------------------------
        $( '.button-collapse' ).click( function ( event ) {
            /* Act on the event */
            removeEventDefault( event );
            if ( !$( this ).hasClass( 'active' ) ) {
                // statement
                $( this ).addClass( 'active' );
            } else {
                $( this ).removeClass( 'active' );
            }
        } );
    } ); // end of document ready
})( jQuery ); // end of jQuery name space


