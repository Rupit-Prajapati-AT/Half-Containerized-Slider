$(document).ready(function () {
     $(".slick-slider").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: false,
          draggable: false,
          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 3,
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 2,
                    }
               },
               {
                    breakpoint: 576,
                    settings: {
                         slidesToShow: 1,
                    }
               },
          ]
     });
     var slider = $(".slick-slider");
     var active = $('.slick-active').length
     var totalSlides = slider.slick('getSlick').slideCount;

     $(".element").on('click', function () {
          var currentIndex = slider.slick('slickCurrentSlide');
          if (currentIndex == (totalSlides - active)) {
               console.log('working')
               return slider.slick('slickGoTo', 0);
          } else {
               return slider.slick('slickNext')
          }
     })

     var cursor = $('.cursor');
     var text = $('.text');

     $('img').on('mousemove', function (e) {
          cursor.css({ 'left': e.pageX, 'top': e.pageY });
     });

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

