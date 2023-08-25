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

	// open always first tab
	const modalUser = document.getElementById("user");
	if (modalUser) {
		const modal = new bootstrap.Modal(modalUser);
		modal._element.addEventListener("show.bs.modal", function () {
			const navLinks = document.querySelectorAll(".nav-link");
			const tabsEtc = document.querySelectorAll(".tab-pane");

			navLinks.forEach(link => {
				link.classList.remove("active");
			});

			tabsEtc.forEach(tab => {
				tab.classList.remove("active", "show");
			});

			const firstNavLink = document.querySelector(".nav-link");
			const firstTab = document.querySelector(firstNavLink.getAttribute("data-bs-target"));

			firstNavLink.classList.add("active");
			firstTab.classList.add("active", "show");
		});
		// new custom tab
		const forgotTabLink = document.getElementById("forgot-tab");
		const forgotTab = document.getElementById("forgot-tab-pane");
		const navLinks = document.querySelectorAll(".nav-link");
		const tabsEtc = document.querySelectorAll(".tab-pane");

		forgotTabLink.addEventListener("click", function () {
			navLinks.forEach(link => {
				link.classList.remove("active");
			});

			tabsEtc.forEach(tab => {
				tab.classList.remove("active", "show");
			});

			forgotTabLink.classList.add("active");
			forgotTab.classList.add("active", "show");
		});

		navLinks.forEach(link => {
			link.addEventListener("click", function () {
				navLinks.forEach(otherLink => {
					otherLink.classList.remove("active");
				});

				tabsEtc.forEach(tab => {
					tab.classList.remove("active", "show");
				});

				link.classList.add("active");
				const targetId = link.getAttribute("data-bs-target");
				const targetTab = document.querySelector(targetId);
				targetTab.classList.add("active", "show");
			});
		});
	}
});