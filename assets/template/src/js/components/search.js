// -------- search function -------
// --------------------------------
;(function ($) {
    var $body = $('body');
    var $searchButton = $('.search-button');
    var $searchCloseButton = $('.search-close-button');
    var $searchWidget = $('.search-widget');
    var $idSearchInput = $('#search-input');

    function focusedSerchInput() {
        if ($('input:focus')) {
            $searchWidget.addClass('focused');
        } else {
            $searchWidget.removeClass('focused');
        }
    }

    $searchButton.on('mouseover', function (event) {
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


    $searchCloseButton.click(function (event) {
        removeEventDefault(event);
        $searchWidget.removeClass('focused');
        $body.removeClass('search-open');
    });


    $idSearchInput.focusout(function (event) {
        $searchWidget.removeClass('focused');
    });
    $idSearchInput.focus(function (event) {
        $searchWidget.addClass('focused');
    });
    $idSearchInput.on('input keyup', function (eventObject) {
        var number = $(this).val().length;

        if (number === 0) {
            $searchWidget.removeClass('text-entered');
        } else {
            $searchWidget.addClass('text-entered');
        }

    });
}(jQuery));