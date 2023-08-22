"use strict";

document.addEventListener("DOMContentLoaded", function () {

	// lang dropdown
	const langDropdown = document.querySelector('.lang_js');
	langDropdown.addEventListener('click', function (event) {
		const target = event.target;

		if (target.classList.contains('dropdown-item')) {
			event.preventDefault();
			const selectedLang = target.getAttribute('data-lang');
			const dropdownToggle = langDropdown.querySelector('.dropdown-toggle');
			dropdownToggle.textContent = selectedLang;
		}
	});

	// menu
	let menuBtn = document.querySelector('.menu-wrapper');
	let menu = document.querySelector('.menu_header');
	let body = document.querySelector('body');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('animate');
		menu.classList.toggle('opened');
		body.classList.toggle('overflow');
	});
});