(function($){

  $(function(){

    $('.button-collapse').sideNav();
    $('.slider').slider();

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

    $('ul#navTop').navTop();
    $('.tooltipped').tooltip({delay: 50, position: 'top'});

    var corouselItems = $(".carousel-item"),
    	indicatorItems = $(".indicator-item"),
    	iframeIconHtml = '<i class="material-icons">play_circle_filled</i>',
    	imgItems = [];

    corouselItems.each(function(index, el) {

    	if ($(el).children().length > 1) {
    		imgItems[index] = $(el).children("img").attr('data-iframe', 'true');
    	} else {
    		imgItems[index] = $(el).children().clone();
    	}

    });

    indicatorItems.each(function(index, el) {
    	$(el).append(imgItems[index]);
    });

    $('[data-iframe=true]').after(iframeIconHtml);
    

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

;(function ( $ ) {
  var methods = {
    init : function(options) {
      var defaults = {
        onShow: null
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
          $tabs_width = $this.width(),
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links_length,
          $index = 0,
          $width_all_links = 0;

      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter());

      $this.find('li a').each(function(index, el) {
        var $el_width = $(el).width();
            
            if ( $el_width > 0 ) {
              $width_all_links = $width_all_links + $el_width;
            }

            return $width_all_links;
      });


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

      const indent_all_links = $tabs_width - $width_all_links;



      if ($this.is(":visible")) {
        $indicator.css({"right": ($tabs_width - $active.width()) - (Math.ceil(indent_all_links / $links_length) / 2) });
        $indicator.css({"left": Math.ceil(indent_all_links / $links_length) / 2 });
      }
      // $(window).resize(function () {
      //   $tabs_width = $this.width();
      //   $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links_length;
      //   if ($index < 0) {
      //     $index = 0;
      //   }
      //   if ($tab_width !== 0 && $tabs_width !== 0) {
      //     $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
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

        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links_length;

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
            $active_parent_width = $active_parent.width(),
            $active_parent_prevAll_width = null;

        $active_parent_prevAll.each(function(index, el) {
          var $el_width = $(el).width();

              
              if ( $el_width > 0 ) {
                $active_parent_prevAll_width = $active_parent_prevAll_width + $el_width;
              }
              
              return $active_parent_prevAll_width;
        });

        

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

          $indicator.velocity({"right": ($tabs_width - ($active_parent_prevAll_width + (Math.ceil(indent_all_links / $links_length) / 2) + $active.width()))}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": ($active_parent_prevAll_width + (Math.ceil(indent_all_links / $links_length) / 2))}, {duration: 300, queue: false, easing: 'easeOutQuad'});

        }
        else {
          $indicator.velocity({"left": ($active_parent_prevAll_width + (Math.ceil(indent_all_links / $links_length) / 2))}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": ($tabs_width - ($active_parent_prevAll_width + (Math.ceil(indent_all_links / $links_length) / 2) + $active.width()))}, {duration: 300, queue: false, easing: 'easeOutQuad'});
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

  $.fn.navTop = function(methodOrOptions) {
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