$( function () {
  var $helpMenu = $( '#helpMenu' );
  var $helpContainerItems = $( '#helpContainerItems > div' ).get();
  var offsetHelpMenu = $helpMenu.offset();
  var cloneMenu = $helpMenu.clone();
  var showTrue, windScroll, elOffset = [], arrayElPosition, activeLink, arrayActiveEl, arrayId;

  cloneMenu.addClass( 'clone-menu fixid-menu' );

  arrayId = $helpContainerItems.map( function(element, idx ) {
    var id = '#' + $( element ).attr( 'id' );
    return id;
  } );

  arrayElPosition = arrayId.map( function(element, idx) {
    elOffset = {
      id: idx,
      el: element,
      elPosition: $( element ).offset()
    };

    return elOffset;
  } );

  function activeMenuItem( arg ) {
    if ( arg ) {
      arg.map(function( element, idx ) {
        if ( element.elPosition.top < ( windScroll + 100 ) ) {
          arrayActiveEl = element.el;
        }
      } );

      activeLink = $( 'a[href= "' + arrayActiveEl + '"]' ).parent( 'li' );
      $helpMenu.find( 'li.active' ).removeClass( 'active' );
      cloneMenu.find( 'li.active' ).removeClass( 'active' );
      activeLink.addClass( 'active' );
    }
  }

  function helpMenuScroll( arg ) {
    if ( arg > offsetHelpMenu.top ) {
      return true;
    } else {
      return false;
    }
  }

  function showCloneMenu( arg ) {
    if ( arg ) {
      $helpMenu.addClass( 'hide' );
      $( 'body' ).append( cloneMenu );
      cloneMenu.css( {
        'left': offsetHelpMenu.left
      } );
    } else {
      $helpMenu.removeClass( 'hide' );
      $( '.clone-menu' ).remove();
    }
    return false;
  }

  if ( $( 'div' ).is( '#helpMenu' ) ) {
    windScroll = $( window ).scrollTop();
    showTrue = helpMenuScroll( windScroll );

    if ( showTrue ) {
      showCloneMenu( showTrue );
      activeMenuItem( arrayElPosition );
    }

    $( window ).scroll(function () {
      windScroll = $( window ).scrollTop();
      showTrue = helpMenuScroll( windScroll );
      showCloneMenu( showTrue );
      activeMenuItem( arrayElPosition );
    } );

    $( document ).on('click', 'a[href^="#"]', function( event ) {
      removeEventDefault( event );
      var linkHrefId = $( this ).attr( 'href' );
      $( 'html, body' ).animate( { scrollTop: $( linkHrefId ).offset().top - 20 } );
    } );
  }
} );
