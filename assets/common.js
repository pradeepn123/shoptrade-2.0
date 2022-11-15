$(document).ready(function () {
  $(".loader ").hide()
  //model 
  $(".play-icon").click(function (e) {
    $("body").addClass("hide-scroll")
    e.preventDefault()
    $(".model-popup").fadeIn()
    let source = $(".iframe-vedio").attr("src")
    $(".iframe-vedio").attr("src", source + "?autoplay=1")

  })

  $(".close-model").click(function () {
    // $('.yt_player_iframe').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

    // $('.yt_player_iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    $("body").removeClass("hide-scroll")
    let src = $('.yt_player_iframe').attr("src")
    $('.yt_player_iframe').attr("src", src)
    $(".model-popup").fadeOut()

  })



  //mobile hamberger

  $(".js-hamberger").click(function () {

    $(".shoptrade").toggleClass("active")
  })


  // conversion 
  function convertToInternationalCurrencySystem(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(0) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6

        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

          ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + "K"

          : Math.abs(Number(labelValue)) + "N"

  }
  $('.count').each(function () {
    let countTo = $(this).attr('data-count');
    let countString = convertToInternationalCurrencySystem(countTo)

    $(this).attr("data-converted", countString.substring(0, (countString.length) - 1))
    if (countString.slice((countString.length - 1)) != "N") {
      $(this).attr("data-charactor", countString.slice((countString.length - 1)))
    }
  })


  //count on scroll

  var counted = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > (oTop + 400)) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-converted');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text("$" + $this.attr('data-converted') + $this.attr("data-charactor") );
            
            }

          });
      });
      counted = 1;
    }

  });

  let lastScroll = 0;
  $(window).scroll(function () {
    var sticky = $('header'),
      scroll = $(window).scrollTop();

    if (scroll >= 100 && scroll > lastScroll)
      sticky.addClass('fixed-header');
    else
      sticky.removeClass('fixed-header');
    lastScroll = scroll
  });

  // $(".shoptrade__nav-list li").click(function(){

  //   $(".shoptrade__nav-list li").removeClass("active")
  //   $(this).addClass("active")
  // })



})

