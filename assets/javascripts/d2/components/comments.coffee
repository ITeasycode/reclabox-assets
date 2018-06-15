# Submit comment form
$ ->
  $('#comment_form').on 'submit', (e) ->
    e.preventDefault()

    $form = $(@)
    $textarea = $form.find('textarea')
    $button = $form.find('button[type="submit"]')
    formData = new FormData(@)

    if $.trim($textarea.val()).length < parseInt($textarea.data('minLength'), 10)
      $textarea.trigger('focus')
      return false

    $button.addClass('sending')

    jqxhr = $.ajax
      type: 'POST'
      url: $form.attr('action')
      enctype: 'multipart/form-data'
      data: formData
      processData: false
      contentType: false
      cache: false
      timeout: 600000

    jqxhr.always -> $button.removeClass('sending')

# Show link edit comment
@editCommentCountdown = (elementId, wrapElementId, secondsLeft) ->
  if secondsLeft > 1
    secondsLeft = --secondsLeft
    $("##{elementId}").html "<i class='mdi mdi-border-color tiny'></i> Kommentar noch #{secondsLeft} Sekunden editierbar"
    setTimeout "editCommentCountdown('#{elementId}', '#{wrapElementId}', #{secondsLeft})", 1000
  else
    $("##{wrapElementId}").remove()
