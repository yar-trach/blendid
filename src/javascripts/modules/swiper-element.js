import Swiper from 'swiper/dist/js/swiper';

export default class SwiperElement {
    constructor(el) {
        this.el = el;

        this.swiper = new Swiper(el, {
            // Default parameters
            slidesPerView: Number(el.dataset.slides),
            spaceBetween: Number(el.dataset.space),
            loop: Number(el.dataset.loop),
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 375
                375: {
                    slidesPerView: slidesNum(Number(el.dataset.slides) - 3),
                },
                // when window width is <= 640
                640: {
                    slidesPerView: slidesNum(Number(el.dataset.slides) - 2),
                },
                // when window width is <= 1024
                1024: {
                    slidesPerView: slidesNum(Number(el.dataset.slides) - 1),
                }
            },

            // If we need pagination
            pagination: {
                el: el.getElementsByClassName('swiper-pagination')[0],
            },
        
            // Navigation arrows
            navigation: {
                nextEl: el.getElementsByClassName('swiper-button-next')[0],
                prevEl: el.getElementsByClassName('swiper-button-prev')[0],
            },
        
            // And if we need scrollbar
            scrollbar: {
                el: el.getElementsByClassName('swiper-scrollbar')[0],
            },
        });

        function slidesNum(num) {
            return num >= 1 ? num : 1;
        }
    }
}
