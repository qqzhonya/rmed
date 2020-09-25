$(function() {

	//
	// About slider
	//
	
	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		asNavFor: '.about-slider-nav'
	})

	$('.about-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.about-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 421,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	});

	//
	// About slider end
	//
	
	//
	// Mobile menu
	//

	$('.header-menu-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('.header-mob-menu').slideDown();
		} else {
			$('.header-mob-menu').slideUp();
		}
	});

	//
	// Mobile menu end 
	//

});
