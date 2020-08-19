'use strict'

//BOM - Browser object model

function getBom() {
    var size_height_window = window.innerHeight;
    var size_width_window = window.innerWidth;

    var actual_url = window.location;
    console.log(size_height_window, size_width_window);
}

function get_paths() {
    var actual_url = window.location;
    var actual_url_href = window.location.href;
    var actual_url_host = window.location.host;

    console.log('url=' + actual_url + ' href=' + actual_url_href);
}

function openWindow() {
    window.open('htttp://www.google.com', "width=400, height=400");
}

getBom();