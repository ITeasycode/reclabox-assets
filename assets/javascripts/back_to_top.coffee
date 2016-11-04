$ ->
  $backToTop = $ '.back-to-top'

  $(window).scroll -> do $backToTop[(if $(window).scrollTop() > 500 then 'fadeIn' else 'fadeOut')]

  $backToTop.on 'click', (e) ->
    e.preventDefault()
    $('body, html').animate({
      scrollTop: 0
    }, 600)
