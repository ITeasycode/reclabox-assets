$(function () {

  var methods = {
    init: function ( options ) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false
      };
      options = $.extend( defaults, options );

      $( this ).each( function () {
        var $this = $( this );
        var menu_id = $( "#" + $this.attr( 'data-activates' ) );

        // Set to width
        if ( options.menuWidth != 300 ) {
          menu_id.css( 'width', options.menuWidth );
        }

        if ( options.edge == 'left' ) {
          menu_id.css( 'transform', 'translateX(-100%)' );
        } else {
          menu_id.addClass( 'right-aligned' ) // Change text-alignment to right
            .css( 'transform', 'translateX(100%)' );
        }

        // If fixed sidenav, bring menu out
        if ( menu_id.hasClass( 'fixed' ) ) {
          if ( window.innerWidth > 992 ) {
            menu_id.css( 'transform', 'translateX(0)' );
          }
        }

        // Window resize to reset on large screens fixed
        if ( menu_id.hasClass( 'fixed' ) ) {
          $( window ).resize( function () {
            if ( window.innerWidth > 992 ) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ( menuOut ) {
                removeMenu( true );
              }
              else {
                // menu_id.removeAttr('style');
                menu_id.css( 'transform', 'translateX(0%)' );
                // menu_id.css('width', options.menuWidth);
              }
            }
            else if ( menuOut === false ) {
              if ( options.edge === 'left' ) {
                menu_id.css( 'transform', 'translateX(-100%)' );
              } else {
                menu_id.css( 'transform', 'translateX(100%)' );
              }

            }

          } );
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if ( options.closeOnClick === true ) {
          menu_id.on( "click.itemclick", "a:not(.collapsible-header)", function () {
            removeMenu();
          } );
        }

        function removeMenu( restoreNav ) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $( 'body' ).css( {
            overflow: '',
            width: ''
          } );

          if ( options.edge === 'left' ) {
            // Reset phantom div
            menu_id.velocity(
              { 'translateX': '-100%' },
              {
                duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function () {
                  if ( restoreNav === true ) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr( 'style' );
                    menu_id.css( 'width', options.menuWidth );
                  }
                }

              } );
          }
          else {
            // Reset phantom div
            menu_id.velocity(
              { 'translateX': '100%' },
              {
                duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function () {
                  if ( restoreNav === true ) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr( 'style' );
                    menu_id.css( 'width', options.menuWidth );
                  }
                }
              } );
          }
          $( 'body' ).removeClass( 'onSlideNav' );
        }

        function containerIndent() {
          if ( !$( 'body' ).hasClass( 'onSlideNav' ) ) {
            $( 'body' ).addClass( 'onSlideNav' );
          }
        }

        // Touch Event
        var panning = false;
        var menuOut = false;


        $this.click( function () {
          if ( menuOut === true ) {
            menuOut = false;
            panning = false;
            removeMenu();
          } else {
            // Disable ScrollSpying

            var $body = $( 'body' );
            var oldWidth = $body.innerWidth();
            containerIndent()

            // Push current drag target on top of DOM tree

            if ( options.edge === 'left' ) {
              menu_id.velocity( { 'translateX': [ 0, -1 * options.menuWidth ] }, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              } );
            } else {
              menu_id.velocity( { 'translateX': [ 0, options.menuWidth ] }, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad'
              } );
            }

            menuOut = true;
            panning = false;
          }

          return false;
        } );
      } );


    },
    show: function () {
      this.trigger( 'click' );
    },
    hide: function () {
      $( '#sidenav-overlay' ).trigger( 'click' );
    }
  };


  $.fn.slideNav = function ( methodOrOptions ) {
    if ( methods[ methodOrOptions ] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.slideNav' );
    }
  }; // Plugin end
});
