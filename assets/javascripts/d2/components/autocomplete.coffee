class @Autocomplete
  constructor: (@link, @selector) ->
    @xhr = null
  
  init: =>
    new autoComplete
      source: @source
      selector: @selector
      minChars: 1
      menuClass: 'autocomplete-content dropdown-content'

  source: (term, response) =>
    try
      @xhr.abort()
    catch e
    @xhr = $.getJSON @link, { term: term }, (data) -> response(data)
