'use strict'

window.onload = function() {
	document.querySelector('#send').onclick = function() {
		let formData = new FormData(document.forms.form);
		let xhr = new XMLHttpRequest();
			xhr.upload.onprogress = function(event) {
			let progress = event.loaded / event.total;
			console.log(progress);
			document.querySelector('#progress').value = progress;
		};
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
		xhr.send(formData);
		return false;
	}
};