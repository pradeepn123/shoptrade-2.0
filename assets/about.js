

$(document).ready(function () {

    let aboutCulterTop = new Swiper('.js-top-image-slider', {
        speed: 2000,

        // slidesPerView: 3,
        centerdSlides: "true",
        loop: true,
        freemode: true,
        autoplay: {
            duration: 2000
        },
        spaceBetween: 40,
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
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
        speed: 2000,

        // slidesPerView: 3,
        centerdSlides: "true",
        loop: true,
        freemode: true,

        autoplay: {
            duration: 3000
        },
        spaceBetween: 40,

        // direction :"ltr",
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
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
        speed: 6000,
        loop: true,
        allowTouchMove: false,
        disableOnInteraction: true,
        spaceBetween: 40,
        autoplay: {
            delay: 1,
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


    let aboutTeamContent = new Swiper('.js-team-content-slider', {

        slidesPerView: 1,
        speed: 6000,

        loop: true,
        allowTouchMove: false,
        disableOnInteraction: true,
        spaceBetween: 40,
        navigation: {
            nextEl: ' .js-arrow-right ',
            prevEl: ' .js-arrow-left',
        },

        autoplay: {
            delay: 1,
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


})