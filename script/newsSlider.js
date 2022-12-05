$(document).ready(function () {
    $('.newsContent').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.newsPrev'),
        nextArrow: $('.newsNext'),
        appendDots: $("#newsDots"),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 576,
                settings: {
                  infinite: false,
                  variableWidth: true,
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                },
            },
          ],
    });
  });