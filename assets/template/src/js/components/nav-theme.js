;(function ( $ ) {
    var methods = {
        init: function ( options ) {
            var defaults = {
                    onShow: null,
                    fixedItems: false,
                    indentItem: 20
                },
                options = $.extend( defaults, options );

            return this.each( function () {

                // For each set of tabs, we want to keep track of
                // which tab is active and its associated content
                var $this = $( this );

                $this.width( '100%' );

                var $active, $content, $links = $this.find( 'li a' ),
                    $links_length = $links.length,
                    $this_width = $this.width(),
                    $nav_wrap = $this.parent(),
                    $index = 0,
                    indent_all_links, i_w;


                // If the location.hash matches one of the links, use that as the active tab.
                $active = $( $links.filter() );

                function countingWidth( elements ) {
                    var $width_container = 0;

                    $( elements ).each( function ( index, el ) {
                        var $el_width = $( el ).width();

                        if ( $el_width > 0 ) {
                            $width_container = $width_container + $el_width;
                        }

                    } );

                    return $width_container;
                }

                // click nav-btn-content
                function onClickBtnSlide() {
                    $( '.nav-btn-slide' ).on( 'click', function ( event ) {
                        event.preventDefault();
                        if ( $nav_wrap.hasClass( 'nav-wrapper' ) ) {
                            if ( $nav_wrap.position().left >= 0 ) {
                                var left_nav_wrapper = $this.width() - ($nav_wrap.parent().innerWidth() - 50);
                                $nav_wrap.velocity( { "left": -left_nav_wrapper }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                            } else {
                                $nav_wrap.velocity( { "left": 0 }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                            }
                        }
                    } );
                }

                // Width items li > a
                i_w = countingWidth( $this.find( 'li a' ) );

                if ( options.fixedItems ) {
                    $nav_wrap.width( i_w + ($links_length * options.indentItem) );
                    indent_all_links = $this.width() - i_w;
                    onClickBtnSlide();
                } else {
                    indent_all_links = $this_width - i_w;
                }

                // If no match is found, use the first link or any with class 'active' as the initial active tab.
                if ( $active.length === 0 ) {
                    $active = $( this ).find( 'li a.active' ).first();
                }
                if ( $active.length === 0 ) {
                    $active = $( this ).find( 'li a' ).first();
                }

                $active.addClass( 'active' );
                $index = $links.index( $active );
                if ( $index < 0 ) {
                    $index = 0;
                }

                if ( $active[ 0 ] !== undefined ) {
                    $content = $( $active[ 0 ].hash );
                }

                // append indicator then set indicator width to tab width
                $this.append( '<div class="indicator"></div>' );
                var $indicator = $this.find( '.indicator' );

                $indicator.css( 'width', $active.width() );

                if ( $this.is( ":visible" ) ) {
                    if ( $index === 0 ) {
                        $indicator.css( { "left": ($active.parent( 'li' ).outerWidth() - $active.width()) / 2 } );
                    } else if ( $index > 0 ) {
                        $indicator.css( { "left": $active.parent( 'li' ).position().left + ( ($active.parent( 'li' ).outerWidth() - $active.width()) / 2 ) } );
                    }
                }
                // $(window).resize(function () {
                //   $this_width = $this.width();
                //   $tab_width = Math.max($this_width, $this[0].scrollWidth) / $links_length;
                //   if ($index < 0) {
                //     $index = 0;
                //   }
                //   if ($tab_width !== 0 && $this_width !== 0) {
                //     $indicator.css({"right": $this_width - (($index + 1) * $tab_width)});
                //     $indicator.css({"left": $index * $tab_width});
                //   }
                // });

                // Hide the remaining content
                $links.not( $active ).each( function () {
                    $( this.hash ).hide();
                } );


                // Bind the click event handler
                $this.on( 'click', 'a', function ( e ) {
                    if ( $( this ).parent().hasClass( 'disabled' ) ) {
                        e.preventDefault();
                        return;
                    }

                    // Act as regular link if target attribute is specified.
                    if ( !!$( this ).attr( "target" ) ) {
                        return;
                    }

                    $this_width = $this.width();

                    // Make the old tab inactive.
                    $active.removeClass( 'active' );

                    if ( $content !== undefined ) {
                        $content.hide();
                    }

                    // Update the variables with the new link and content
                    $active = $( this );
                    $content = $( this.hash );
                    $links = $this.find( 'li a' );

                    $indicator.css( 'width', $active.width() );

                    var $active_parent = $active.parent( 'li' ),
                        $active_parent_prevAll = $active_parent.prevAll( 'li' ),
                        $active_parent_prevAll_width = countingWidth( $active_parent_prevAll ),
                        active_left_position = ($active_parent_prevAll_width + ((indent_all_links / $links_length) / 2));

                    // Make the tab active.
                    $active.addClass( 'active' );
                    var $prev_index = $index;
                    $index = $links.index( $( this ) );
                    if ( $index < 0 ) {
                        $index = 0;
                    }

                    // Change url to current tab
                    // window.location.hash = $active.attr('href');

                    if ( $content !== undefined ) {
                        $content.show();
                        if ( typeof(options.onShow) === "function" ) {
                            options.onShow.call( this, $content );
                        }
                    }

                    // Update indicator
                    if ( ($index - $prev_index) >= 0 ) {
                        $indicator.velocity( { "left": active_left_position }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                    }
                    else {
                        $indicator.velocity( { "left": active_left_position }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                    }

                    // Prevent the anchor's default click action
                    e.preventDefault();
                    var $that = $( this );
                    setTimeout( function () {
                        location.href = $that.attr( 'href' );
                    }, 600 );
                } );
            } );

        },
        select_tab: function ( id ) {
            this.find( 'a[href="#' + id + '"]' ).trigger( 'click' );
        }
    };

    $.fn.navTheme = function ( methodOrOptions ) {
        if ( methods[ methodOrOptions ] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.tooltip' );
        }
    };
})( jQuery );