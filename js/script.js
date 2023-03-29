$(document).ready (function (){
    $('.hero-section-slider').slick({
        arrows: false,
        dots: true,
        items: 1,
        loop: true,
        animateOut: 'fadeOut'
    });
});
$(document).ready (function () {
    $('.products-slider').slick({
        centerMode: true,
        loop: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
    });
}) ;
$(document).ready (function () {
    $('.partners-slider').slick({
        speed: 2000,
        autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true,

        centerMode: true,
        loop: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
    });
});
    