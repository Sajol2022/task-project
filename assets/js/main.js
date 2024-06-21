(function ($) {
    "use strict";
    // Banner Slider
	var swiper = new Swiper(".banner_slider", {
		slidesPerView: 1,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 4000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
		pagination: {
		  el: ".banner_pagination_dots",
		  clickable: true,
		},
	});
})(jQuery);