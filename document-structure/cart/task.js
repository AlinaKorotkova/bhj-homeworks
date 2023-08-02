const productControlInc = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_inc'));
const productControlDec = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_dec'));
const productAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');
const cartProduct = document.getElementsByClassName('cart__product');
const minCount = 1;

productControlDec.forEach( (e) => {
	e.addEventListener('click', (event) => {
		event.currentTarget.nextElementSibling.innerText <= minCount ? alert('Выберите колличетсво товара не меньше одного')
		: event.currentTarget.nextElementSibling.innerText --;
	})
})



productControlInc.forEach( (e) => {
	e.addEventListener('click', (event) => {
		event.currentTarget.previousElementSibling.innerText ++;
	})
})



productAdd.forEach( (element) => {
	element.addEventListener('click', (event) => {
		let dataId = Number(event.currentTarget.closest('.product').getAttribute('data-id'));
		let img = event.currentTarget.closest('.product').querySelector('img').getAttribute('src');
		let count = Number(event.currentTarget.previousElementSibling.querySelector('.product__quantity-value').innerText);
		let htmlBasket = `<div class="cart__product" data-id=" ` + dataId +` ">
            <img class="cart__product-image" src="` + img +`">
            <div class="cart__product-count">` + count + `</div>
            </div>`;


		for(let i= 0; i <= cartProduct.length -1; i++) {
			if(Number(cartProduct[i].getAttribute('data-id')) === dataId) {
				cartProduct[i].querySelector('.cart__product-count').innerText =
					Number(cartProduct[i].querySelector('.cart__product-count').innerText) + count;
				return
			}
		}
		cartProducts.insertAdjacentHTML('beforeEnd', htmlBasket);

	})
})