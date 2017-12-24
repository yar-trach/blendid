import $ from 'jquery';
window.jQuery = $;

import './modules'

console.log(`app.js has loaded!`)

$( document ).ready(function() {
    console.log( "ready!" );
});
