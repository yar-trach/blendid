import Swiper from 'swiper/dist/js/swiper';

export default class SwiperElement {
    constructor(el) {
        this.el = el;
        var swiperContainer = el.getElementsByClassName('swiper-container')[0];
        
        if (Number(swiperContainer.dataset.delay) > 0) {
            var autoplay = {};
            
            autoplay.delay = swiperContainer.dataset.delay * 1000;
            autoplay.disableOnInteraction = false;
        } else {
            var autoplay = false;
        }

        this.swiper = new Swiper(swiperContainer, {
            // Default parameters
            slidesPerView: Number(swiperContainer.dataset.slides),
            spaceBetween: Number(swiperContainer.dataset.space),
            loop: Number(swiperContainer.dataset.loop),
            autoplay: autoplay,
            
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 667
                667: {
                    slidesPerView: 1,
                },
                // when window width is <= 767
                767: {
                    slidesPerView: 2,
                },
                // when window width is <= 1023
                1023: {
                    slidesPerView: 3,
                },
                // when window width is <= 1199
                1199: {
                    slidesPerView: slidesNum(Number(swiperContainer.dataset.slides) - 1),
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
