$(document).ready(function () {

    $('.accordeon_head_click').click(function () {
        if (!$(this).hasClass('open')) {
            closeAllAccordeonText($(this).closest('.accordeon'));
            openAccordeonText($(this).next('.accordeon_information'));
            $(this).addClass('open');
        }
    });

    function closeAllAccordeonText(accordeon) {
        accordeon.find('.accordeon_head_click.open + .accordeon_information').slideUp();
        accordeon.find('.accordeon_head_click.open').removeClass('open');
    }

    function openAccordeonText(accordeonText) {
        accordeonText.slideDown();
    }

});
