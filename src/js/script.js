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

