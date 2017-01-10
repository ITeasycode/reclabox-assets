// function remove event default
function removeEventDefault(event){
  event = event || window.event;

  if (event.preventDefault) { // если метод существует
    event.preventDefault(); // то вызвать его
  } else { // иначе вариант IE8-:
    event.returnValue = false;
  }
}

(function($){

  $(function(){

    var $uploaded_items = $('.uploaded-item'),
        $card_comment = $('.card-comment');

    // init components

    $('.modal').modal();

    $('select').material_select();

    $('#textarea1').trigger('autoresize');

    $('.button-collapse').slideNav();
    
    $('.slider-post').slider({height : 400, autoScroll: false});

    $("#topBeschwerden").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });

    $("#neuesteBeschwerden").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });

    $('.modal').modal({
      ending_top: '3%',
    });

    $('ul#navHeader').navTheme({fixedItems: true, indentItem: 50});
    $('ul#navTop').navTheme();
    $('ul#navContent').navTheme({fixedItems: true});

    $('.tooltipped').tooltip({delay: 50, position: 'top'});

    $('.button-collapse').slideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
        
    // Image adjustment method
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
    
    $('a[href="#USER-MITGLIEDSCHAFT"]').click(function() {
      $('.user').removeClass('hide');
      $('.firm').addClass('hide');
    })
    $('a[href="#FIRMA-MITGLIEDSCHAFT"]').click(function() {
      $('.firm').removeClass('hide');
      $('.user').addClass('hide');
    })

    // hover method for rating
    var $rating = $('.rating'),
        $ratingText = $('.rating-text');

        $rating.find('a').hover(function() {
          $ratingText.empty();
          $ratingText.html($(this).attr('title'));
        }, function() {
          $ratingText.html($(this).attr('title'));
        });

    // button collapse
    $('.button-collapse').click(function(event) {
      /* Act on the event */
      removeEventDefault(event);
      if (!$(this).hasClass('active')) {
        // statement
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

// ----------- login form functions -----------
;(function ($) {
  // Methods for testing the validation form
  // - search
  // - password
  var $btnDisabled = $('button.disabled');
  var $passwordLogin = $('#passwordLogin');

  if ($btnDisabled) {
    $btnDisabled[0].onclick = null;
  }

  // ------- password --------
  $passwordLogin.on('input keyup', function(eventObject) {
    var number = $(this).val().length;

    if(number > 5) {
      $btnDisabled.removeClass('disabled');
    } else {
      $btnDisabled.addClass('disabled');
    }
      
  });

  // Methods intercept the request and send an ajax request
  // - event click to button
  // - ajax request and processing request
  var $formLogin = $('.form-login');
  var userEmail, userPassword, btnSubmit, ajaxRequest, dataAjaxRequest, userGreeting;

  //---------- event click to button -----------
  $formLogin.find('button').click(function(event) {
    /* Act on the event */
    removeEventDefault(event);

    userEmail = $('#emailLogin').val();
    userPassword = $('#passwordLogin').val();

    if (userEmail && userPassword) {
      btnSubmit = true;
    } else {
      btnSubmit = false;
    }

    // ajax request
    if (btnSubmit === true) {
      dataAjaxRequest = { login: userEmail, password: userPassword };
      ajaxRequest(dataAjaxRequest);
    }
  });

  //---------- ajax request and processing request -----------
  ajaxRequest = function (argument) {
    $.get( "login.txt", argument, processingRequest, "json" );
  }  
  processingRequest = function (data) {
    if (data.login === dataAjaxRequest.login && data.password === dataAjaxRequest.password) {
      console.log('Есть такие данные');
      userGreeting(data);
    } else {
      console.log('Нет таких данных');
    }
  }

  //----------- user greeting --------------
  userGreeting = function (argument) {
    // body... 
    var $formLogin = $('.form-login')
    var h_f_l = $formLogin.height();
    var dataArgument = argument;
    var content;
    var $loader = $('<i class="loader">Loading...</i>');

    $formLogin.height(h_f_l);
    $formLogin.find(' > *').addClass('hide');

    content = '<p><img src=" ' + dataArgument.img + ' " alt="" /></p>';
    content += '<h4>' + dataArgument.name + '</h4>';
    content += '<p>' + dataArgument.login + '</p>';
    content += '<a class="sign-out" href="#!">Sign out</a>'

    $formLogin.addClass('center logged');
    // $formLogin.html($loader);
    $formLogin.html(content);

  }

  // Методы для отображения форм входа и востановления пароля
  var $questionsLink = $('.questions > a');
  var $uFBtn = $('.u-f-btn-prev');
  var $siblingsCardContent, id;

  $questionsLink.click(function(event) {
    /* Act on the event */
    removeEventDefault(event);
    id = $(this).attr('href');
    if ($(id)) {
      $siblingsCardContent = $(id).siblings('.card-content');
      $siblingsCardContent.css({
        'display': 'none'
      });
      $(id).css({
        'display': 'block'
      });
      $uFBtn.css('display', 'block');
    }
  });
  $uFBtn.click(function(event) {
    /* Act on the event */
    removeEventDefault(event);
    $(id).css('display', 'none');
    $siblingsCardContent.css('display', 'block');
    setTimeout(function () {
      // body... 
      $uFBtn.css('display', 'none');
    }, 500);
    
  });
})(jQuery);

// -------- search function -------
;(function ($) {
  var $body = $('body');
  var $searchButton = $('.search-button');
  var $searchCloseButton = $('.search-close-button');
  var $searchWidget = $('.search-widget');
  var $idSearchInput = $('#search-input');

  function focusedSerchInput() {
    if ($('input:focus')) {
      // statement
      $searchWidget.addClass('focused');
    } else {
      $searchWidget.removeClass('focused');
    }
  }
  $searchButton.on('mouseover', function(event) {
    removeEventDefault(event);
    /* Act on the event */
    $body.addClass('search-open');    
  });

  // $searchButton.click(function(event) {
  //   /* Act on the event */
  //   removeEventDefault(event)

  //   $body.addClass('search-open');
  //   $idSearchInput.focus();
  //   $searchWidget.addClass('focused');
  // });


  $searchCloseButton.click(function(event) {
    /* Act on the event */
    removeEventDefault(event)
    $searchWidget.removeClass('focused');
    $body.removeClass('search-open');
  });



  $idSearchInput.focusout(function(event) {
    /* Act on the event */
    $searchWidget.removeClass('focused');
  });
  $idSearchInput.focus(function(event) {
    $searchWidget.addClass('focused');
  });
  $idSearchInput.on('input keyup', function(eventObject) {
      var number = $(this).val().length;

      if(number === 0) {
        $searchWidget.removeClass('text-entered');
      } else {
        $searchWidget.addClass('text-entered');
      }
      
  });
}( jQuery ));

// -------- slider function -------
;(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        navigation : true,
        indicators : true,
        height     : 600,
        transition : 500,
        autoScroll : true,
        interval   : 6000
      };
      options = $.extend(defaults, options);

      return this.each(function() {

        // For each slider, we want to keep track of
        // which slide is active and its associated content
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('> li');
        var $active_index = $slider.find('.active').index();
        var $active, $indicators, $interval, $navigation, $zoomNav, intervalFunction;
        if ($active_index != -1) { $active = $slides.eq($active_index); }

        // Transitions the caption depending on alignment
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("right-align")) {
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("left-align")) {
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
          }
        }

        // This function will transition the slide to any index of the next slide
        function moveToSlide(index) {
          // Wrap around indices.
 
          if (index >= $slides.length) index = 0;
          else if (index < 0) index = $slides.length -1;

          $active_index = $slider.find('.active').index();

          // Only do if index changes
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');

            $active.removeClass('active');
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                              complete: function() {
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });
            captionTransition($caption, options.transition);


            // Update indicators
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }

            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');


            // Update indicators
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }

        // interval 
        intervalFunction = function () {
          $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
           );
        }

        // Move img src into background-image
        function imgCssBackground (argument) {
          // body... 
          $(argument).each(function () {
            var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            if ($(this).attr('src') !== placeholderBase64) {
              $(this).css({
                'background-image': 'url(' + $(this).attr('src') + ')',
                'background-size': 'cover',
                'background-position': 'center center',
              });
              $(this).attr('src', placeholderBase64);
            }
          });
        }

        // Set height of slider
        // If fullscreen, do nothing
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            // Add height if indicators are present
            $this.height(options.height);
          }
          else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }

        // Set initial positions of captions
        $slides.find('.caption').each(function () {
          captionTransition($(this), 0);
        });

        
        // dynamically add navigation next and prev
        if (options.navigation) {
          $navigation = $('<div class="navigation-slider"></div>');
          $navigation.append('<div class="prev-btn-wrapper"><div class="prev btn-floating icon-floating waves-effect"><i class="material-icons">arrow_back</i></div></div>')
          $navigation.append('<div class="next-btn-wrapper"><div class="next btn-floating icon-floating waves-effect"><i class="material-icons">arrow_forward</i></div></div>')
          $this.append($navigation);

          $navigation.find('.next').click(function(event) {
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);
          });

          $navigation.find('.prev').click(function(event) {
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index - 1);
          });

        }

        // Метод увеличения картинки а так же сама навигация для этого.
        var $DOM_body = $('body');
        var x, y;
        var $iconMagnifyPlus = $('<i class="mdi mdi-magnify-plus"></i>');
        var $modalOverlay = $('<div class="modal-overlay"></div>');
        var $modal = $('<div id="modal-slide-img" class="modal modal-slide-img"><div class="modal-content"></div></div>');

        $zoomNav = $('<a class="zoom-nav" href="#modal-slide-img"></a>')
        $this.append($zoomNav);


        $zoomNav.mousemove(function( event ) {
           $(this).append($iconMagnifyPlus);
           $iconMagnifyPlus.css({
              left: event.offsetX + 10,
              top: event.offsetY - 15
           });
        });

        $zoomNav.mouseleave(function( event ) {
          /* body... */
          $zoomNav.empty();
        })

        $zoomNav.click(function(event) {
          /* Act on the event */
          removeEventDefault(event);

          $DOM_body.append($modalOverlay);
          $DOM_body.css({
            'overflow': 'hidden',
            'width': $(document).width()
          });

          clearInterval($interval);

          var $imgActive = $slider.find('.active').find('img').clone();
          
          $modal.find('.modal-content').append($imgActive);
          $DOM_body.append($modal);

          $modalOverlay.css({
            'display': 'block',
            'z-index': '1002',
            'opacity': '0'
          });

          $modal.css({
            display : "block",
            'z-index': 1003
          });
          
          $modalOverlay.velocity({opacity: 0.5}, {duration: 350, queue: false, ease: "easeOutCubic"});
          // Define Bottom Sheet animation
          var enterVelocityOptions = {
            duration: 350,
            queue: false,
            ease: "easeOutCubic"
          };
          $.Velocity.hook($modal, "scaleX", 0.7);
          $modal.css({ top: '0' });
          $modal.velocity({top: '3%', opacity: 1, scaleX: '1'}, enterVelocityOptions);

          if ($imgActive.width() > $imgActive.height()) {
            // statement
            $imgActive.css({
              'height': 'auto',
              'width': '100%'
            })
          } else {
            $imgActive.css({
              'height': '100%',
              'width': 'auto',
              'max-height': $(window).height() - 80
            })
          }
          return $DOM_body;
        });

        $modalOverlay.click(function(event) {
          /* Act on the event */
          removeEventDefault(event);

          $modalOverlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});

          var exitVelocityOptions = {
            duration: 250,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {

              $modal.find('.modal-content').empty();
              $(this).css({display:"none"});
              $modal.detach();
              $modalOverlay.detach();
            }
          };

          $modal.velocity(
            { top: 0, opacity: 0, scaleX: 0.7},
            exitVelocityOptions
          );

          $DOM_body.css({
            'overflow': '',
            'width': ''
          });

          return $DOM_body;
        });

        // dynamically add indicators
        if (options.indicators) {
          $indicators = $('<ul class="indicators"></ul>');

          $slides.each(function( index ) {
            var $indicator = $('<li class="indicator-item"></li>'),
                $indicatorImgBg;

              if ($(this).find('img')) {
                $indicatorImgBg = $(this).find('img').clone();
                imgCssBackground($indicatorImgBg);
              }

              $indicator.append($indicatorImgBg);

            // Handle clicks on indicators
            $indicator.click(function () {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);

              // reset interval
              if (options.autoScroll) {
                // statement
                intervalFunction();
              }
              
            });

            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }

        if ($active) {
          $active.show();
        } else {
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

          $active_index = 0;
          $active = $slides.eq($active_index);

          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }

        // Adjust height to current slide
        $active.find('img').each(function() {
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });

        // auto scroll
        $interval = setInterval(
          function(){
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);

          }, options.transition + options.interval
        );

        // pause scrolling hover
        $this.hover(function() {
          clearInterval($interval);
        }, function() {
          if (options.autoScroll) {
            // statement
            intervalFunction();
          }
        });
        // HammerJS, Swipe navigation

        // Touch Event
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;

        $this.hammer({
            prevent_default: false
        }).bind('pan', function(e) {
          if (e.gesture.pointerType === "touch") {

            // reset interval
            clearInterval($interval);

            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;

            $curr_slide = $slider.find('.active');
            $curr_slide.velocity({ translateX: x
                }, {duration: 50, queue: false, easing: 'easeOutQuad'});

            // Swipe Left
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
              swipeRight = true;
            }
            // Swipe Right
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
              swipeLeft = true;
            }

            // Make Slide Behind active slide visible
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }


          }

        }).bind('panend', function(e) {
          if (e.gesture.pointerType === "touch") {

            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();

            if (!swipeRight && !swipeLeft || $slides.length <=1) {
              // Return to original spot
              $curr_slide.velocity({ translateX: 0
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            swipeLeft = false;
            swipeRight = false;

            // Restart interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          }
        });

        // Методы управления слайдером
        $this.on('sliderPause', function() {
          clearInterval($interval);
        });

        $this.on('sliderStart', function() {
          if (options.autoScroll) {
            // statement
            intervalFunction();
          }

        });

        $this.on('sliderNext', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        });

        $this.on('sliderPrev', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index - 1);
        });

      });



    },
    pause : function() {
      $(this).trigger('sliderPause');
    },
    start : function() {
      $(this).trigger('sliderStart');
    },
    next : function() {
      $(this).trigger('sliderNext');
    },
    prev : function() {
      $(this).trigger('sliderPrev');
    }
  };


    $.fn.slider = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
      }
    }; // Plugin end
}( jQuery ));
