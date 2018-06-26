$( function () {
  var methods = {
    init: function () {
      function autoClamp () {
        var breadcrumbHeight = $(this).find('.breadcrumb-wrapper').outerHeight(true),

            $title           = $(this).find('.card-title'),
            $titleLink       = $title.find('.title-link'),
            titleHeight      = $title.outerHeight(true),
            titleWords       = $titleLink.text().split(' '),

            $desc            = $(this).find('> p'),
            descHeight       = $desc.height(),
            descWords        = $desc.text().split(' '),

            outputHeight     = this.offsetHeight - (breadcrumbHeight + titleHeight);

        while( $titleLink[0].offsetHeight > titleHeight ) {
          titleWords.pop();
          $titleLink.text(titleWords.join(' ') + ' ...');
        }

        while( $desc[0].scrollHeight > outputHeight ) {
          descWords.pop();
          $desc.text(descWords.join(' ') + ' ...');
        }
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
