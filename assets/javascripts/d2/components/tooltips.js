// ---------- functional tooltips method ---
// -----------------------------------------
$( function () {
  var FUNC_TOOLTIPS = '.functional-tooltips';
  var $links = $( '.links > .btn-floating, .help > .btn-floating' );

  // show tooltip
  $links.on( 'click', function ( event ) {
    removeEventDefault( event );

    // current tooltip
    var $funcTooltips = $( this ).next( FUNC_TOOLTIPS );

    // close all other tooltips
    $( FUNC_TOOLTIPS )
      .filter(function () { return this != $funcTooltips[0] })
      .addClass( 'hide' ); 

    // toggle current tooltip
    $funcTooltips.toggleClass( 'hide', !$funcTooltips.hasClass( 'hide' ) )
  } );

  // close tooltip
  $( FUNC_TOOLTIPS + ' .close' ).on( 'click', function( event ) {
    removeEventDefault( event );

    $( this ).closest( FUNC_TOOLTIPS ).addClass( 'hide' );
  });
} );

// ---------- emoji method to tooltips  ----
// -----------------------------------------

$( function () {
  var $emoji = $( '.emoji' ).get();
  var emojisData = [
    {
      id: 'amusiert',
      name: 'Amusiert',
      clicked: 45
    },
    {
      id: 'shokiert',
      name: 'Shokiert',
      clicked: 345
    },
    {
      id: 'traurig',
      name: 'Traurig',
      clicked: 45
    },
    {
      id: 'wutend',
      name: 'Wutend',
      clicked: 11
    },
    {
      id: 'erschreckt',
      name: 'Erschreckt',
      clicked: 24
    },
    {
      id: 'informiert',
      name: 'Informiert',
      clicked: 256
    },
    {
      id: 'langweilich',
      name: 'Langweilich',
      clicked: 0
    },
    {
      id: 'egal',
      name: 'Egal',
      clicked: 234
    }
  ];

  $emoji.map( function ( elemName ) {
    var $elemName = $( elemName );

    emojisData.map( function ( elemData ) {
      if ( $elemName.data( 'name' ) === elemData.id ) {
        $elemName.attr( 'data-tooltip', elemData.clicked + ' </br> ' + elemData.name );
      }
    } );
  } );
  $( $emoji ).on( 'click', function ( event ) {
    removeEventDefault( event );
    var $elemClicked = $( this );

    emojisData.map( function ( elemData ) {
      if ( $elemClicked.data( 'name' ) === elemData.id ) {
        var tooltipId = $elemClicked.data( 'tooltip-id' );

        if ( !elemData.clickedPrev || elemData.clickedPrev === elemData.clicked ) {
          if ( elemData.clickedPrev === 0 && elemData.clicked > 0 ) {
            elemData.clicked = elemData.clicked - 1;
            elemData.clickedPrev = elemData.clicked;
          } else {
            elemData.clicked = elemData.clicked + 1;
            elemData.clickedPrev = elemData.clicked - 1;
          }
          $( '#' + tooltipId ).find( 'span' ).html( elemData.clicked + ' </br> ' + elemData.name );
        } else {
          elemData.clicked = elemData.clicked - 1;
          elemData.clickedPrev = elemData.clicked;
          $( '#' + tooltipId ).find( 'span' ).html( elemData.clicked + ' </br> ' + elemData.name );
        }
      }
    } );
  } );
} );
