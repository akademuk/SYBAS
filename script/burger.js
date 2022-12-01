$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.menu').addClass("open_menu");
    else
    $('.menu').removeClass("open_menu");  
});

$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.body').addClass("bodyActive");
    else
    $('.body').removeClass("bodyActive");
});
