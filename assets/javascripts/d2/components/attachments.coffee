class @Attachments
  VALID_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/gif']
  VALID_VIDEO_TYPES = ['video/mp4', 'video/quicktime']

  IMAGE_INPUT_NAME = 'uploaded_imgs[]'
  VIDEO_INPUT_NAME = 'uploaded_vids[]'

  AREA       = '#attachments_area'
  ERRORS     = '#attachments_errors'
  PREVIEWS   = '#attachments_previews'
  FILE_FIELD = '#attachment_field'

  REMOVE_LINK = 'a[data-remove-attachment]'

  constructor: (@imagesMax = 0, @videosMax = 0) ->
    @$area = $ AREA
    @$errors = $ ERRORS
    @$previews = $ PREVIEWS
    @$fileField = $ FILE_FIELD

    do @addEvents

  addEvents: =>
    @$area.on 'click', @selectAttachment
    @$fileField.on 'change', @handleAttachment
    $(document).on 'click', REMOVE_LINK, @removeAttachment

  selectAttachment: =>
    @$fileField.trigger 'click'
    false

  handleAttachment: (e) =>
    _this = e.target

    return if _this.files.length is 0

    file     = _this.files[0]
    file.uid = Math.random()

    $field = $(_this).clone()
    $field.attr('attachment-uid', file.uid)

    do @clearErrorsAndFileField

    # Checking for images
    if VALID_IMAGE_TYPES.indexOf(file.type) > -1
      if @imagesMax > $("input[name='#{IMAGE_INPUT_NAME}']").length
        @$area.before @handleImage(file, $field)
      else
        @$errors.text "Max #{@imagesMax} images"

    # Checking for videos
    if VALID_VIDEO_TYPES.indexOf(file.type) > -1
      if @videosMax > $("input[name='#{VIDEO_INPUT_NAME}']").length
        @$area.before @handleVideo(file, $field)
      else
        @$errors.text "Max #{@videosMax} videos"

  # Image
  handleImage: (file, $field) =>
    reader = new FileReader()
    reader.onload = (e) => @appendPreview(file, e.target.result, 'image')
    reader.readAsDataURL(file)

    $field
      .removeAttr 'id'
      .attr 'name', IMAGE_INPUT_NAME
      .attr 'accept', VALID_IMAGE_TYPES.join(',')

  # Video
  handleVideo: (file, $field) =>
    reader = new FileReader()

    reader.onload = (e) =>
      url   = URL.createObjectURL(file)
      video = document.createElement('video')

      videoTimeUpdate = =>
        imageSrc = snapVideoImage(video)
        return unless imageSrc.length > 1000
        URL.revokeObjectURL(url)
        videoRemoveEvents.call video, videoTimeUpdate
        video.pause()
        @appendPreview(file, imageSrc, 'video')

      videoAddEvents.call video, videoTimeUpdate
      videoInitPlay.call video, url

    reader.readAsArrayBuffer(file)

    $field
      .removeAttr 'id'
      .attr 'name', VIDEO_INPUT_NAME
      .attr 'accept', VALID_VIDEO_TYPES.join(',')

  videoInitPlay = (url) ->
    @preload     = 'metadata'
    @src         = url
    @muted       = true
    @playsInline = true
    @play()

  videoAddEvents = (callback) ->
    @addEventListener 'timeupdate', callback
    @addEventListener 'loadeddata', callback

  videoRemoveEvents = (callback) ->
    @removeEventListener 'timeupdate', callback
    @removeEventListener 'loadeddata', callback

  snapVideoImage = (video) ->
    canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    canvas.toDataURL()

  removeAttachment: (e) =>
    _this = e.currentTarget
    uid = $(_this).data('removeAttachment')
    $(_this).closest('.uploaded-item').remove()
    $("input[attachment-uid='#{uid}']").remove()
    do @clearErrorsAndFileField

  clearErrorsAndFileField: =>
    @$errors.text ''
    @$fileField.val ''

  appendPreview: (file, src, type) =>
    @$previews.append """
      <div class="uploaded-item">
        <span class="file-preview" style="background-image: url(#{src})"></span>
        <span class="file-name"><i class="rbi-#{type}"></i>#{file.name}</span>
        <a data-remove-attachment="#{file.uid}"><i class="material-icons">close</i></a>
      </div>
    """
