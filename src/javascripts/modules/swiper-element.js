import Swiper from 'swiper/dist/js/swiper';

export default class SwiperElement {
    constructor(el) {
        this.el = el

        window.onload = function () {
            var swiper = new Swiper('.' + el.className, {
                // Default parameters
                slidesPerView: 4,
                spaceBetween: 0,
                // Responsive breakpoints
                breakpoints: {
                    // when window width is <= 320px
                    375: {
                        slidesPerView: 1,
                    },
                    // when window width is <= 480px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is <= 640px
                    1024: {
                        slidesPerView: 3,
                    }
                },
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        };

    }
}
