$(document).ready(function(){

    //Slider Our Team
    $('#team_slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    //Slider Testimonials
    $('#test_slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    //Scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    });

    //Isotope
    var $isotopeGrid = $('.portfolio-images');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true
    });

    $('.isotop .filters button').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });

    //Google Map
    showMap(document.getElementById("map"), 49.568629, 34.585370);

    function showMap(mapElement, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
            position: center,
            icon:'../img/marker.png'
        });

        var mapProp= {
            center: center,
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        };

        var map = new google.maps.Map(mapElement, mapProp);
        marker.setMap(map);
    }
});
