//=====СУДНО УСЛУГИ===

$( document ).ready(function() {
	$(".service-box__item-wr").hover(function() {        
		$(this).parents().eq(0).find('.service-box__item-img-abs-hover').toggleClass("service-box__item-img-abs-hover-add");
	});
});
$( document ).ready(function() {
	$(".service-box__item-wr").hover(function() {        
		$('.service-box__item-img-abs-1').toggleClass("service-box__item-img-abs-0");
	});
});



$(document).ready(function() {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
		elem = $(".slide");

		if(windowWidth > 1199){
			elem.addClass('slide-add');
		}
		else{
			elem.removeClass('slide-add');
		}
	}

	checkWidth();

	$(window).resize(function(){
		checkWidth();
	});
});

$(document).ready(function() {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
		elem = $(".header__nav-link");

		if(windowWidth > 1199){
			elem.addClass('header__nav-link-add');
		}
		else{
			elem.removeClass('header__nav-link-add');
		}
	}

	checkWidth();

	$(window).resize(function(){
		checkWidth();
	});
});


$(function() {
	var tab = $('.slide-add'); 
	tab.hide().filter(':first').show(); 

  // Клики по вкладкам.
  $('.header__nav-link-add').click(function(){
  	tab.hide(); 
  	tab.filter(this.hash).show(); 
  	$('.header__nav-link-add').removeClass('active__tab');
  	$(this).addClass('active__tab');
  	return false;
  }).filter(':first').click();
});

$( document ).ready(function() {
	$(".header__btn-default").click(function() {        
		$('.header-mob').addClass("header-mob__open");
	})
});
$( document ).ready(function() {
	$(".mob-menu-close-add").click(function() {        
		$('.header-mob').removeClass("header-mob__open");
	})
});

$(document).ready(function($) {
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 100 ){
            $(".mob-menu__center-img1").hide();
        } else {
            $(".mob-menu__center-img1").show();
        }
    });
});

$(document).ready(function($) {
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 400 ){
            $(".mob-menu__center-img2").show();
        } else {
            $(".mob-menu__center-img2").hide();
        }
    });
});

