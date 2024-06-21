(function ($) {
    "use strict";
    // Banner Slider
	var swiper = new Swiper(".banner-one__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 4000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
		pagination: {
		  el: ".banner-one__pagination__dots",
		  clickable: true,
		},
	});
})(jQuery);