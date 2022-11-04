$(document).ready(function () {

  let testimonial = new Swiper('.js-testimonial-slider', {

    slidesPerView: 1.2,
    navigation: {
      nextEl: '.slider-arrow .js-arrow-right',
      prevEl: '.slider-arrow .js-arrow-left',
    },
    breakpoints: {
        1920: {
            // slidesPerView: 3,
            // spaceBetween: 30
            slidesPerView: "auto",

        },
        1028: {
            slidesPerView: 1.8,
            // spaceBetween: 30
        },
        767: {
            slidesPerView: 1.2,
            // spaceBetween: 10
        }
    }
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
            slidesPerView: 1.2,
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

  
  $(".uiDesign__item").hover(function () {
    $(".uiDesign__item ").removeClass("active")
    $(this).addClass("active")
    let id = $(this).attr('data-id')
    $(".UImainText ").removeClass("active")
    $("#" + id).addClass("active")
  })
});
