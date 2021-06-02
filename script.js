//=====СУДНО УСЛУГИ===

$( document ).ready(function() {
	$(".slide2-box__item-wr").hover(function() {        
		$(this).parents().eq(0).find('.slide2-box__item-img-abs-hover').toggleClass("slide2-box__item-img-abs-hover-add");
	})
});

$(document).ready(function(){
	$(".slider").owlCarousel({
		items: 1,
		loop: false,
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		smartSpeed: 300,
	});

	var owl = $('.slider');
    owl.owlCarousel();
    $('.slider__NextBtn').click(function() {
       owl.trigger('next.owl.carousel');
   })
    $('.katalog-item__PrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })

});

$( document ).ready(function() {
	$(".service-link").click(function() {        
		$('.owl-item').removeClass("active");
		$('body').find('#service').parents().addClass("active");
	})
});
$( document ).ready(function() {
	$(".project-link").click(function() {        
		$('.owl-item').removeClass("active");
		$('body').find('#project').parents().addClass("active");
	})
});
$( document ).ready(function() {
	$(".about-link").click(function() {        
		$('.owl-item').removeClass("active");
		$('body').find('#about').parents().addClass("active");
	})
});
$( document ).ready(function() {
	$(".contact-link").click(function() {        
		$('.owl-item').removeClass("active");
		$('body').find('#contact').parents().addClass("active");
	})
});
$( document ).ready(function() {
	$(".main-link").click(function() {        
		$('.owl-item').removeClass("active");
		$('body').find('#main').parents().addClass("active");
	})
});
