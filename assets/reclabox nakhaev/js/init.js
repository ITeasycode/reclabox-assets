(function($){

  $(function(){

    var $uploaded_items = $('.uploaded-item'),
        $card_comment = $('.card-comment');

    $('select').material_select();

    $('#textarea1').trigger('autoresize');

    $('.button-collapse').slideNav();
    $('.slider-post').slider({height : 300});

    $(".regular1").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".regular2").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });

    $('ul#navHeader').navTheme({fixedItems: true, indentItem: 50});
    $('ul#navTop').navTheme();
    $('ul#navContent').navTheme({fixedItems: true});


    

    // function nav_content (argument) {
    //   var $this = argument;
    //     console.log($this);

    //     function countingWidth(elements) {
    //       var $width_container = 0;

    //       $(elements).each(function(index, el) {
    //         var $el_width = $(el).width();

    //         if ( $el_width > 0 ) {
    //           $width_container = $width_container + ($el_width + 20);
    //         }
            
    //       });

    //       return $width_container;

    //     };

    //   $this.parent('.nav-wrapper').css('width', countingWidth( $this.find('li a') ));
      
    // }

    // nav_content($('ul#navContent'));


    $('.tooltipped').tooltip({delay: 50, position: 'top'});

    $('.button-collapse').slideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
        

    $uploaded_items.find('img').each(function () {
      var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      if ($(this).attr('src') !== placeholderBase64) {
        $(this).css({
          'background-image' : 'url(' + $(this).attr('src') + ')',
          'background-size' : 'cover'
        });
        $(this).attr('src', placeholderBase64);
      }
    });

    $card_comment.hover(function() {
      $(this).find('.report-alert a.hide').removeClass('hide');
    }, function() {
      $(this).find('.report-alert a').addClass('hide');
    });

    function removeEventDefult(event){
      event = event || window.event;

      if (event.preventDefault) { // если метод существует
        event.preventDefault(); // то вызвать его
      } else { // иначе вариант IE8-:
        event.returnValue = false;
      }
    }

    function focusedSerchInput() {
      if ($('input:focus')) {
        // statement
        $('.search-widget').addClass('focused');
      } else {
        $('.search-widget').removeClass('focused');
      }
    }

    $('.search-button').click(function(event) {
      /* Act on the event */
      removeEventDefult(event)

      $('body').addClass('search-open');
      $('#search-input').focus();
      $('.search-widget').addClass('focused');
    });

    $('.search-close-button').click(function(event) {
      /* Act on the event */
      removeEventDefult(event)
      $('.search-widget').removeClass('focused');
      $('body').removeClass('search-open');
    });

    $('#search-input').focusout(function(event) {
      /* Act on the event */
      $('.search-widget').removeClass('focused');
    });
    $('#search-input').focus(function(event) {
      $('.search-widget').addClass('focused');
    });
    $('#search-input').on('input keyup', function(eventObject) {
        var number = $(this).val().length;

        if(number === 0) {
          $('.search-widget').removeClass('text-entered');
        } else {
          $('.search-widget').addClass('text-entered');
        }
        
    });
    
    

    $('.button-collapse').click(function(event) {
      /* Act on the event */
      removeEventDefult(event);
      if (!$(this).hasClass('active')) {
        // statement
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });


    var $rating = $('.rating'),
        $ratingText = $('.rating-text');

        $rating.find('a').hover(function() {
          $ratingText.empty();
          $ratingText.html($(this).attr('title'));
        }, function() {
          $ratingText.html($(this).attr('title'));
        });
        


    // var corouselItems = $(".carousel-item"),
    // 	indicatorItems = $(".indicator-item"),
    // 	iframeIconHtml = '<i class="material-icons">play_circle_filled</i>',
    // 	imgItems = [];

    // corouselItems.each(function(index, el) {

    // 	if ($(el).children().length > 1) {
    // 		imgItems[index] = $(el).children("img").attr('data-iframe', 'true');
    // 	} else {
    // 		imgItems[index] = $(el).children().clone();
    // 	}

    // });

    // indicatorItems.each(function(index, el) {
    // 	$(el).append(imgItems[index]);
    // });

    // $('[data-iframe=true]').after(iframeIconHtml);
    

    // indicatorItems.click(function(e) {
    // 	/* Act on the event */
    // 	e.preventDefault();
    // 	e.stopPropagation();
    // 	var 
    // 		prevIndicatirItem = $(this).prevAll(),
    // 		detachPrevItem;

    // 		prevIndicatirItem.hide('600', function() {
    // 			if($(this).css('display', 'none')) {
    // 				detachPrevItem = prevIndicatirItem.detach();

    // 				$(".indicators").append(function() {
    // 					return detachPrevItem.show("600");
    // 				});
    // 			}
    // 		});	

    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space

;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menu_id = $("#"+ $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 300) {
          menu_id.css('width', options.menuWidth);
        }

        if (options.edge == 'left') {
          menu_id.css('transform', 'translateX(-100%)');
        } else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
            .css('transform', 'translateX(100%)');
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu_id.css('transform', 'translateX(0)');
            }
          }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if (menuOut) {
                removeMenu(true);
              }
              else {
                // menu_id.removeAttr('style');
                menu_id.css('transform', 'translateX(0%)');
                // menu_id.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left') {
                menu_id.css('transform', 'translateX(-100%)');
              } else {
                menu_id.css('transform', 'translateX(100%)');
              }

            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          if (options.edge === 'left') {
            // Reset phantom div
            menu_id.velocity(
              {'translateX': '-100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            menu_id.velocity(
              {'translateX': '100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu_id.removeAttr('style');
                    menu_id.css('width', options.menuWidth);
                  }
                }
              });
          }
          $('body').removeClass('onSlideNav');
        }

        function containerIndent() {
          if (!$('body').hasClass('onSlideNav')) {
            $('body').addClass('onSlideNav');
          }
        }

        // Touch Event
        var panning = false;
        var menuOut = false;


        $this.click(function() {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          }
          else {
            // Disable ScrollSpying
            
            var $body = $('body');
            var oldWidth = $body.innerWidth();
            containerIndent()

            // Push current drag target on top of DOM tree

            if (options.edge === 'left') {
              menu_id.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else {
              menu_id.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }

            menuOut = true;
            panning = false;
          }

          return false;
        });
      });


    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


    $.fn.slideNav = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.slideNav' );
      }
    }; // Plugin end
}( jQuery ));

