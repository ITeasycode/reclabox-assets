$ -> $.delay = do ->
  timer = 0
  (callback, ms=1000) ->
    clearTimeout timer
    timer = setTimeout(callback, ms)
