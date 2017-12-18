$(document).ready( function() {
	heightChange();
	$(window).resize(function() {
		heightChange();
	});
	
	navBgChange($(window).scrollTop());
	$(window).scroll(function() {
		navBgChange($(window).scrollTop());
	});

	let navHeight = $('nav').height();

	$('body').scrollspy({offset : navHeight});
	
	$('nav a').on('click',function(event) {
		smoothScroll(this.hash, navHeight);
	});

	$('.techSlide').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 8,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}
		]
	});
});

function heightChange() {
	if ($(this).width() < 768) {
		$('.vh100, .vh75, .vh50').css('min-height','auto');
	} else {
		$('.vh100').css('min-height','100vh');
		$('.vh75').css('min-height','75vh');
		$('.vh50').css('min-height','50vh');
	}	
}

function navBgChange(height) {
	if ($(this).width() < 768) {
		$("nav").css('background','rgba(64, 64, 134,1)');
	} else {
		if(height  > 300) {
			$("nav").css('background','rgba(64, 64, 134,1)');
		} else {
			$("nav").css('background','rgba(64, 64, 134,'+height/300+')');
		}
	}
}

function smoothScroll(hash, navHeight) {
	$('html, body').animate({
		scrollTop: $(hash).offset().top - navHeight +2
	}, 800);
}