$(document).ready(function() {


	$(".top_mnu ul a").mPageScroll2id();


	$("#portfolio_grid").mixItUp();

	$('.s_portfolio li').click(function(){
		$('.s_portfolio li').removeClass('active_li');
		$(this).addClass('active_li');
	})

		//popup при нажатии на img
	$('.popup').magnificPopup({type:"image"});
	$('.popup_content').magnificPopup({type:"inline", midClick: true});


	
	//Страница на весь экран
	function heightDetect() {
		$('.main_head').css('height', $(window).height()); 	
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	})



	//Animated Sandwich Icon
$(".toggle_mnu").click(function() {
  $(".toggle_mnu").toggleClass("active");
});


$('.animate_1').animated("flipInY", "flipOutY");
$('.animate_2 , .left .container_item').animated("fadeInLeft", "fadeOutLeft");
$('.animate_3 , .right .container_item').animated("fadeInRight", "fadeOutRight");

$('.top_text h1').animated("fadeInDown", "fadeOutUp");
$('.top_text p, .section_for_animate, .skills').animated("fadeInUp", "fadeOutDown");



	//Выпадающее меню
$('.toggle_mnu').click(function(){
	if ($('.top_mnu').is(':hidden')) {
		$('.top_text').addClass('h_opacify');
		$('.top_mnu').fadeIn(600);
		$('.top_mnu li a').addClass('fadeInUp animated');
	}
	else {
		$('.top_text').removeClass('h_opacify');
		$('.top_mnu').fadeOut(600);
		$('.top_mnu li a').removeClass('fadeInUp animated');
	}
});

$('.top_mnu ul a').click(function() {
	$('.top_mnu').fadeOut(500);
	$('.toggle_mnu').toggleClass('active');
	$('.top_text').removeClass('h_opacify');
});


	$('.portfolio_item').each(function(i){
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.podrt_descr').attr('id', 'work_'  + i);

	});


	//$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();


		//form validations
	$("input, select, textarea").jqBootstrapValidation();




	//$('.main_head').parallax({imageSrc: 'img/bg.jpg'}); //Подкл параллакс
});


	// Preloader
$(window).load(function() { 
	$(".loader_Inner").fadeOut(); 
	$(".loader").fadeOut("slow"); 
});