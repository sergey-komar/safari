$(function(){

    $('.about__popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/gallery/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/gallery/arrow-right.svg" alt=""></button>'
    });

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


	const navIcon = document.querySelector(".nav-icon");
	const nav = document.querySelector('.menu__list');

	navIcon.addEventListener("click", function () {
	// document.querySelector('.nav-icon').classList.toggle('active');

	this.classList.toggle("nav-icon--active");

	nav.classList.toggle('nav--active');
  });


  // Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.menu__list a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});


// Находим нужные элементы: кнопка модлалки, модалка, кнопка закрытия
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

// Прослушиваем клик на кнопке Открытия, и Открываем модалку
button.addEventListener('click', function () {
    modal.classList.remove('hidden');
})
        
// Прослушиваем клик на кнопке Закрытия, и Закрываем модалку
buttonClose.addEventListener('click', function () {
    modal.classList.add('hidden');
});

modal.addEventListener('click', function () {
    modal.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(e){
    e.stopPropagation();
})


});