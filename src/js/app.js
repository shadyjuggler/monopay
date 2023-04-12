import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

import burgerMenu from "./modules/burger-menu.js";
import changeSlideDescr from "./modules/desctop-changeSlideDescr.js"
import fireBaseAuth from "./modules/auth.js";
import test from "./modules/mobile-changeSlideDescr.js"

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper(".swiper", {
		modules: [Navigation],
		spaceBetween: 80,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		simulateTouch: false,
		grabCursor: true,
		breakpoints: {
			1440: {
				slidesPerView: 1.7
			},
			1100: {
				slidesPerView: 1.5
			},
			1000: {
				slidesPerView: 1.2
			},
			769: {
				slidesPerView: 1
			},
			580: {
				slidesPerView: 1.4
			}
		},
		on: {
			"slideChangeTransitionEnd": test
		}
	})

	

	changeSlideDescr();
	burgerMenu();
	test();
	fireBaseAuth();
})


