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

// animation
const scrollRevealOption = {
	distance: '50px',
	origin: 'bottom',
	duration: 1000,
};

ScrollReveal().reveal('.header__container p', {
	...scrollRevealOption,
});

ScrollReveal().reveal('.header__container h1', {
	...scrollRevealOption,
	delay: 500,
});

ScrollReveal().reveal('.header__container .header__flex', {
	...scrollRevealOption,
	delay: 1000,
});

// klik icon arrow in faq section
const faq = document.querySelector('.faq__grid');

faq.addEventListener('click', e => {
	const target = e.target;
	const faqCard = target.closest('.faq__card');
	if (target.classList.contains('ri-arrow-down-s-line')) {
		if (faqCard.classList.contains('active')) {
			faqCard.classList.remove('active');
		} else {
			Array.from(faq.children).forEach(item => {
				item.classList.remove('active');
			});
			faqCard.classList.add('active');
		}
	}
});

ScrollReveal().reveal('.faq__image img', {
	...scrollRevealOption,
	origin: 'left',
});

ScrollReveal().reveal('.article__card', {
	...scrollRevealOption,
	interval: 500,
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});
