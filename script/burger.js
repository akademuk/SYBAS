$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.menu').addClass("open_menu");
    else
    $('.menu').removeClass("open_menu");  
});
$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.burgerOpen').addClass("burgerOpacity");
});
$('.burgerOpen').on('click', function (e) {
    if ($("#check").is(':checked'))
    $('.body').addClass("bodyActive");
    else
    $('.body').removeClass("bodyActive");
});
$('.linkMenu').on('click', function (e) {
    document.getElementById('check').checked = false;
    $('.menu').removeClass("open_menu"); 
    $('.body').removeClass("bodyActive"); 
});

$('.closeBurger').on('click', function (e) {
    if ($("#check").is(':checked'))
    document.getElementById('check').checked = false;
    $('.menu').removeClass("open_menu");  
    $('.burgerOpen').removeClass("burgerOpacity"); 
    $('.body').removeClass("bodyActive"); 
});

