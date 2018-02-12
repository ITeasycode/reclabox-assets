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
    $('label').removeClass('active');
};
function closeRegel() {
    $("#reg_form").trigger('reset');
    $('#error_messages_notify').empty();
    $('#start-typing-reg').height('2.2rem');
    $('#regelbox').hide();
    $('label').removeClass('active');
};
function closeAuthor() {
    $('form[id="author_form "]')[0].reset();
    $('#error_messages_user_message').empty();
    $('#start-typing-author').height('1.8rem');
    $('#authorbox').hide();
    $('label').removeClass('active');
};
function closeLogin() {
    $('form[id="formsetpass "]')[0].reset();
    $('form[id="formlogin "]')[0].reset();
    $('form[id="users_sign_up "]')[0].reset();
    $('form[id="firm_sign_up "]')[0].reset();
    $('#set_password_error').empty();
    $('#reg_firm_errors').empty();
    $('#login_error').empty();
    $(".validate").removeClass("invalid-min").removeClass("invalid-required").removeClass("invalid");
    $('.password-eye').addClass( 'hide' );
    $('label').removeClass('active');
    $('#usersLogin1').hide();
    $('#userLoginTabContent').show();
    $('#logtab').addClass('active');
    $( '#usersLogin' ).find( '.tabs' ).removeClass( 'hide' );
    $('#userMitgliedschaft').addClass('hide');
    $('#firmaMitgliedschaft').addClass('hide');
    $('#formimg').addClass('hide');
    $('#regtab').removeClass('active');
    $('#regnav').addClass('invisible');
    $('#regnav').addClass('hide');
    $('#formLogin').removeClass( 'hide' );
    $('#newPassword').addClass( 'hide' );
    $( '#usersLogin' ).removeClass( 'register-form' );
    $('.indicator').hide();
    $('.terms-of-use-tooltip').removeClass('show-tooltip');
//    $('.indicator').css('right', '146px').css('left', '5px');
    $('#zur').addClass( 'hide' );
    $('#usersLogin').show();
    $('#successfulFirmSignup').hide();

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
    $('#usersLogin1').click(function(evt){
        if( $(evt.target).closest(".modal").length > 0 ) {
            if ( $(evt.target).closest("#savelogin").length > 0 ){$("#filled-in-box").toggleClass('selected')}
            else if ( $(evt.target).closest("#check-user").length > 0 ){$("#filled-in-box-user").toggleClass('selected')}
            else if ( $(evt.target).closest("#check-firm").length > 0 ){$("#filled-in-box-firm").toggleClass('selected')}
//            if( $(evt.target).closest("#btt-lgn").length > 0 ){$("#formlogin ").trigger('submit.rails');}
            else if ( $(evt.target).closest("#btn_set_pass").length > 0 ){$("#formsetpass ").trigger('submit.rails');}
            else if ( $(evt.target).closest("#btn_set_pass0").length > 0 ){$("#formsetpass0 ").trigger('submit.rails');}
            else if ( $(evt.target).closest("#fog_pass").length > 0 ){$("#fog_pass").click();}
            else if ( $(evt.target).closest("#user_daten").length > 0 ){$("#user_daten").click();}
            else if ( $(evt.target).closest("#firm_daten").length > 0 ){$("#firm_daten").click();}
            else if ( $(evt.target).closest("#btn_reg_user").length > 0 ){$("#users_sign_up ").trigger('submit.rails');}
            else if ( $(evt.target).closest("#btn_reg_firm").length > 0 ){$("#firm_sign_up ").trigger('submit.rails');}
            else
                return false;
        }
        else {
            closeLogin();
        }
    });

});

