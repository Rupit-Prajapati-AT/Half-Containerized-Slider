$(document).ready(function () {
     $(".slick-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '11%',
          dots: false,
          arrows: false,
          focusOnSelect: true,
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
          focusOnSelect: true,
          arrows: false,
     })
     var cursor = $('.cursor');
     var text = $('.text');

     // Follow mouse movement
     $('img').on('mousemove', function (e) {
          cursor.css({ 'left': e.pageX, 'top': e.pageY });
     });

     // Expand cursor on mouse down
     $('img').on('mousedown', function () {
          cursor.addClass('expand');
          setTimeout(function () {
               cursor.removeClass('expand');
          }, 1000);
     });

     $('img').each(function () {
          $(this).on('mouseover', function () {
               cursor.css({ transform: 'translate(-50%, -50%)' });
               text.css({ transform: 'scale(1)' });
          });
          $(this).on('mouseleave', function () {
               cursor.css({ transform: 'translate(-50%, -50%)' });
               text.css({ transform: 'scale(0)' });

          });
     });
})

