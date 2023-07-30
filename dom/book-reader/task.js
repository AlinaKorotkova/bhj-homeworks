const buttonFontSize = Array.from(document.getElementsByClassName('font-size'));
const bookContent = document.querySelector('.book__content');

buttonFontSize.forEach( element => {
	element.onclick = function (e) {
		buttonFontSize.forEach(element => 
			element.className = `font-size font-size_${element.dataset.size}`);
		e.currentTarget.className = `font-size font-size_${element.dataset.size} font-size_active`
		bookContent.className = 'book__content font-size_' + element.dataset.size;
		e.preventDefault();
	}
})