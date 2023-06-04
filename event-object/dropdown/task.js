'use strict'

window.onload = function() {
	let current = 0;
	let arr = Array.from(document.querySelectorAll('.dropdown'));
	for (let i = 0; i < arr.length; i++) {
		arr[i].onclick = function(event) {
			current = event.currentTarget;
			current.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
		};
	}
	let arr1 = Array.from(document.querySelectorAll('.dropdown__item'));
	for (let i = 0; i < arr1.length; i++) {
		arr1[i].onclick = function (event) {
			current.querySelector('.dropdown__value').textContent = event.currentTarget.textContent;
			return false;
		};
	}	
};