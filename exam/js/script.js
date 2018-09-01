$(document).ready(function(){

    $('#team_slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    $('#test_slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    showMap(document.getElementById("map"), 49.568629, 34.585370);

    function showMap(mapElement, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
            position: center,
        });

        var mapProp= {
            center: center,
            zoom: 10,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        };
        var map =new google.maps.Map(mapElement, mapProp);
        marker.setMap(map);
    }
});
