/* (c) Jan Molic 2015
 */

jQuery.processResponse = function(data, item) {

  var findElement = function(item, selector) {
    // first time try closest to xsubmit caller
    var elm = $(item).closest(selector);
    if (elm.length>0) return elm;
    // second time direct selector
    elm = $(selector);
    return elm;
  }

  if (data.replace_with) {
    $.each(data.replace_with, function(selector,body){
      findElement(item, selector).replaceWith(body);
    });
  }
  if (data.replace) {
    $.each(data.replace, function(selector,body){
      findElement(item, selector).html(body);
    });
  }
  if (data.append) {
    $.each(data.append, function(selector,body){
      findElement(item, selector).append(body);
    });
  }
  if (data.prepend) {
    $.each(data.prepend, function(selector,body){
      findElement(item, selector).prepend(body);
    });
  }
  if (data.show) {
    $.each(data.show, function(k,selector){
      findElement(item, selector).show();                                                      
    });                                                                                        
  }                                                                                            
  if (data.hide) {                                                                             
    $.each(data.hide, function(k,selector){                                                    
      findElement(item, selector).hide();                                                      
    });                                                                                        
  }                                                                                            
  
  $(document).trigger('update');
  
  if (data.jump_to) {
    window.location="#"+data.jump_to;
  }
  if (data.alert) {
    alert(data.alert);
  }
  if (data.redirect) {
    window.location = data.redirect;
  }
  if (data.reload) {
    window.location.reload();
  }
}

jQuery.xsubmitForm = function(x) {
  var res = false;
  var fileInputs = $('input:file:enabled[value]', x);
  var hasFileInputs = fileInputs.length > 0;

  // file inputs must be submitted as iframes,
  // json must be returned as text base64 encoded to prevent browser to load it as html (the response is text/html not json)
  if (hasFileInputs) {

    $(x).ajaxSubmit({
      async: true,
      type: ($(x).attr('data-method') || $(x).attr('method')),
      dataType: 'text',
      clearForm: true,
      success: function(data) {
        //data = $.decode64(data); k cemu to bylo? na posilani obrazku?
        data = $.parseJSON(data);
        res = data;
        $.processResponse(data, x);
      },
      error: function(data,ts) {
        alert('xsubmit error #1 happened ;-(');
      }
    });

  } else {

    $.ajax({
      url: $(x).attr('action'),
      async: true,
      type: ($(x).attr('data-method') || $(x).attr('method')),
      data: $(x).serialize(),
      dataType: 'json',
      clearForm: true,
      success: function(data) {
        res = data;
        $.processResponse(data, x);
      },
      error: function(data,ts) {
        alert('xsubmit error #2 happened ;-(');
      }
    });
    
  }
  return res;
}

jQuery.xsubmitA = function(x) {
  var res = false;
  $.ajax({
    url: x.href ? x.href : x,
    async: true,
    type: 'get',
    dataType: 'json',
    success: function(data) {
      res = data;
      $.processResponse(data, x);
    },
    error:  function(data,ts) {
      alert('xsubmit error #3 happened ;-(');
    }
  });
  return res;
}

jQuery.decode64 = function(input) {
  var keyStr = "ABCDEFGHIJKLMNOP" +
  "QRSTUVWXYZabcdef" +
  "ghijklmnopqrstuv" +
  "wxyz0123456789+/" +
  "=";
  
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;
  
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  var base64test = /[^A-Za-z0-9\+\/\=\n]/g;
  if (base64test.exec(input)) {
    alert("There were invalid base64 characters in the input text.\n" +
    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
    "Expect errors in decoding.");
  }
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }

    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";

  } while (i < input.length);

  return unescape(output);
}


/********************************************************/

$(document).on('update', function() {
  $('form').each(function(k,v){
    var action=$(v).attr('action');
    if (action) {
      if (action.indexOf('?')>0) action = action.substring(0,action.indexOf('?'));
      if (action.substring(action.length-5,action.length)=='.json' ) {
        $(v).submit(function(){
          $.xsubmitForm(v);
          return false;
        });
      }
    }
  });
  $('a').each(function(k,v){
    var href=$(v).attr('href');
    if (href) {
      if (href.indexOf('?')>0) href = href.substring(0,href.indexOf('?'));
      if ( href.substring(href.length-5,href.length)=='.json' ) {
        $(v).click(function(){
          $.xsubmitA(v);
          return false;
        });
      }
    }
  });
});

$(document).ready(function(){
  $(document).trigger('update');
});
