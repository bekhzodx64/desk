document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		spaceBetween: 20,

		// If we need pagination
		pagination: {
			el: '.pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + ('Service ' + ++index) + '</span>';
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: '.right-arrow',
			prevEl: '.left-arrow',
		},
	});
});
