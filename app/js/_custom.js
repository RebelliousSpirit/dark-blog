document.addEventListener("DOMContentLoaded", function() {
	/**
	 * disappearing menu
	 * 
	 */
	
	$('#header .menu-swith').on('click', function(event) {
		$('#opacity-menu').fadeIn(600).show(600);
	});

	$('#opacity-menu .menu-swith').on('click', function(event) {
		
		$('#opacity-menu').fadeOut(600).hide(600);
	
	});
	
	/**
	 * setting up lazy loading of images
	 * 
	 */
	
	// $('img.lazy').lazyLoad();

	/*
	* parallax effect in live bg
	*
	*/

	function moveLiveImg(event) {
		
		let bgItems = document.querySelectorAll('#live-bg .live-bg__item');
		let coordX = event.clientX;
		let coordY = event.clientY; 

		bgItems.forEach( function(item) {
			
			let itemSpeed = item.getAttribute('data-speed');
			let translateValueX = (coordX*itemSpeed)/50;
			let translateValueY = (coordY*itemSpeed)/50;

			item.style.transform = 'translate('+translateValueX+'px, '+translateValueY+'px)';

		});
		
	}

	document.addEventListener('mousemove', moveLiveImg);

	/**
	 * preloader
	 */	
	$('#preloader').delay(600).fadeOut(600);

	/**
	 * animated title at the top of the page 
	 */

	
});
