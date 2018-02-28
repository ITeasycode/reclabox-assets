// ------------ init components ------------
// -----------------------------------------
$( function () {

  // ------------ init components ----------
  $( '.hot-story' ).limitationOutputChareacters( { limitSignsForTitle: 86, limitSignsForContent: 327 } );
  $( '#topBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 94, limitSignsForContent: 135 } );
  $( '#neuesteBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 154, limitSignsForContent: 225 } );
  // Forms
  // ---------------------------------------
  $( 'select' ).material_select();
  $( '#textarea1' ).trigger( 'autoresize' );

  $( 'input[type = "text"]' ).characterCounter();

  var $pageWrite = $( '.page-write' );
  var $slideInput = $pageWrite.find( '#slide-input' );

  $slideInput.removeClass( 'hide' ).slideUp( 'slow' ).addClass( 'hide' );

  $pageWrite.find( '.btn' ).click( function ( event ) {
    var id = $( this ).attr( 'href' );
    if ( id === '#slide-input' ) {
      // statement
      removeEventDefault( event );

      if ( $( id ).hasClass( 'hide' ) ) {
        $( id ).removeClass( 'hide' ).slideDown( 'slow' );
      } else {
        $( id ).slideUp( 'slow', function () {
          $( this ).addClass( 'hide' );
        } );
      }
    }
  } );

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
  // TODO
  // var MODAL_CONTAINER = '.modal-container'

  $( '.modal' ).modal( {
    ending_top: '3%',
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      // TODO
      // var $modalContainer = modal.closest( MODAL_CONTAINER );

      // $modalContainer
      //   .addClass('modal-open')
      //   .css('z-index', modal.css('z-index'));

      $(document).resize(); // Trigger elements
    },
    complete: function(modal) {
      // TODO
      // modal.closest( MODAL_CONTAINER ).removeClass('modal-open');
    }
  } );

  // TODO
  // clsoe modal by container
  // $( MODAL_CONTAINER ).on( 'click', function(e) {
  //   if ( $(e.target).hasClass( MODAL_CONTAINER.substr(1) ) ) {
  //     $('.modal-overlay').click();
  //   }
  // });

  // Tooltip
  // -----------------------------------
  $( '.tooltipped' ).tooltip( { delay: 50, position: 'top' } );

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
