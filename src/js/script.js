$(document).ready(function(){
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
                dots: false
              }
            }
        ]
      });
  });

/* const slider = tns({
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
  }); */

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    })(jQuery);

  $('.catalog-item__link').each(function(i)
  {
      $(this).on('click',function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');    
      });
    });
  
  $('[data-modal=consultation]').on('click', function() {
          $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('');
    });


  $('.catalog-item__btn').each(function (i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
         
        });
 
  $('#order form').validate({
      rules: {
        name: "required",
        phone:"required",
        email: {required: true,
          email: true
        }
      },
      messages: {
        name: "Введите ваше имя",
        phone:"Введите верно ваш номер телефона",
        email: { required: "Введите свою почту",
                  email: "Проверте правильность ввода адреса"},
      },
      });
  $('#consultation form').validate({
    rules: {
      name: "required",
      phone:"required",
      email: {required: true,
        email: true
      }
    },
    messages: {
      name: "Введите ваше имя",
      phone:"Введите верно ваш номер телефона",
      email: { required: "Введите свою почту",
                email: "Проверте правильность ввода адреса"},
    },
    });
  $('#cons-form' ).validate({
      rules: {
        name: "required",
        phone:"required",
        email: {required: true,
          email: true
        }
      },
      messages: {
        name: "Введите ваше имя",
        phone:"Введите верно ваш номер телефона",
        email: { required: "Введите свою почту",
                  email: "Проверте правильность ввода адреса"},
      },
      });

});

 
    
    

