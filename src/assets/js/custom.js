/*$(window).on('load',function() {
	loadbar();
});
*/
loadbar();
function loadbar() {
	var img = document.images, c = 0;
	var tot = img.length;
	var prog = document.getElementById('loaderBar');
	var stat = document.getElementById('percent');
	function imgLoaded(){
		c += 1;
		var perc = ((100/tot*c) << 0) +"%";
		prog.style.width = perc;
		//console.log(perc);
		stat.innerHTML = "Loading "+ perc;
		if(c===tot) return doneLoading();
	}
	function doneLoading(){
		$('#loader').fadeOut('slow', function() {
			$('#main').show(0);
			window_loaded();
		});
	}
	for(var i=0; i<tot; i++) {
		var tImg     = new Image();
		tImg.onload  = imgLoaded;
		tImg.onerror = imgLoaded;
		tImg.src     = img[i].src;
	} 
}

function window_loaded() {
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
		autoplaySpeed: 1000,
		slidesToShow: 12,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}
		]
	});

	particlesJS.load('particles-js', '/assets/js/particles.json', function() {
		console.log("particles-js loaded");
	});
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
}

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
