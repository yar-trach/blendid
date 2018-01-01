import Swiper from 'swiper/dist/js/swiper';

export default class SwiperElement {
    constructor(el) {
        this.el = el;

        this.swiper = new Swiper(el, {
            // Default parameters
            slidesPerView: 4,
            spaceBetween: 0,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 375
                375: {
                    slidesPerView: 1,
                },
                // when window width is <= 640
                640: {
                    slidesPerView: 2,
                },
                // when window width is <= 1024
                1024: {
                    slidesPerView: 3,
                }
            },
            loop: el.dataset.loop === '1',

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
    }
}
