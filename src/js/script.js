/* $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1100,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-solid.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
      });
  }); */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: ['<img src="img/icons/left-solid.png" alt="">','<img src="img/icons/right-solid.png" alt="">'],
    responsive: {
      320: {
        controls: false,
        touch: true,
      },
      700: {
        controls: false,
        touch: true,
      },
      900: {
        controls: true,      }
    }
  });

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    })(jQuery);

