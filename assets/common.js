

const ContactPopUp = {
  selectors: {
    tabs: ".form-tab",
    testimonial: ".testimonial-card",
    prevBtn: "#prevBtn",
    nextBtn: '#nextBtn',
    submitBtn: '#submitBtn',
    form: "#contact-form",
    input: 'input',
    error: '.error',
    checkboxes: 'input[type="checkbox"]',
    timelines: 'input[name="timeline"]',
    budget: 'input[name="budget"]',
    formProgress: "#form-progress",
    contactPopUp: '#contact-popup',
    leftContactContent:'#left-contact-content',
    testimonialContent:'#testimonial-content',
    formSubmitContent:'#form-submit-content',
    contactUs: "#contact-btn-details"
  },
  currentTab: 0,
  showTab: function(stepIndex) {
    var tabs = $(this.selectors.tabs);
    var cards = $(this.selectors.testimonial)
    $(tabs[stepIndex]).show()
    $(cards[stepIndex]).show()
  
    // ... and fix the Previous/Next buttons:
    if (stepIndex == 0) {
      document.querySelector(this.selectors.prevBtn).style.visibility = "hidden";
    } else {
      document.querySelector(this.selectors.prevBtn).style.visibility = "visible";
    }

    if (stepIndex == (tabs.length - 1)) {
      $(this.selectors.nextBtn).fadeOut("fast")
      $(this.selectors.submitBtn).fadeIn("fast")
    } else {
      $(this.selectors.nextBtn).fadeIn("fast")
      $(this.selectors.submitBtn).fadeOut("fast")
    }
    // ... and run a function that will display the correct progress:
    this.updateProgressBar(stepIndex)
  },
  nextPrev(stepIndex) {
    // This function will figure out which tab to display
    var tabs = $(this.selectors.tabs);
    var cards = $(this.selectors.testimonial)
    // Exit the function if any field in the current tab is invalid:
    if (stepIndex == 1 && !this.validateForm()) {
      return false;
    }  
    // Hide the current tab:
    tabs.hide()
    cards.hide()
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + stepIndex;
    // if you have reached the end of the form...
    if (this.currentTab >= tabs.length) { 
      // ... the form gets submitted:
      document.querySelector(this.selectors.form).submit();
      return false;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  },
  validateForm: function() {
    // This function deals with validation of the form fields
    var valid = true;
    var tabs = document.querySelectorAll(this.selectors.tabs);
    var formInput = tabs[this.currentTab].getElementsByTagName(this.selectors.input);
    var error = document.querySelector(this.selectors.error)

    if (this.currentTab == 0){
      if (formInput.name.value == "") {
        formInput.name.focus() ;
        formInput.name.className += " invalid"; //add invalid class
        error.innerHTML = "Name field cannot be blank"
        valid = false;
        return false;
      } else {
        var regName = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/;
        if (!regName.test(formInput.name.value)) {
          formInput.name.className += " invalid"; //add invalid class
          valid = false;
          return false
        }
      }
      if (formInput.email.value == "") {
        formInput.email.focus() ;
        formInput.email.className += " invalid";
        error.innerHTML = "Email field cannot be blank";
        valid = false;
        return false
      } else {
        var regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regName.test(formInput.email.value)) {
          formInput.email.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct email";
          valid = false;
          return false
        }
      }

      if (formInput.phone.value != "") {
        var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!regName.test(formInput.phone.value)) {
          formInput.phone.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct phone number"
          valid = false;
          return false;
        }
      }
      if (formInput.website.value != "") {
        var regName = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        if (!regName.test(formInput.website.value)) {
          formInput.website.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct URL";
          valid = false;
          return false
        }
      }

      if (formInput.website.value != "") {
        var regName = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        if (!regName.test(formInput.website.value)) {
          formInput.website.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct URL";
          valid = false;
          return false
        }
      }
    }

    if (this.currentTab == 1) {
      // get all the checkbox present on the tab
      let checkbox = document.querySelectorAll(this.selectors.checkboxes);
      let marked_checkboxes = [];

      // use a for each loop to check the checked condition on each checkboxes
      checkbox.forEach((check_box, index) => {
        if (check_box.checked) { 
          // add the checked checkboxes to the marked_checkboxes array
          marked_checkboxes.push(check_box);
        }
      });

      // give a condition that a minimum of 1 option must be selected
      if (marked_checkboxes.length >= 1) {
        valid = true;
      } else {
        valid = false;
      }
    }

    if (this.currentTab == 2) {
      // valid = false
      // get all the radio buttons present on the tab
      let radioTimeline = document.querySelectorAll(this.selectors.timelines);
      let radioBudget = document.querySelectorAll(this.selectors.budget);
      let marked_checkboxes_timeline = [];
      let marked_checkboxes_budget = [];

      // use a for each loop to check the checked condition on each checkboxes
      radioTimeline.forEach((check_box, index) => {
        if (check_box.checked) { 
           // add the checked checkboxes to the marked_checkboxes array
          marked_checkboxes_timeline.push(check_box);
        }
      });
      radioBudget.forEach((check_box, index) => {
        if (check_box.checked) { 
          // add the checked checkboxes to the marked_checkboxes array
          marked_checkboxes_budget.push(check_box);
        }
      });

      // give a condition that a minimum of 1 option must be selected
      if (marked_checkboxes_timeline.length == 1 && marked_checkboxes_budget.length == 1) {
        valid = true;
      } else {
        valid = false;
      }
    }

    if (valid) {
      error.innerHTML = ""
    }
    return valid;
  },
  updateProgressBar: function(stepIndex) {
    var progress = document.querySelector(this.selectors.formProgress);
    if (stepIndex == 0) {
      progress.value = 25
    } else {
      progress.value += 25
    }
  },
  closePopup: function() {
    $(this.selectors.contactPopUp).fadeOut("slow")
    $('body').removeClass("overflow-hidden")
  },
  openPopUp: function() {
    this.resetValues()
    $(this.selectors.contactPopUp).fadeIn("fast")
    $('body').addClass("overflow-hidden")
  },
  resetValues: function() {
    this.currentTab = 0
    $(this.selectors.form).trigger("reset")
    this.nextPrev(0)

  },
  submit: function() {
    document.querySelector(this.selectors.leftContactContent).style.display = "none";
    document.querySelector(this.selectors.testimonialContent).style.display = "none";
    document.querySelector(this.selectors.formSubmitContent).style.display = "block";
  },
  init: function() {
    this.addEventListener()
  },
  addEventListener: function() {
    this.openPopUp()
    document.querySelector(this.selectors.contactUs).addEventListener("click", this.openPopUp.bind(this))
  }
}

$(document).ready(function () {
  $(".loader ").hide()
  ContactPopUp.init()

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
 
  $(window).scroll(function () {
    var sticky = $('header'),
      scroll = $(window).scrollTop();

    if (scroll >= 100 )
      sticky.addClass('fixed-header');
    else
      sticky.removeClass('fixed-header');

  });


  // let lastScroll = 0;
  // $(window).scroll(function () {
  //   var sticky = $('header'),
  //     scroll = $(window).scrollTop();

  //   if (scroll >= 100 && scroll > lastScroll)
  //     sticky.addClass('fixed-header');
  //   else
  //     sticky.removeClass('fixed-header');
  //   lastScroll = scroll
  // });
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
              $this.text($this.attr('data-currrencySige') + $this.attr('data-converted') + $this.attr("data-charactor") );
            
            }

          });
      });
      counted = 1;
    }
  });
})
