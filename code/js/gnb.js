/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";
		//mobile nav
		const mobileNav = document.querySelector('.mobile_nav');
		const mobileItems = document.querySelectorAll('.mobile_nav .mnav .mnav_item');
		// const mobileHasSub = document.querySelectorAll('.mobile_nav .has_sub_wrap');
		const IS_OPEN = 'is_open';
		const subItemHeight = 36;
		const subItemPadding = 10 * 2;

		// function toggleMobileHasSub(event) {
		// 	for(let j = 0; j < mobileItems.length; j++){
		// 		if(event.target !== mobileItems[j]) {
		// 			mobileItems[j].parentNode.classList.remove(IS_OPEN);
		// 			mobileItems[j].nextElementSibling.style.maxHeight = 0;
		// 		}
		// 	}

		// 	if(event.target.parentNode.classList.contains(IS_OPEN)){
		// 		event.target.parentNode.classList.remove(IS_OPEN);
		// 		event.target.nextElementSibling.style.maxHeight = 0;
		// 	}else{
		// 		event.target.parentNode.classList.add(IS_OPEN);
		// 		event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.children[0].children.length * subItemHeight + subItemPadding + 'px';
		// 	}
		// }

		// for(let i = 0; i < mobileItems.length; i++) {
		// 	mobileItems[i].addEventListener('click', toggleMobileHasSub);
		// }

		//burger btn
		const burgerBtn = document.querySelector('.burger_btn');

		function toggleMobileNav(event){
			if(event.target.classList.contains(IS_OPEN)) {
				burgerBtn.classList.remove(IS_OPEN);
				mobileNav.classList.remove(IS_OPEN);
			}else{
				burgerBtn.classList.add(IS_OPEN);
				mobileNav.classList.add(IS_OPEN);
			}
		}


		burgerBtn.addEventListener('click', toggleMobileNav);

		const mobileLinks = document.querySelectorAll('.mobile_nav .mnav .mnav_item .mnav_link')


		function closeMobileNav(event){
			burgerBtn.classList.remove(IS_OPEN);
			mobileNav.classList.remove(IS_OPEN);
		}
		//mobileLinks.addEventListener('click', closeMobileNav);
		mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));


		//리사이징
		window.addEventListener('resize', function(){
			burgerBtn.classList.remove(IS_OPEN);
			
		})



		//add some elements with animate effect
		$(".box").hover(
			function () {
			$(this).find('span.badge').addClass("animated fadeInLeft");
			$(this).find('.ico').addClass("animated fadeIn");
			},
			function () {
			$(this).find('span.badge').removeClass("animated fadeInLeft");
			$(this).find('.ico').removeClass("animated fadeIn");
			}
		);
		
	(function() {

		var $menu = $('.navigation nav'),
			optionsList = '<option value="" selected>Go to..</option>';

		$menu.find('li').each(function() {
			var $this   = $(this),
				$anchor = $this.children('a'),
				depth   = $this.parents('ul').length - 1,
				indent  = '';

			if( depth ) {
				while( depth > 0 ) {
					indent += ' - ';
					depth--;
				}

			}
			//$(".nav li").parent().addClass("bold");
			//optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
		}).end()
		
	})();

		//Navi hover
		$('ul.nav li.nav_item').hover(function () {
			$(this).find('.dropmenu').stop(true, true).delay(5).fadeIn();
		}, function () {
			$(this).find('.dropmenu').stop(true, true).delay(5).fadeOut();
		});
		
});