
var imageRight,imageLeft;
imageRight = document.getElementsByClassName("lSNext");
imageLeft = document.getElementsByClassName("lSPrev");

imageRight.src = "../images/Line 7.png";

$(document).ready(function() {
    $("#lightCarousel").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 500, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,
 
        keyPress: true,
        controls: true,
        prevHtml: ' <img src="./images/Line 7 Copy.png" alt="">',
        nextHtml: '<img src="./images/Line 7.png" alt="">',
 
    });
  
});