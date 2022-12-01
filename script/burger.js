$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.menu').addClass("open_menu");
    else
    $('.menu').removeClass("open_menu");  
});