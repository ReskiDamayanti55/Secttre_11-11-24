const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

// saat btn menu di click
menuBtn.addEventListener('click', () => {
	navLinks.classList.toggle('open');

	const isOpen = navLinks.classList.contains('open');
	menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// saat btn close di click
navLinks.addEventListener('click', () => {
	navLinks.classList.remove('open');

	menuBtnIcon.setAttribute('class', 'ri-menu-line');
});
