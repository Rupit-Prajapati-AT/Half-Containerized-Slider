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
     var cursor = $('.cursor')
     $(document).on('mousemove', function (e) {
          cursor.css({ 'left': e.pageX, 'top': e.pageY })
     })
     $(document).on('mousedown', function (e) {
          cursor.addClass('expand')
          setTimeout(() => {
               cursor.removeClass('expand')
          }, 1000);
     })
     $('a').each(function () {
          $(this).on('mouseover', function () {
               cursor.addClass('hover');
               cursor.text('Click').css('background','rgba(0,0,0,0.4')
               var width = cursor.width();
               cursor.height(width);
          });

          $(this).on('mouseleave', function () {
               cursor.removeClass('hover');
               cursor.height("auto").width("auto").css('background','transparent').text('');
          });
     });

})

