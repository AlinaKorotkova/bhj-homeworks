'use strict'

window.onload = function() {
	let list = Array.from(document.querySelectorAll('div.interests_main > ul > li > label > input'));
	for (let element of list) {
		element.onchange = function() {
			let nestedList = Array.from(element.parentNode.parentNode.querySelectorAll('input'));
			for (let el of nestedList) {
				el.checked = element.checked;
			}
		};
	}
};