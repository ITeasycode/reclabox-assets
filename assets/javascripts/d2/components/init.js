// ------------ init components ------------
// -----------------------------------------

// Page preloader
// ---------------------------------------
window.addEventListener('load', function() {
  $('#page_preloader').fadeOut('fast', function() {
    $(this).remove();
  });
});

// Set mask only letters and numbers
// ---------------------------------------
window.maskOnlyLettersAndNumbers = function(selector) {
  if (!selector) return console.error('maskOnlyLettersAndNumbers: No selector specified');

  var url = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.14/jquery.mask.min.js';

  function _mask() {
    $(selector).mask('Z', {
      translation: {
        'Z': {
          pattern: /[a-zA-Z0-9]/,
          recursive: true
        }
      }
    });
  }

  $.fn.mask ? _mask() : $.getScript(url).done(_mask)
}

$( function () {
  // ------------ init components ----------

  $('.js-clamp').clamp();

  // Forms
  // ---------------------------------------
  $( 'select' ).material_select();
  $( '#textarea1' ).trigger( 'autoresize' );
  $( 'input[type="text"]' ).characterCounter();

  // Nav Button dropdown
  // -------------------------------------
  $(document).delegate('.nav-dropdown-button', 'click', function() {
    if (!$(this).data('hasDropdown')) {
      $(this).dropdown({
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
      });

      $(this).data('hasDropdown', true).click();
    }
  });

  // Slide Nav
  // ----------------------------------------
  $( '.button-collapse' ).slideNav( {
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  } );

  // Slider
  // ----------------------------------------
  $( '.slider-post' ).slider( { height: 400, autoScroll: false } );

  // Slick
  // ----------------------------------------
  $( "#topBeschwerden" ).slick( {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" data-role="none" class="slick-prev btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Previous" tabindex="0" role="button"><i class="material-icons">arrow_back</i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Next" tabindex="0" role="button"><i class="material-icons">arrow_forward</i></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  } );
  $( "#neuesteBeschwerden" ).slick( {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" data-role="none" class="slick-prev btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Previous" tabindex="0" role="button"><i class="material-icons">arrow_back</i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Next" tabindex="0" role="button"><i class="material-icons">arrow_forward</i></button>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  } );

  // Modal
  // -----------------------------------
  var MODAL_CONTAINER = '.modal-container'

  $( '.modal' ).modal( {
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      var $modalContainer = modal.closest( MODAL_CONTAINER );

      $modalContainer
        .addClass('modal-open')
        .css('z-index', modal.css('z-index'));

      $modalContainer[0].scrollTop = 0 // reset scroll

      $(document).resize(); // Trigger elements

      // regelbox modal
      if ( this.id == 'regelbox' ) {
        var articleId = trigger.data('articleId'),
            articleType = trigger.data('articleType');
      
        if (!!articleId && !!articleType) {
          $('#regelbox_article_id').val(articleId)
          $('#regelbox_article_type').val(articleType)
        } else {
          console.error('Missing article id or type')
        }
      }
    },
    complete: function(modal) {
      modal.closest( MODAL_CONTAINER ).removeClass('modal-open');

      // solvebox modal
      if ( this.id == 'solvebox' ) {
        $('#solve_form')[0].reset();
        $('#error_messages_solve').empty();
        $('#start_typing_solve').height('1.8rem').blur();
      }
    }
  } );

  // close modal by container
  $( MODAL_CONTAINER ).on( 'click', function(e) {
    if ( $(e.target).hasClass( MODAL_CONTAINER.substr(1) ) ) {
      $('.modal-overlay').click();
    }
  });

  // Tooltip
  // -----------------------------------
  window.initTooltips = function () {
    $( '.tooltipped' ).tooltip( { delay: 50, position: 'top' } );
  }

  initTooltips();

  // Methods
  // - Image adjustment
  // - Card comment hover
  // - Rating
  // - Button collapse
  // -----------------------------------

  // Variables
  // -----------------------------------
  var $uploaded_items = $( '.uploaded-item' ),
      $card_comment = $( '.card-comment' );

  // Image adjustment method
  // -----------------------------------
  $uploaded_items.find( 'img' ).each( function () {
    var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    if ( $( this ).attr( 'src' ) !== placeholderBase64 ) {
      $( this ).css( {
        'background-image': 'url(' + $( this ).attr( 'src' ) + ')',
        'background-size': 'cover'
      } );
      $( this ).attr( 'src', placeholderBase64 );
    }
  } );

  // Card comment hover
  // ------------------------------------
  $card_comment.hover( function () {
    $( this ).find( '.report-alert a.hide' ).removeClass( 'hide' );
  }, function () {
    $( this ).find( '.report-alert a' ).addClass( 'hide' );
  } );

  $( 'a[href="#USER-MITGLIEDSCHAFT"]' ).click( function () {
    $( '.user' ).removeClass( 'hide' );
    $( '.firm' ).addClass( 'hide' );
  } )
  $( 'a[href="#FIRMA-MITGLIEDSCHAFT"]' ).click( function () {
    $( '.firm' ).removeClass( 'hide' );
    $( '.user' ).addClass( 'hide' );
  } )

  // Rating methods
  // ------------------------------------
  var $rating = $( '.rating' ),
    $ratingText = $( '.rating-text' );

  $rating.find( 'a' ).hover( function () {
    $ratingText.empty();
    $ratingText.html( $( this ).attr( 'title' ) );
  }, function () {
    $ratingText.html( $( this ).attr( 'title' ) );
  } );

  $rating.find( 'a' ).on( 'click', function ( event ) {
    removeEventDefault( event );
    var $this = $( this );
    $this.addClass( 'star-scale' );
    setTimeout( function () {
      $this.removeClass( 'star-scale' );
    }, 400 );
  } );

  // Button collapse
  // -------------------------------------
  $( '.button-collapse' ).click( function ( event ) {
    /* Act on the event */
    removeEventDefault( event );
    if ( !$( this ).hasClass( 'active' ) ) {
      // statement
      $( this ).addClass( 'active' );
    } else {
      $( this ).removeClass( 'active' );
    }
  } );

  // Newsletter emails modals
  // -------------------------------------
  $('.js-toggle-subscribe-tab').on('click', function(e) {
    removeEventDefault(e);
    $('#userUnsubscribeTabContent, #userSubscribeTabContent').toggleClass('hide');
  });
} ); // end of document ready
