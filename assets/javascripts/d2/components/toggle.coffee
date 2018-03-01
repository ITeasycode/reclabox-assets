# Toggle (show/hide) elements

toggleFunc = ->
  $btn = $(this)
  href = $btn.attr('href')
  $toggleEl = $(href isnt '#' && href)

  # check if has element
  return console.warn 'Not specified element for toggle' unless $toggleEl.length

  # get method and text of button
  btnMethod = if $btn.is(':input') then 'val' else 'text'
  btnText = $btn.data(if $toggleEl.hasClass('hide') then 'openText' else 'closeText') || $btn[btnMethod]()

  # change button text
  $btn[btnMethod](btnText)

  # show/hide toggle element
  $toggleEl.toggleClass('hide')

  false  

$ -> $('[data-toggle="toggle"]').on 'click', toggleFunc
