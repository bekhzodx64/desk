document.addEventListener('DOMContentLoaded', () => {
	// mobile menu
	const body = document.querySelector('body');
	const mobileMenu = document.querySelector('.mobile-menu');
	const burgerBtn = document.querySelector('.burger-btn');
	const burgerClose = document.querySelector('.close-btn');

	burgerBtn.addEventListener('click', () => {
		mobileMenu.classList.remove('hidden');
		setTimeout(() => {
			mobileMenu.classList.remove('-translate-x-full');
			mobileMenu.classList.add('-translate-x-0');
		}, 50);
		body.classList.add('overflow-hidden');
	});

	burgerClose.addEventListener('click', () => {
		mobileMenu.classList.remove('-translate-x-0');
		mobileMenu.classList.add('-translate-x-full');
		body.classList.remove('overflow-hidden');
		setTimeout(() => {
			mobileMenu.classList.add('hidden');
		}, 100);
	});

	// modal
	const modalWrapper = document.querySelector('.modal-wrapper');
	const modalClose = document.querySelector('.modal-close');
	const headerBtn = document.getElementById('header-btn');

	headerBtn.addEventListener('click', () => {
		body.classList.toggle('overflow-hidden');
		modalWrapper.classList.toggle('hidden');
		setTimeout(() => {
			modalWrapper.classList.toggle('opacity-0');
		}, 10);
	});

	modalWrapper.addEventListener('mousedown', (e) => {
		const target = e.target;

		if (target.classList.contains('modal')) {
			body.classList.toggle('overflow-hidden');
			modalWrapper.classList.toggle('opacity-0');
			setTimeout(() => {
				modalWrapper.classList.toggle('hidden');
			}, 50);
		}
	});

	modalClose.addEventListener('click', () => {
		body.classList.toggle('overflow-hidden');
		modalWrapper.classList.toggle('opacity-0');
		setTimeout(() => {
			modalWrapper.classList.toggle('hidden');
		}, 50);
	});
});
