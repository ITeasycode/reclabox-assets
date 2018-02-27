// ---------- functional tooltips method ---
// -----------------------------------------
$( function () {
  var $links = $( '.links > .btn-floating, .help > .btn-floating' );

  $links.on( 'click', function ( event ) {
    removeEventDefault( event );

    var $funcTooltips = $( this ).next( '.functional-tooltips' );
    var thisPosition = $( this ).position().left;
    console.log('position tooltips', thisPosition);

    if ( $funcTooltips.hasClass( 'hide' ) ) {
      if ( thisPosition !== 0 ) {
        $funcTooltips
          .removeClass( 'hide' )
          .css( 'left', -( thisPosition + 2 ) );
      } else {
        $funcTooltips
          .removeClass( 'hide' );
      }
    } else {
      $funcTooltips.addClass( 'hide' );
    }
  } );
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
