

$(document).ready(function () {

    let aboutCulterTop = new Swiper('.js-top-image-slider', {
        spaceBetween: 50,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 3,        
        allowTouchMove: false,    
        pauseOnMouseEnter:true, 
        breakpoints: {            
            1028: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1.3,
                spaceBetween: 10
            }
        }
    });
    let aboutCulterBottom = new Swiper('.js-bottom-image-slider', {
        spaceBetween: 50,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
          delay: 1,
        },
        loop: true,
        slidesPerView: 3,
        allowTouchMove: false,
        pauseOnMouseEnter:true,        
        breakpoints: {         
            1028: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1.3,
                spaceBetween: 10
            }
        }
    });


    let aboutTeam = new Swiper('.js-team-slider', {

        slidesPerView: 1,
        speed: 500,
        loop: true,
        effect:'fade',
        centerdSlides:true,
        breakpoints: {
            1920: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });


    let aboutTeamContent = new Swiper('.js-team-content-slider', {

        slidesPerView: 1,
        speed: 1000,

        loop: true,
   
        spaceBetween: 40,
        navigation: {
            nextEl: ' .js-arrow-right ',
            prevEl: ' .js-arrow-left',
        },

    
        breakpoints: {
            1920: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    aboutTeam.controller.control = aboutTeamContent;
    aboutTeamContent.controller.control = aboutTeam;
// 
let abtctn = document.querySelector("#contact-btn-about");

abtctn.addEventListener("click", function(){
    let contactSlider = new Swiper('#contactForm_slider', {
        speed: 1000,
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        draggable: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.swiper-pagination-contact',
            clickable: true,
        },
    });

    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            // Stop the Swiper when a contact slide is clicked
            contactSlider.autoplay.stop();
        });
    });

    const closeCtnBtn = document.querySelectorAll('#close-icon-btn');
    closeCtnBtn.forEach(function (e) {
        e.addEventListener('click', function () {
            contactSlider.destroy(true, true);
        });
    });
});

});