/**
 * Carousel: Home Events
 */
const homeEvents = $ => {
    function slickSliderInit() {
      if ($('.nav-tabs__content--items').length > 0) {
        $('.nav-tabs__content--items').each((index, elem) => {
          const $slickSlider = $(elem);
          $slickSlider.not('.slick-initialized').slick({
            infinite: false, // always show arrows
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            speed: 300,
            draggable: true,
            variableWidth: false,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  adaptiveHeight: false,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  adaptiveHeight: false,
                },
              },
            ],
          });
        });
      }
      $(`button.nav-tabs__btn[data-tab="tab-0"]`).addClass('active');
      $(`#tab-0`).addClass('active').siblings().removeClass('active');
    }

    function tabsToggle(context) {
      $('.nav-tabs__content--items').slick('setPosition');
      var tabID = $(this).attr('data-tab');
      $(this).addClass('active').siblings().removeClass('active');
      $(`#${tabID}`).addClass('active').siblings().removeClass('active');
    }
  
    Drupal.behaviors.slickFeature = {
      attach(context) {
        $(document, context).ready(slickSliderInit());
        $('.nav-tabs__btn', context).on('click', tabsToggle);
      },
    };
  };
  
  homeEvents(jQuery);
  