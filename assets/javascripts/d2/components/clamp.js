$( function () {
  var methods = {
    init: function () {
      var SEPARATOR = ' ...';

      function autoClamp () {
        var breadcrumbHeight = $(this).find('.breadcrumb-wrapper').outerHeight(true) || 0,
            $title           = $(this).find('.card-title'),
            $titleLink       = $title.find('.title-link'),
            titleHeight      = $title.outerHeight(true) || 0,
            $desc            = $(this).find('> p, > a'),
            contentHeight    = this.offsetHeight - (breadcrumbHeight + titleHeight);

        $titleLink.each(function(index, el) {
          var titleWords = el.innerHTML.split(' ');

          while( el.offsetHeight > titleHeight ) {
            titleWords.pop();
            el.innerHTML = titleWords.join(' ') + SEPARATOR;
          }
        });

        $desc.each(function(index, el) {
          var descWords = el.innerHTML.split(' ');

          while( el.scrollHeight > contentHeight ) {
            descWords.pop();
            el.innerHTML = descWords.join(' ') + SEPARATOR;
          }
        });
      }

      $( this ).find('.card-content').each( function (index, el) {
        setTimeout(autoClamp.bind(el))
      } );
    }
  };

  $.fn.clamp = function ( methodOrOptions ) {
    if ( methods[ methodOrOptions ] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.clamp' );
    }
  };
} );
