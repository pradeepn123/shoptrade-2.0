$(document).ready(function(){
      //model 
  $(".play-icon").click(function (e) {
    $("body").addClass("hide-scroll")
    e.preventDefault()
    $(".model-popup").fadeIn()
    let source = $(".iframe-vedio").attr("src")
    $(".iframe-vedio").attr("src", source + "?autoplay=1")

  })

  $(".close-model").click(function () {
    $("body").removeClass("hide-scroll")

    $(".model-popup").fadeOut()

  })
})