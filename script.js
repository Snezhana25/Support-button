$(document).ready(function (){
	$('.wrapper').click(function(){
      $('.live-chat').toggle('slow');
      	if ($(".live-chat").css("display","block")){
      		 	$(".card").css("display","none");
      		 	console.log("hi");
      		}
  	});
  	$('.chat-close').on('click', function(e) {
		e.preventDefault();
	$('.live-chat').fadeOut(300);
	$('.card').slideToggle( 400 );
	});
});
