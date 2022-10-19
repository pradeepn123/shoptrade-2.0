$(document).ready(function () {

  let testimonial = new Swiper('.js-testimonial-slider', {

    slidesPerView: "auto",
    navigation: {
      nextEl: '.slider-arrow .js-arrow-right',
      prevEl: '.slider-arrow .js-arrow-left',
    },
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     1028: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 10
    //     }
    // }
  });
  let logo = new Swiper('.mobile-logo-slider', {

    slidesPerView: "auto",
    // navigation: {
    //   nextEl: '.slider-arrow .js-arrow-right',
    //   prevEl: '.slider-arrow .js-arrow-left',
    // },
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     1028: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 10
    //     }
    // }
  });


  $(".uiDesign__item ").hover(function () {
    $(".uiDesign__item ").removeClass("active")
    $(this).addClass("active")
    let id = $(this).attr('data-id')
    $(".UImainText ").removeClass("active")
    $("#" + id).addClass("active")
  })



  //count on scroll

  var counted = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 500,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {

              function convertToInternationalCurrencySystem(labelValue) {

                // Nine Zeroes for Billions
                return Math.abs(Number(labelValue)) >= 1.0e+9

                  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
                  // Six Zeroes for Millions 
                  : Math.abs(Number(labelValue)) >= 1.0e+6

                    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
                    // Three Zeroes for Thousands
                    : Math.abs(Number(labelValue)) >= 1.0e+3

                      ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                      : Math.abs(Number(labelValue));

              }

              let finalCount = convertToInternationalCurrencySystem(this.countNum)
              $this.text(finalCount + "+");
              //alert('finished');
            }

          });
      });
      counted = 1;
    }

  });

  //slider only mobile 

  (function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:991px)' );
  
    // keep track of swiper instances to destroy later
    let mySwiper;
  
    
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
      // or/and do nothing
      return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };
    
 
  
    const enableSwiper = function() {
  
      mySwiper = new Swiper ('.js-work-slider', {

        
        slidesPerView: 1.2,
  
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
          breakpoints: {
    
        768: {
            slidesPerView: 1.8,
            spaceBetween: 10
        }
    }
  
  
      });
  
    };
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
  
  
  
  })();

  //mobile hamberger

  $(".js-hamberger").click(function(){
    $(".shoptrade").toggleClass("active")
  })

  
});
