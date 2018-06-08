$(document).ready(function (){
	  $('.wrapper-support').click(function(){

      $('.live-chat').toggle('slow');
      	if ($(".live-chat").css("display","block")){
            // $('html, body').animate({scrollTop:$(document).height()}, 'slow');
      		 	$(".card").css("display","none");
      		 	console.log("hi");
            return false;
      	}
  	});
  	$('.chat-close').on('click', function(e) {
		    e.preventDefault();
	      $('.live-chat').fadeOut(300);
	      $('.card').slideToggle( 400 );
	   });
});

$(document).ready(function() {
    var maxchars = 250;
    $('#text').keyup(function () {
      var tlength = $(this).val().length;
        $(this).val($(this).val().substring(0, maxchars));
          remain = maxchars - parseInt(tlength);
        $('#remain').text(remain);
    });
    
    $( "#btn-support" ).on( "click",function (){
        var field = $("#text").val().replace(/\s+/g,'');
        console.log(field);
        var length = field.length;
        var usernamecheck = /^(?=.+[а-яА-ЯёЁa-zA-Z])/;
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if($('#email').val() != '') {
            console.log('blur');
            if(pattern.test($('#email').val())){
                $('#email').css({'border' : '1px solid #569b44'});
                $('#valid').remove();
            } else {
                $('#email').css({'border' : '1px solid #ff0000'});
                $('#valid').css( "color", "red" ).text('The email must be a valid address');
                return false;
            }
        } else {
            $('#email').css({'border' : '1px solid #ff0000'});
            $('#valid').css( "color", "red" ).text('The email field must not be empty');
            return false;
        }
        if(!$.trim(field).match(usernamecheck) || length < 5 ){
            $( '#text' ).css( "border", "3px solid red" );
            $('#message').css( "color", "red" ).text("You must enter min 5 letters");
            return false;
        }else{
          $( '#text' ).css( "border", "3px solid blue" );
            $('#message').remove();
            $('.live-chat').fadeOut(300);
            $('.card').slideToggle( 400 );
        }

    });
});