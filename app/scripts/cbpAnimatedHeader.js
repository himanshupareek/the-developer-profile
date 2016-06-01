/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function () {

	var docElem = document.documentElement,
		header = document.querySelector('.navbar-fixed-top'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY(),
			$scrollTop = $('.scroll-top');
			
		if (sy >= changeHeaderOn) {
			classie.add(header, 'navbar-shrink');
            $scrollTop.removeClass('hidden-sm hidden-xs');
            $scrollTop.fadeIn(500);
		}
		else {
			classie.remove(header, 'navbar-shrink');
            $scrollTop.fadeOut(500, function () {
				$scrollTop.addClass('hidden-sm hidden-xs');
            });

		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
