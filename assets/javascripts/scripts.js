/*Browser versions*/
// detect IE8 and above, and edge
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    $('.emotion-block .emotion-icon').css('width', '97px');
}

/*Search panel*/
    $(".search-button").click(function(event){
        event.preventDefault();
        $(".login-menu").hide();
        $(".search-panel").show();
        event.stopPropagation();
    });
        
/*User menu panel*/
    $(".user-menu-button").click(function(event){
        event.preventDefault();
        $(".search-panel").hide();
        $(".login-menu").show();
        event.stopPropagation();
    });
    $(document).click(function(event) {
    if ($(event.target).closest(".login-menu").length) return;
    if ($(event.target).closest(".search-panel").length) return;
    $(".login-menu").hide();
    $(".search-panel").hide();
    event.stopPropagation();
    });
    


/*Rating block*/
$(".stella").click(function(event){
    $(".rate-info").show();
});


/*up to top button*/

    $(window).scroll(function(event){  
       event.preventDefault();
       if ( $(window).scrollTop() >= 150 ){                   
          $('.scroll-top').fadeIn();	
          $('.tohomapage').fadeIn();
          
           
       } else{
          $('.scroll-top').fadeOut();
          $('.tohomapage').fadeOut();
          
       }
    
       if ( $(window).scrollTop() >= 1300 ){
        $('#header').slideUp(100);
    }else{
        $('#header').slideDown(100);
    }
    });
    $('#up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });
        
/*Default users avatars*/
    $( document ).ready(function() {
        $('.username').each(function(){
            var str = $(this).text().split(" ");
            var firstName = $.trim(str[0]);//name
            var surName = str[1];//surname
            //if second name not found
            if (surName == ''){
                var result = firstName[0];
            } else{
                var result = firstName[0]+surName[0];
            }
            $(this).parent().find('.default-user-avatar').html(result);
            var color;
            
            switch (firstName[0]) {
                case "A":
                    color = "#f4b800";
                    break;
                case "B":
                    color = "#e67d00";
                    break;
                case "C":
                    color = "#e1002a";
                    break;
                case "D":
                    color = "#b30159";
                    break;
                case "E":
                    color = "#7d338c";
                    break;
                case "F":
                    color = "#3163ac";
                    break;
                case "G":
                    color = "#00a376";
                    break;
                case "H":
                    color = "#cfa6c3";
                    break;
                case "I":
                    color = "#7ba592";
                    break;
                case "J":
                    color = "#a6dae8";
                    break;
                case "K":
                    color = "#14aec0";
                    break;
                case "L":
                    color = "#2e5871";
                    break;
                case "M":
                    color = "#b6332b";
                    break;
                case "N":
                    color = "#7e6992";
                    break;
                case "O":
                    color = "#7adbd4";
                    break;
                case "P":
                    color = "#b6dc77";
                    break;
                case "Q":
                    color = "#47c7ed";
                    break;
                case "R":
                    color = "#e72c4f";
                    break;
                case "S":
                    color = "#fe94a8";
                    break;
                case "T":
                    color = "#48718f";
                    break;
                case "U":
                    color = "#e9337e";
                    break;
                case "V":
                    color = "#8f8fcd";
                    break;
                case "W":
                    color = "#65c835";
                    break;
                case "X":
                    color = "#a4e6da";
                    break;
                case "Y":
                    color = "#49c8eb";
                    break;
                case "Z":
                    color = "#7e6990";
                    break;
                    
                    default:
                        color = "#cccccc";
                        break;
            }
            
            $(this).parent().find('.default-user-avatar').css("background-color", color);
        });
    });

/*Emotion block*/
    
  var emotion1 = Circles.create({
  id:                  'zzz',
  radius:              50,
  value:               40,
  maxValue:            100,
  width:               10,
  text:                "",
  colors:              ['#fff', '#900'],
  duration:            0,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});
    
  var emotion2 = Circles.create({
  id:                  'wow',
  radius:              50,
  value:               25,
  maxValue:            100,
  width:               10,
  text:                "",
  colors:              ['#fff', '#900'],
  duration:            0,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});
      var emotion3 = Circles.create({
  id:                  'disappointed',
  radius:              50,
  value:               50,
  maxValue:            100,
  width:               10,
  text:                "",
  colors:              ['#fff', '#900'],
  duration:            0,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});
    
      var emotion4 = Circles.create({
  id:                  'sad',
  radius:              50,
  value:               10,
  maxValue:            100,
  width:               10,
  text:                "",
  colors:              ['#fff', '#900'],
  duration:            0,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});
      var emotion5 = Circles.create({
  id:                  'happy',
  radius:              50,
  value:               70,
  maxValue:            100,
  width:               10,
  text:                "",
  colors:              ['#fff', '#900'],
  duration:            0,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

$(".emotion-block li").mouseover(function(){
    var val = eval($(this).attr('id'));
    val.updateColors(['#900', '#900']);
});
$(".emotion-block li").mouseout(function(){
    var val = eval($(this).attr('id'));
    val.updateColors(['#fff', '#900']);
});


/*Go home button*/
$(window).scroll(function()

{
     if  ($(window).scrollTop() >= $(document).height() - $(window).height()) 
     {
         $(".go-home").show();
         var height = $(document).height()+300;
         
         $('body').css('height', height);
         var startPosition = $(window).scrollTop();
         //var backgroundPos  = $(".go-home").css('background-position').split(" ");
         //bg coordinates
         //backgroundPos[0] = parseInt(backgroundPos[0]); 
         //backgroundPos[1] = parseInt(backgroundPos[1]);
         $(window).scroll(function(event){
             var position = $(window).scrollTop();
             var move = (-180 + ((position - startPosition)/2));
             console.log(move);
             $(".go-home").css('background-position', 0+" "+move+"px");
             if (move >= (-180+160)){
                 $(window).unbind('scroll');
                 $(".go-home .down-line").addClass('loader');
                  setTimeout( 'location="/"', 1000 );
             }
             if (move <= (-180-50)){
             var height = $(document).height()-300;
         
             $('body').css('height', height);
                $(".go-home").hide();
                $(".go-home").css('background-position', "0 -180px");
             }
         });
    
         
     } 
});    
      