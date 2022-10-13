$(document).ready(function() {
   
    let testimonial =  new Swiper('.js-testimonial-slider', {
           
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


        $(".uiDesign__item ").hover(function(){
            $(".uiDesign__item ").removeClass("active")
            $(this).addClass("active")
            let id = $(this).attr('data-id')
            $(".UImainText ").removeClass("active")
            $("#"+id).addClass("active")
        })
        


    });
    