'use strict'

window.onload = function() {
	const messages = [
		'Привет!', 
		'Я не хочу отвечать на ваш вопрос!', 
		'Я ушел пить чай.', 
		'Вы мне не нравитесь!',
		'Всем чмоки в этом чате!',
	];
	document.querySelector('.chat-widget__input').value = '';   
	document.querySelector('.chat-widget__side').onclick = function() {
		document.querySelector('.chat-widget').classList.add('chat-widget_active');
	};
	document.querySelector('.chat-widget__input').onkeypress = function() {
		if (event.currentTarget.value.length > 0 && event.keyCode == 13) {
			let time = new Date().toLocaleTimeString().substr(0, 5);
			document.querySelector('.chat-widget__messages').innerHTML += 
				`<div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${event.currentTarget.value}</div>
                </div>`;
			event.currentTarget.value = '';
			let response = messages[Math.floor(Math.random()*10) % messages.length];
				document.querySelector('.chat-widget__messages').innerHTML += 
					`<div class="message">
	                <div class="message__time">${time}</div>
	                <div class="message__text">${response}</div>
	                </div>`;
		}
	};	
}