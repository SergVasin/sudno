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




$( document ).ready(function() {
	$(".popup-open").click(function() {        
		$('.popup').addClass("popup-add");
	})
});
$( document ).ready(function() {
	$(".popup__btn").click(function() {        
		$('.popup').removeClass("popup-add");
	})
});




// $(document).ready(function($) {
//     $(window).scroll(function(){  
//         if ($(window).scrollTop() > 100 ){
//             $(".mob-menu__center-img1").hide();
//         } else {
//             $(".mob-menu__center-img1").show();
//         }
//     });
// });

// $(document).ready(function($) {
//     $(window).scroll(function(){  
//         if ($(window).scrollTop() > 400 ){
//             $(".mob-menu__center-img2").show();
//         } else {
//             $(".mob-menu__center-img2").hide();
//         }
//     });
// });



// $(window).scroll(function(){
// 	var el = $('.service');
//     if ( $(this).scrollTop() > el.offset().top - 0 ) {
//         el.addClass('service-scroll');
//     }
// });



jQuery(document).ready(function($) {
    // $(".mob-menu").addClass("mob-menu-fix");
    var lastScroll = 0;

    $(window).scroll(function(){
        setTimeout(function() {
            var scroll = $(window).scrollTop();
            if (scroll > lastScroll + 30) {
                $(".mob-menu").removeClass("mob-menu-fix");
            } else if (scroll < lastScroll - 30) {
                $(".mob-menu").addClass("mob-menu-fix");
            }
            lastScroll = scroll;
        }, 1000);
    });
});

$(document).ready(function($) {
    $(window).scroll(function(){  
        if ($(window).scrollTop() < 400 ){
            $(".mob-menu-fix").addClass('mob-menu-fix-add');
        } else {
            $(".mob-menu-fix").removeClass('mob-menu-fix-add');
        }
    });
});

$(document).ready(function() {
	$("#usertel").mask("+7 999 999 99 99");
});

// var postion = $('#main').offset().top,
//     height = $('#main').height();
// $(document).scroll(function (){
//   var scroll = $(document).scrollTop();
//   if(scroll < (postion + height) ) {
//      $('.mob-menu').removeClass('mob-menu-fix')
//      }
// })



// $(window).scroll(function(){
// 	var el = $('.mob-menu');
//     if ( $(this).scrollTop() == 10 ) {
//         el.removeClass('mob-menu-fix');
//     }
// });