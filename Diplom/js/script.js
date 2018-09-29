$(document).ready(function(){

    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.slick-next'),
        nextArrow: $('.slick-prev'),
        variableWidth: true
    });

    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });

    var $isotopeGrid = $('.saved-images');

    $isotopeGrid.isotope({
        itemSelector: 'img',
        percentPosition: true
    });

});

