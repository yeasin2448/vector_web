(function($){
	'use strict';

    //menu top fixed start for mobile menu & desktop menu
	var fixed_top = $(".header-bg");
	$(window).on('scroll', function () {
	    if ($(this).scrollTop() > 10) {
	        fixed_top.addClass("menu-fixed animated fadeInDown");
	        fixed_top.removeClass("slideInUp");
	    } else {
	        fixed_top.removeClass("menu-fixed fadeInDown");
	    }
	});

	// mobile menu responsive
	$(document).on('click','.mobile-bar',function(){
    $(".mobile-bar").toggleClass("close");
		$(".main-menu").toggleClass("open");
		$(".overlay").addClass("active");
	});
	// overlay remove
	$('.overlay').on('click', function(){
		$('body,.main-menu,.mobile-bar').removeClass('close');
		$('body,.main-menu').removeClass('open');
		$('body,.main-menu,.overlay').removeClass('active');
  });

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }
  $('.btn').on('mousedown', function(e){
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
    $(this).remove();
  });

  // lightcase activation//
  jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
  });



	// customer slider activation
	var swiper = new Swiper('.clients-slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		freeMode: true,
		autoplay: {
		  delay: 3000,
		  disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.clients-button-next',
			prevEl: '.clients-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
		}
	});

	//team slider activation
	var swiper = new Swiper('.team-slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.team-button-next',
			prevEl: '.team-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
		}
	});


	//freeloader activation
	setTimeout(function() {
		$('#ctn-preloader').addClass('loaded');
		// Una vez haya terminado el preloader aparezca el scroll
		$('body').removeClass('no-scroll-y');

		if ($('#ctn-preloader').hasClass('loaded')) {
			// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
			$('#preloader').delay(1000).queue(function() {
			$(this).remove();
			});
		}
	}, 3000);

	// scroll up start here
	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 300) {
				$('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
			} else {
				$('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').on('click', function(){
			$('html, body').animate({scrollTop : 0},500);
			return false;
		});
	});
    

})(jQuery);


