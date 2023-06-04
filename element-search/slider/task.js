const arrSlider = Array.from(document.getElementsByClassName("slider__item"));

function slide(activeSlideIndex) {
	let activeSlide = arrSlider.findIndex(a => a.className.includes("slider__item_active"));
	if (activeSlideIndex < 0) activeSlideIndex = arrSlider.length - 1;
	if (activeSlideIndex > arrSlider.length - 1) activeSlideIndex = 0;
	arrSlider[activeSlide].className = "slider__item";
	arrSlider[activeSlideIndex].className += " slider__item_active";
}

document.querySelector(".slider__arrow_next").onclick = function () {
	let idx = arrSlider.findIndex(a => a.className.includes("slider__item_active"));
	slide(idx + 1);
}

document.querySelector(".slider__arrow_prev").onclick = function () {
	let idx = arrSlider.findIndex(a => a.className.includes("slider__item_active"));
	slide(idx - 1);
}