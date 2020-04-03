$(window).on("scroll", function() {
    if ($(this).scrollTop() > 10) {
       $(".header-start").css("background", "#fff");
       $(".hover-img").show();
       $("#nav-icon3 span").css("background", "#000");
    } else {
       $(".header-start").css("background", "transparent");
       $(".hover-img").hide();
       $("#nav-icon3 span").css("background", "#000");


    }
 });
$(document).ready(function(){
	$('#nav-icon3').click(function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		$('.navigation-menu').fadeOut(500);
	}else{
		$(this).addClass('open');
		$('.navigation-menu').fadeIn(500);
	}
   });
});

$('.navigation-menu li').addClass('animated bounceInLeft');
