import $ from 'jquery';
window.$ = window.jQuery = $;

import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/tooltip';

import 'swiper/dist/js/swiper';

import './modules'

console.log(`app.js has loaded!`)

jQuery( document ).ready(function() {
    console.log( "DOM is ready!" );
});
