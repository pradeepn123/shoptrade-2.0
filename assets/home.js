$(document).ready(function () {

  setTimeout(function(){
    $(".js-video-thumbnail").hide()
    $(".js-desktop-video video").show()
 
    $('video').css("opacity","1")
  },1000)

  let testimonial = new Swiper('.js-testimonial-slider', {
    speed:1000,
    autoHeight: false,
    slidesPerView: 1.2,
    spaceBetween: 40,
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

  // let marquee = new Swiper('.js-marquee-slider', {
  //   spaceBetween: 50,
  //   centeredSlides: true,
  //   speed: 50000,
  //   autoplay: {
  //     delay: 1,
  //   },
  //   loop: true,
  //   slidesPerView:'auto',
  //   allowTouchMove: false,
  //   // disableOnInteraction: true,
  //   pauseOnMouseEnter:true
  // });
  

  // $('.js-marquee-slider').on('mouseenter', function(e){

  //   marquee.autoplay.stop()
  // })
  // $('.js-marquee-slider').on('mouseleave', function(e){
 
  //   marquee.autoplay.start();
  // })

  let services = new Swiper('.js-services-slider', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    
  });
  

  $('.js-services-slider').on('mouseenter', function(e){
    services.autoplay.stop()
  })
  $('.js-services-slider').on('mouseleave', function(e){
    services.autoplay.start();
  })
  


  let logo = new Swiper('.mobile-logo-slider', {
    speed:1000,

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
    const breakpoint = window.matchMedia( '(min-width:920px)' );
  
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

        speed:1000,
        
        slidesPerView: 1.2,
  
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
          breakpoints: {
    
        919: {
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        720: {
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

  // $(".js-hamberger").click(function(){
  //   alert(1)
  //   $(".shoptrade").toggleClass("active")
  // })

  
  $(".uiDesign__item").hover(function () {
    $(".uiDesign__item ").removeClass("active")
    $(this).addClass("active")
    let id = $(this).attr('data-id')
    $(".UImainText ").removeClass("active")
    $("#" + id).addClass("active")
  })


  // js/common/ui/marquee-text.js
  var MarqueeText = class extends HTMLElement {
    constructor() {
      super();
      if (window.ResizeObserver) {
        new ResizeObserver(this._calculateDuration.bind(this)).observe(this);
      }
    }
    _calculateDuration(entries) {
      const scrollingSpeed = parseInt(this.getAttribute("scrolling-speed") || 5), contentWidth = entries[0].contentRect.width, slowFactor = 1 + (Math.min(1600, contentWidth) - 375) / (1600 - 375);
      this.style.setProperty("--marquee-animation-duration", `${(scrollingSpeed * slowFactor * entries[0].target.querySelector("span").clientWidth / contentWidth).toFixed(3)}s`);
    }
  };
  if (!window.customElements.get("marquee-text")) {
    window.customElements.define("marquee-text", MarqueeText);
  }
});
