/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll Spy
3. Progress-bar
4. owl carousel
5. welcome animation support
==========================================*/

$(document).ready(function(){
	"use strict";

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	

	// 2. Smooth Scroll Spy
		
		$(".header-area").sticky({
			topSpacing: 0,
		});
		
		$("li.smooth-menu a").bind("click", function (event) {
			event.preventDefault();
			var anchor = $(this);
			$("html, body")
			.stop()
			.animate(
				{
				scrollTop: $(anchor.attr("href")).offset().top - 100,
				},
				1200,
				"easeInOutExpo"
			);
		
			// Collapse the navbar after clicking the link
			$(".navbar-collapse").collapse("hide");
		});
		
		$("body").scrollspy({
			target: ".navbar-collapse",
			offset: 0,
		});


	// 3. Progress-Bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	

    // 4. Certificate (Owl Carousel)
    $('#certificate').owlCarousel({
        items: 7,
        loop: true,
        smartSpeed: 1000,
        autoplay: false,
        dots: true, // Dots will be shown by default
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1, // Show 1 item on mobile
                margin: 10,
                dots: false // Hide dots on mobile
            },
            415: {
                items: 1, // Show 1 item on small screens
                margin: 10,
                dots: false // Hide dots on small screens
            },
            600: {
                items: 4,
                margin: 10,
                dots: true // Show dots on larger screens
            },
            1199: {
                items: 7,
                margin: 10,
                dots: true // Show dots on even larger screens
            },
            1200: {
                items: 7,
                margin: 10,
                dots: true // Show dots on extra large screens
            }
        }
    });

    $('.play').on('click', function() {
        $('#certificate').trigger('play.owl.autoplay', [1000]);
    });
    $('.stop').on('click', function() {
        $('#certificate').trigger('stop.owl.autoplay');
    });


    // 5. Welcome Animation Support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});