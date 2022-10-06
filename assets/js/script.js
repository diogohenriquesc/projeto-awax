const button = document.querySelector('.menu-buttom');

button.addEventListener('click', () => {
	const menu = document.querySelector('.menu');

	if (!menu.classList.contains('show')) {
		menu.classList.add('show');
		button.classList.add('rotate');
	} else {
		menu.classList.remove('show');
		button.classList.remove('rotate');
	}
});
