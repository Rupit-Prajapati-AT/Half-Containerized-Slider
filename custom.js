$(document).ready(function () {
     $(".slick-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '11%',
          dots: false,
          arrows: false,
          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 3,
                         centerPadding: '15%',
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 2,
                         centerPadding: '20%',
                    }
               },
               {
                    breakpoint: 576,
                    settings: {
                         slidesToShow: 1,
                         centerPadding: '33%',
                    }
               },
          ]
     });
     $(".slick-slider-right").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '33%',
          dots: false,
          arrows: false,
     })
})