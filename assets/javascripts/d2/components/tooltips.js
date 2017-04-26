// ---------- functional tooltips method ---
// -----------------------------------------
;( function ( $ ) {
    $( function () {
        var $links = $( '.links > .btn-floating' );

        $links.on( 'click', function ( event ) {
            removeEventDefault( event );

            var $funcTooltips = $( this ).next( '.functional-tooltips' );
            var thisPosition = $( this ).position().left;

            if ( $funcTooltips.hasClass( 'hide' ) ) {
                $funcTooltips
                    .removeClass( 'hide' )
                    .css( 'left', -( thisPosition + 2 ) );
            } else {
                $funcTooltips.addClass( 'hide' );
            }
        } );
    } );
} )( jQuery );
