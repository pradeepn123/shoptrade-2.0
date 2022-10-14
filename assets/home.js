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
        

        //model 
        $(".play-icon").click(function(e){
            $("body").addClass("hide-scroll")
            e.preventDefault()
            $(".model-popup").fadeIn()  
            let source = $(".iframe-vedio").attr("src")
            $(".iframe-vedio").attr("src",source+"?autoplay=1")

        })

        $(".close-model").click(function(){
            $("body").removeClass("hide-scroll")

            $(".model-popup").fadeOut()

        })
        //count on scroll

        var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {

            function convertToInternationalCurrencySystem (labelValue) {

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

            let finalCount = convertToInternationalCurrencySystem (this.countNum)
            $this.text(finalCount+"+");
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


    });
    