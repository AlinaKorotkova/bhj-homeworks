'use strict'

window.onload = function() {
	let arr = Array.from(document.querySelectorAll('.menu__item'));
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].querySelector('.menu_sub')) {
			arr[i].querySelector('.menu__link').onclick = function(event) {
				arr[i].querySelector('.menu_sub').classList.toggle('menu_active');
				return false;
			};
		}
	}
};