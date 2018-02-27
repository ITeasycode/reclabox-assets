(function ( $ ) {
  $( function () {
    var methods = {
      init: function ( options ) {
        var defaults = {
          cardElem: $( this ).find( '.card-title a.title-link' ).get(),
          content: $( this ).find( '.card-content p' ).get(),
          limitSignsForTitle: 55,
          limitSignsForContent: 55
        };
        options = $.extend( defaults, options );

        function сontentProcessing(htmlTitleLink, htmlContent, limitSignsForTitle, limitSignsForContent) {
          var $htmlTitleLink = $( htmlTitleLink ),
            $htmlContent = $( htmlContent ),
            limitContent = ( $htmlContent.text().length / 2 ) - 3;


          if ( $htmlTitleLink.text().length >= limitSignsForTitle ) {
            $htmlTitleLink.text( $htmlTitleLink.text().substring( 0, limitSignsForTitle - 3 ) + '...' );
            $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent / 1.5 ) + '...' );
          } else if ( $htmlTitleLink.text().length < ( limitSignsForTitle / 2 ) ) {
            $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent - 3 ) + '...' );
          } else if ( $htmlTitleLink.text().length < limitSignsForTitle && $htmlTitleLink.text().length > ( limitSignsForTitle / 2 ) ) {
            $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent / 1.5 ) + '...' );
          }
        }

        $( this ).each( function () {
          if (options.cardElem.length === 1) {
            if (options.content.length !== 1) {
              сontentProcessing(options.cardElem, options.content[0], options.limitSignsForTitle, options.limitSignsForContent);
            } else {
              сontentProcessing(options.cardElem, options.content, options.limitSignsForTitle, options.limitSignsForContent);
            }
          } else {
            options.cardElem.map(function(element, i) {
              сontentProcessing(options.cardElem[i], options.content[i], options.limitSignsForTitle, options.limitSignsForContent);
            });
          }
        } );
      }
    };

    $.fn.limitationOutputChareacters = function ( methodOrOptions ) {
      if ( methods[ methodOrOptions ] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
      } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.limitationOutputChareacters' );
      }
    }; // Plugin end
  } );
})( jQuery );