;(function ( $ ) {
  var methods = {
    init : function(options) {
      var defaults = {
        onShow: null,
        fixedItems: false,
        indentItem: 20
      };
      options = $.extend(defaults, options);

      return this.each(function() {

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      $this.width('100%');
      
      var $active, $content, $links = $this.find('li a'),
          $links_length = $links.length,
          $this_width = $this.width(),
          $nav_wrap = $this.parent(),
          $index = 0,
          indent_all_links, i_w;



      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter());

      function countingWidth(elements) {
        var $width_container = 0;

        $(elements).each(function(index, el) {
          var $el_width = $(el).width();

          if ( $el_width > 0 ) {
            $width_container = $width_container + $el_width;
          }
          
        });

        return $width_container;

      };

      // click nav-btn-content
      function onClickBtnSlide() {
        // body... 
        $('.nav-btn-slide').on('click', function(event) {
          event.preventDefault();
          /* Act on the event */
          if ($nav_wrap.position().left >= 0) {
            var left_nav_wrapper = $this.width() - ($nav_wrap.parent().innerWidth() - 50);
            $nav_wrap.velocity({"left": -left_nav_wrapper}, {duration: 300, queue: false, easing: 'easeOutQuad'});
          } else {
            $nav_wrap.velocity({"left": 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
        });
      }

      // Width items li > a
      i_w = countingWidth($this.find('li a'));

      if (options.fixedItems) {
        $nav_wrap.width(i_w + ($links_length * options.indentItem) );
        indent_all_links = $this.width() - i_w;
        onClickBtnSlide();
      } else {
        indent_all_links = $this_width - i_w;
      }

      console.log(indent_all_links)
      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
        $active = $(this).find('li a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li a').first();
      }

      $active.addClass('active');
      $index = $links.index($active);
      if ($index < 0) {
        $index = 0;
      }

      if ($active[0] !== undefined) {
        $content = $($active[0].hash);
      }

      // append indicator then set indicator width to tab width
      $this.append('<div class="indicator"></div>');
      var $indicator = $this.find('.indicator');

      $indicator.css('width', $active.width());

      if ($this.is(":visible")) {
        if ($index === 0) {
          $indicator.css({"left": ($active.parent('li').outerWidth() - $active.width()) / 2 });
        } else if ($index > 0) {
          $indicator.css({"left": $active.parent('li').position().left + ( ($active.parent('li').outerWidth() - $active.width()) / 2 ) });
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
      $links.not($active).each(function () {
        $(this.hash).hide();
      });



      // Bind the click event handler
      $this.on('click', 'a', function(e) {
        if ($(this).parent().hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!$(this).attr("target")) {
          return;
        }

        $this_width = $this.width();

        // Make the old tab inactive.
        $active.removeClass('active');

        if ($content !== undefined) {
          $content.hide();
        }

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);
        $links = $this.find('li a');

        $indicator.css('width', $active.width());

        var $active_parent = $active.parent('li'),
            $active_parent_prevAll = $active_parent.prevAll('li'),
            $active_parent_prevAll_width = countingWidth($active_parent_prevAll),
            active_left_position = ($active_parent_prevAll_width + ((indent_all_links / $links_length) / 2));

        // Make the tab active.
        $active.addClass('active');
        var $prev_index = $index;
        $index = $links.index($(this));
        if ($index < 0) {
          $index = 0;
        }

        // Change url to current tab
        // window.location.hash = $active.attr('href');

        if ($content !== undefined) {
          $content.show();
          if (typeof(options.onShow) === "function") {
            options.onShow.call(this, $content);
          }
        }

        // Update indicator
        if (($index - $prev_index) >= 0) {
          $indicator.velocity({"left": active_left_position}, {duration: 300, queue: false, easing: 'easeOutQuad'});
        }
        else {
          $indicator.velocity({"left": active_left_position}, { duration: 300, queue: false, easing: 'easeOutQuad'});
        }

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.navTheme = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  };
})(jQuery);