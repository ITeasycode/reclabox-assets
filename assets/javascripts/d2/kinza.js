function closeSubscribe() {
    $('#modsub').hide();
    $("#email2").val("");
    $("#email3").val("");
    $('#userUnsubscribeTabContent').hide();
    $('#userSubscribeTabContent').show();
    $("#newsletter_errors").empty();
    $("#emailSubscribe").show();
    $('#successfulSubscribe').hide();
    $('#alreadyUnsubscribed').hide();
    $('#successfulUnsubscribe').hide();
};
function closeRegel() {
    $("#reg_form").trigger('reset');
    $('#error_messages_notify').empty();
    $('#start-typing-reg').height('2.2rem');
    $('#regelbox').hide();
};
function closeAuthor() {
    $('form[id="author_form "]')[0].reset();
    $('#error_messages_user_message').empty();
    $('#start-typing-author').height('1.8rem');
    $('#authorbox').hide();
};

$( document ).ready(function() {
    $('#uns').click(function(){
        $('#userSubscribeTabContent').hide();
        $('#userUnsubscribeTabContent').show();
        return false;
    });
    $('#sub').click(function(){
        $('#userUnsubscribeTabContent').hide();
        $('#userSubscribeTabContent').show();
        return false;
    });
    $('#modsub').click(function(evt){
        if( $(evt.target).closest(".modal").length > 0 ) {
            if( $(evt.target).closest("#butsub").length > 0 ){$("#subf ").trigger('submit.rails');}
            else if ( $(evt.target).closest("#butunsub").length > 0 ){$("#unsub ").trigger('submit.rails');}
            else  {return false;}
        }
        else {
            closeSubscribe();
        }
    });
    $('#regelbox').click(function(evt){
        if( $(evt.target).closest(".modal").length > 0 ) {
//            if( $(evt.target).closest("#regel_btn").length > 0 ){$("#regel_form").trigger('submit.rails');}
            if ( $(evt.target).closest("#.filled-in").length > 0 ){$("#report-user-checkbox").toggleClass('selected')}
            else  {return false;}
        }
        else {
            closeRegel();
        }
    });
    $('#authorbox').click(function(evt){
        if( $(evt.target).closest(".modal").length > 0 ) {
            if( $(evt.target).closest("#btn_author").length > 0 ){$("#author_form ").trigger('submit.rails');}
            else {return false;}
        }
        else {
            closeAuthor();
        }
    });

});

