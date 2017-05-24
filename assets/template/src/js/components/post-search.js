// ---------- Post search method -----------
// -----------------------------------------
( function ( $ ) {
    $( function () {
        var $btnArray = $( '.post-search' ).find( '.btn-res' );
        var resContent;

        $btnArray.on('click', function ( event ) {
            removeEventDefault( event );
            resContent( $( this ) );
        });

        resContent = function ( arg ) {
            var res = '#res_' + $( arg ).data( 'res' );

            if ( $( res ).hasClass( 'hide' ) ) {
                $( res ).hide().removeClass( 'hide' ).slideDown( 400 );
                if ( $( res ).next( '.pagination' ).hasClass( 'hide' ) ) {
                    $( res ).next( '.pagination' ).removeClass( 'hide' );
                }
            }

            $( arg ).addClass( 'hide' );

            return;
        };
    } );
} )( jQuery );
