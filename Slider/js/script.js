$(document).ready(function(){

    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slick-next'),
        nextArrow: $('.slick-prev'),
        variableWidth: true
    });
});