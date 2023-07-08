const ContactPopUp = {
  selectors: {
    tabs: ".form-tab",
    testimonial: ".testimonial-card",
    prevBtn: "#prevBtn",
    nextBtn: "#nextBtn",
    submitBtn: "#submitBtn",
    form: "#contact-form",
    input: "input",
    error: ".error",
    checkboxes: '#checkboxes-form input[type="checkbox"]',
    timelines: 'input[name="Timeline"]',
    budget: 'input[name="Budget"]',
    formProgress: "#form-progress",
    contactPopUp: "#contact-popup",
    leftContactContent: "#left-contact-content",
    testimonialContent: "#testimonial-content",
    formSubmitContent: "#form-submit-content",
    contactUs: ".contact-btn-details",
    dropZoneThumb: ".drop-zone__thumb",
    closeIconBtn: "#close-icon-btn",
    dropZone: ".drop-zone",
  },
  currentTab: 0,
  showTab: function (stepIndex) {
    var tabs = $(this.selectors.tabs);
    var cards = $(this.selectors.testimonial);
    $(tabs[stepIndex]).show();
    $(cards[stepIndex]).show();

    // ... and fix the Previous/Next buttons:
    if (stepIndex == 0) {
      document.querySelector(this.selectors.prevBtn).style.visibility =
        "hidden";
    } else {
      document.querySelector(this.selectors.prevBtn).style.visibility =
        "visible";
    }

    if (stepIndex == tabs.length - 1) {
      $(this.selectors.nextBtn).hide();
      $(this.selectors.submitBtn).show();
    } else {
      $(this.selectors.submitBtn).hide();
      $(this.selectors.nextBtn).show();
    }
    // ... and run a function that will display the correct progress:
    this.updateProgressBar(stepIndex);
  },
  nextPrev(stepIndex) {
    // This function will figure out which tab to display
    var tabs = $(this.selectors.tabs);
    var cards = $(this.selectors.testimonial);

    // Exit the function if any field in the current tab is invalid:
    if (stepIndex == 1 && !this.validateForm()) {
      return false;
    }
    // Hide the current tab:
    tabs.hide();
    cards.hide();

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
  validateForm: function () {
    // This function deals with validation of the form fields
    var valid = true;
    var tabs = document.querySelectorAll(this.selectors.tabs);
    var formInput = tabs[this.currentTab].getElementsByTagName(
      this.selectors.input
    );
    var error = document.querySelector(this.selectors.error);

    if (this.currentTab == 0) {
      if (formInput.Name.value == "") {
        formInput.Name.focus();
        formInput.Name.className += " invalid"; //add invalid class
        error.innerHTML = "Name field cannot be blank";
        valid = false;
        return false;
      } else {
        var regName = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/;
        if (!regName.test(formInput.Name.value)) {
          formInput.Name.className += " invalid"; //add invalid class
          valid = false;
          return false;
        }
      }
      if (formInput.Email.value == "") {
        formInput.Email.focus();
        formInput.Email.className += " invalid";
        error.innerHTML = "Email field cannot be blank";
        valid = false;
        return false;
      } else {
        var regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regName.test(formInput.Email.value)) {
          formInput.Email.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct email";
          valid = false;
          return false;
        }
      }

      if (formInput["Phone Number"].value != "") {
        var regName =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!regName.test(formInput["Phone Number"].value)) {
          formInput["Phone Number"].className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct phone number";
          valid = false;
          return false;
        }
      }
      if (formInput.website.value != "") {
        var regName =
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        if (!regName.test(formInput.website.value)) {
          formInput.website.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct URL";
          valid = false;
          return false;
        }
      }

      if (formInput.website.value != "") {
        var regName =
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        if (!regName.test(formInput.website.value)) {
          formInput.website.className += " invalid"; //add invalid class
          error.innerHTML = "Please enter correct URL";
          valid = false;
          return false;
        }
      }

      if (formInput.Subscribe.checked != true) {
        error.innerHTML = "Please select the checkbox to continue";
        valid = false;
        return false;
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
        error.innerHTML = "Check at least on one element";
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
      if (
        marked_checkboxes_timeline.length == 1 &&
        marked_checkboxes_budget.length == 1
      ) {
        valid = true;
      } else {
        valid = false;
      }
    }

    if (valid) {
      error.innerHTML = "";
    }
    return valid;
  },
  updateProgressBar: function (stepIndex) {
    var progress = document.querySelector(this.selectors.formProgress);
    if (stepIndex == 0) {
      progress.value = 25;
    } else if (this.currentTab == 1) {
      progress.value = 50;
    } else if (this.currentTab == 2) {
      progress.value = 75;
    } else {
      progress.value = 100;
    }
    $(".contact-content").scrollTop(0);
  },
  closePopup: function () {
    $(this.selectors.contactPopUp).fadeOut("slow");
    $("body").removeClass("overflow-hidden");
  },
  openPopUp: function () {
    $(this.selectors.contactPopUp).fadeIn("fast");
    $("body").addClass("overflow-hidden");
    this.resetValues();
  },
  resetValues: function () {
    document.querySelector(this.selectors.formSubmitContent).style.display =
      "none";
    document.querySelector(this.selectors.leftContactContent).style.display =
      "";
    document.querySelector(this.selectors.testimonialContent).style.display =
      "";
    this.currentTab = 0;
    $(this.selectors.form).trigger("reset");
    this.nextPrev(0);
    document.querySelector(this.selectors.dropZoneThumb).remove()
    document
      .querySelector(this.selectors.dropZone).innerHTML += `<span class="drop-zone__prompt">
      Drag & drop or 
      <span style="color: #000; text-decoration: underline;">browse</span>
    </span>`;
  },
  submit: async function (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    $(this.selectors.closeIconBtn).hide();
    $(".loader ").show("fast");
    $(this.selectors.form)
      .find("input, select, radio, checkbox", "button")
      .attr("disabled", "disabled");
    fetch(event.target.action, {
      method: event.target.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then(this.success.bind(this));
    return false;
  },
  success: async function () {
    document.querySelector(this.selectors.leftContactContent).style.display =
      "none";
    document.querySelector(this.selectors.testimonialContent).style.display =
      "none";
    document.querySelector(this.selectors.formSubmitContent).style.display =
      "block";
    // Redirect to Homepage after submission
    setTimeout(() => {
      window.location.href = "/";
    }, 6000)
    $(this.selectors.form).trigger("reset");
    $(".loader ").hide("fast");
    $(this.selectors.form)
      .find("input, select, radio, checkbox", "button")
      .removeAttr("disabled");
    $(this.selectors.closeIconBtn).show();
  },
  init: function () {
    this.addEventListener();
  },
  addEventListener: function () {
    // Adds "https://" to the beginning when user starts typing
    $("#website_name_validation").on("focus", function (e) {
      const prevdata = e.target.value;
      if (prevdata.length == 0) {
        e.target.value = "https://" + e.target.value;
      }
    });

    $(this.selectors.contactUs).on("click", this.openPopUp.bind(this));
    setTimeout(this.addDropZoneEvents.bind(this), 500);
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    $("#contact-content").css("height", "height", "calc(var(--vh, 1vh) * 100)");

    this.handleWindowResize();
    $(this.selectors.form).on("submit", this.submit.bind(this));

    $(window).resize(this.handleWindowResize.bind(this));
  },
  handleWindowResize: function () {
    const clonedNode = $(this.selectors.closeIconBtn).clone(true);
    $(this.selectors.closeIconBtn).remove();
    let selector = "#left-contact-content";
    if (window.innerWidth > 769) {
      selector = "#testimonial-content";
    }
    $(selector).prepend(clonedNode);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
  addDropZoneEvents: function () {
    document.querySelectorAll(".drop-zone__input").forEach(
      function (inputElement) {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", (e) => {
          inputElement.click();
        });

        inputElement.addEventListener(
          "change",
          function (e) {
            if (inputElement.files.length) {
              this.updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
          }.bind(this)
        );

        dropZoneElement.addEventListener(
          "dragover",
          function (e) {
            e.preventDefault();
            dropZoneElement.classList.add("drop-zone--over");
          }.bind(this)
        );

        const events = ["dragleave", "dragend"];

        events.forEach((eventType) => {
          dropZoneElement.addEventListener(eventType, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
          });
        });

        dropZoneElement.addEventListener(
          "drop",
          function (e) {
            e.preventDefault();

            if (e.dataTransfer.files.length) {
              inputElement.files = e.dataTransfer.files;
              this.updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            }
            dropZoneElement.classList.remove("drop-zone--over");
          }.bind(this)
        );
      }.bind(this)
    );
  },

  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  updateThumbnail: function (dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(
      this.selectors.dropZoneThumb
    );

    debugger;

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  },
};

$(document).ready(function () {
  // Audit page - before after section//
  var swiper = new Swiper('.js-bfr-afr', {
    speed:1000,
      slidesPerView: 1.8,
      spaceBetween: 25,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.audit__slider-arrow .slider-arrow .js-arrow-right',
        prevEl: '.audit__slider-arrow .slider-arrow .js-arrow-left',
      },
      breakpoints: {
          1920: {
              // slidesPerView: 3,
              // spaceBetween: 30
              slidesPerView: 2,
              spaceBetween: 25,
              slidesPerGroup: 2

          },
          1028: {
              slidesPerView: 1.8,
              // spaceBetween: 30
          },
          767: {
              slidesPerView: 1.2,
              slidesPerGroup: 1,
              // spaceBetween: 10
          }
      }
  });
  // Contact Form - Final Page , Change Name TO Upload instead of Drag and Drop or Browse
  if ($(window).width() < 480) {
    document
      .querySelector(
        "#contact-popup #left-contact-content .form-content .form-tab .form-group .drop-zone__prompt span"
      )
      .previousSibling.remove();
    document.querySelector(
      "#contact-popup #left-contact-content .form-content .form-tab .form-group .drop-zone__prompt span"
    ).innerHTML = "Upload File";
  }
  $(".loader ").hide();
  ContactPopUp.init();

  // $(".play-icon").click(function (e) {
  //   // $("body").addClass("hide-scroll");
  //   e.preventDefault();
  //   $(".model-popup").fadeIn();
  //   let source = $(".iframe-vedio").attr("src");
  //   $(".iframe-vedio").attr("src", source + "?autoplay=1");
  // });

  $(".close-model").click(function () {
    // $('.yt_player_iframe').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    // $('.yt_player_iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    $("body").removeClass("hide-scroll");
    let src = $(".yt_player_iframe").attr("src");
    $(".yt_player_iframe").attr("src", src);
    $(".model-popup").fadeOut();
  });

  //mobile hamberger
  $(".js-hamberger").click(function () {
    $(".shoptrade").toggleClass("active");
    $('body').toggleClass('overflow-hide');
  });

  $(window).scroll(function () {
    var sticky = $("#shopify-section-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 30) sticky.addClass("fixed-header");
    else sticky.removeClass("fixed-header");
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
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(0) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
          ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(0) + "K"
          : Math.abs(Number(labelValue)) + "N";
  }

  $(".count").each(function () {
    let countTo = $(this).attr("data-count");
    let countString = convertToInternationalCurrencySystem(countTo);

    $(this).attr(
      "data-converted",
      countString.substring(0, countString.length - 1)
    );
    if (countString.slice(countString.length - 1) != "N") {
      // $(this).attr("data-charactor", countString.slice(countString.length - 1));
       $(this).attr("data-charactor","M"+$(this).attr("data-charactor"));
    }
  });

  //count on scroll
  var counted = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop + 400) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-converted");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 1000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(
                $this.attr("data-currrencySige") +
                $this.attr("data-converted") +
                $this.attr("data-charactor")
              );
            },
          }
        );
      });
      counted = 1;
    }
  });

  // Clicking on Contact Button in Footer Must bring up the new Contact popup instead of Contact Form
  // $("#footer-id-4 a").attr('href', "javascript:;");
  // $("#footer-id-4 a").on('click', function(){
  //   $("#contact-btn-details").trigger('click');
  // })

  // Clicking on Contact Button on About Us page must bring up the new Contact popup instead of Contact Form
  $("#contact-btn-about, .plus-btn-main .plus-btn, .lets-talk-btn, .link-1").on('click', function () {
    $("#contact-btn-details").trigger('click');
  })
});


//Clicking on lets talk in sitemap page must bring up the new contact popup
$("#letstalk-btn-sitemap, .plus-btn-main .plus-btn, .lets-talk-btn, .link-1").on('click', function () {
  $("#contact-btn-details").trigger('click');
})





// Extract Youtube video ID from Youtube video URL
const extractYoutubeId = function (url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
};

// Inject script into page asynchronously
const injectScript = function ({
  id,
  src,
}) {
  const existingScript = document.querySelector(`#${id}`);
  if (existingScript) return;

  const tag = document.createElement('script');
  tag.src = src;
  tag.id = id;

  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

class VideoPlayerYoutube {
  constructor(config) {
    this.isScriptInjected = false;
    this.isScriptLoaded = false;
    this.config = config;
    this.events = {
      onEnd: [],
    };

    // Public methods
    return {
      // NOTE: Make sure that VideoPlayerYoutube has an API consistent with VideoPlayerVimeo
      addEventListener: this.addEventListener.bind(this),
      init: this.init.bind(this),
      play: this.play.bind(this),
    };
  }

  addEventListener(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  injectIframe() {
    this.player = new YT.Player(this.config.root, {
      height: '390',
      width: '640',
      videoId: extractYoutubeId(this.config.url),
      playerVars: {
        showinfo: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      enablejsapi: 1,
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
      },
    });
  }

  // See: https://developers.google.com/youtube/iframe_api_reference#Playback_status
  onPlayerStateChange(event) {
    const hasEnded = event.data === 0;

    if (hasEnded) {
      this.events.onEnd.forEach((callback) => {
        callback();
      });
    }
  }

  init() {
    if (this.isScriptInjected) return;

    injectScript({
      id: 'video-player-iframe-youtube',
      src: 'https://www.youtube.com/iframe_api',
    });
    this.isScriptInjected = true;

    const intervalFunc = () => {
      // Only load iframe once YT script is ready to be used
      if (window.YT && window.YT.Player) {
        this.isScriptLoaded = false;
        clearInterval(interval);
        this.injectIframe();
      }
    };

    const interval = window.setInterval(intervalFunc, 100);
  }

  play() {
    if (!this.player.playVideo) {
      // Return false if player and its playVideo method isn't ready yet to be called
      return false;
    }

    // See: https://developers.google.com/youtube/iframe_api_reference#Playback_controls
    this.player.playVideo();
    return true;
  }
}

class VideoPlayerVimeo {
  constructor(config) {
    this.isScriptInjected = false;
    this.isScriptLoaded = false;
    this.config = config;
    this.events = {
      onEnd: [],
    };

    // Public methods
    return {
      addEventListener: this.addEventListener.bind(this),
      init: this.init.bind(this),
      play: this.play.bind(this),
    };
  }

  addEventListener(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  injectIframe() {
    // See: https://github.com/vimeo/player.js#create-a-player
    this.player = new Vimeo.Player(this.config.root, {
      url: this.config.url,
      width: 640
    });

    // See: https://github.com/vimeo/player.js#events
    this.player.on('ended', this.onPlayerEvent.bind(this, 'ended'));
  }

  onPlayerEvent(eventName) {
    if (eventName === 'ended') {
      this.events.onEnd.forEach((callback) => {
        callback();
      });

      // Reset video to beginning
      // NOTE: As of this writing, `this.player.unload()` doesn't work as expected if Vimeo loads staff picks at the end of the video which is why we do what do here
      this.player.destroy();
      this.injectIframe();
    }
  }

  init() {
    if (this.isScriptInjected) return;

    injectScript({
      id: 'video-player-iframe-vimeo',
      src: 'https://player.vimeo.com/api/player.js',
    });
    this.isScriptInjected = true;

    const intervalFunc = () => {
      // Only load iframe once Vimeo script is ready to be used
      if (window.Vimeo && window.Vimeo.Player) {
        this.isScriptLoaded = false;
        clearInterval(interval);
        this.injectIframe();
      }
    };

    const interval = window.setInterval(intervalFunc, 100);
  }

  play() {
    // NOTE: There doesn't seem to be a reliable/non-hacky way to determine if the play method is fully ready.
    // If the play of this video is triggered immediately after pageload, the user will have to manually click on the play button in the iframe.
    this.player.play();
    return true;
  }
}

class VideoPlayer {
  constructor(element, config) {
    this.element = element;
    this.previewContainer = element.querySelector('[data-js="preview"]');
    this.videoContainer = element.querySelector('[data-js="video"]');

    // This element is going to be used/modified by our video platform-specific libraries
    const videoRoot = element.querySelector('[data-js="video-root"]');
    const type = element.getAttribute('data-player-type');
    const url = element.getAttribute('data-player-url');

    if (type === 'youtube') {
      this.Player = new VideoPlayerYoutube({
        root: videoRoot,
        url,
      });
    } else if (type === 'vimeo') {
      this.Player = new VideoPlayerVimeo({
        root: videoRoot,
        url,
      });
    } else {
      console.error('Invalid video type. Things aren\'t going to work.');
      return;
    }

    this.Player.init();
    this.Player.addEventListener('onEnd', this.reset.bind(this));

    this.addEventlisteners();
  }

  show(element) {
    element.setAttribute('data-hidden', 'false');
  }

  hide(element) {
    element.setAttribute('data-hidden', 'true');
  }

  play() {
    const success = this.Player.play();

    if (success) {
      this.hide(this.previewContainer);
      this.show(this.videoContainer);
    } else {
      this.handleNotReady();
    }
  }

  reset() {
    this.show(this.previewContainer);
    this.hide(this.videoContainer);//
  }

  handleNotReady() {
    console.log('Video isn\'t ready yet to be viewed. Try again in a few seconds.');
  }

  addEventlisteners() {
    this.previewContainer.addEventListener('click', this.play.bind(this));
  }
}

// Initialize components
const players = document.querySelectorAll('.video-player');

for (let { length: i } = players; i > 0; i -= 1) {
  const player = players[i - 1];
  new VideoPlayer(player);
}
// The backdrop loader 
$(document).ready(function () {
  $(".backdrop").show();
  $("body").css("overflow", "hidden");

  setTimeout(function () {
    $(".backdrop").hide();
    $("body").css("overflow", "auto");
  }, 1);
});
// 


$("#contact-btn-service").on('click', function () {
  $("#contact-btn-details").trigger('click');
})


// Tech Stack - Our Services Page
document.addEventListener('DOMContentLoaded', function () {
  const accordionImagePlusIcon = document.querySelectorAll(".accordion_image_container .plus_icon");
  if (accordionImagePlusIcon != null) {
    const plusIconEle = document.querySelectorAll('.accordion_image_container .accordion_image_content .accordion_image_heading');
    const accordionImageBlocksContainer = document.querySelectorAll('.accordion_image_container .accordion_image_content .accordion_image_blocks');
    for (let i = 0; i < plusIconEle.length; i++) {
      plusIconEle[i].addEventListener('click', function () {
        accordionImagePlusIcon[i].classList.toggle("rotate_plus_icon");
        accordionImageBlocksContainer[i].classList.toggle("hide_height_on_click");
      })
    }
  }
})

$(".play-icon").click(function (e) {
  $(".vedio__info").hide();
});

// Audit page - before after section//
var swiper = new Swiper('.js-bfr-afr', {
  speed:1000,
    slidesPerView: 1.8,
    spaceBetween: 25,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.audit__slider-arrow .slider-arrow .js-arrow-right',
      prevEl: '.audit__slider-arrow .slider-arrow .js-arrow-left',
    },
    breakpoints: {
        1920: {
            // slidesPerView: 3,
            // spaceBetween: 30
            slidesPerView: 2,
            spaceBetween: 25,
            slidesPerGroup: 2

        },
        1028: {
            slidesPerView: 1.8,
            // spaceBetween: 30
        },
        767: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            // spaceBetween: 10
        }
    }
});


// the image sliding logos
$(document).ready(function () {

  //Audit page - FAQ Accordion//
  $('.accordion__header').click(function(e) {
    e.preventDefault();
    var currentIsActive = $(this).hasClass('is-active');
    $(this).parent('.accordion').find('> *').removeClass('is-active');
    $('.accordion__toggle svg').removeClass('rotate_svg');
    if(currentIsActive != 1) {
      $(this).addClass('is-active');
      $(this).next('.accordion__body').addClass('is-active');
      $(this).find('.accordion__toggle svg').addClass('rotate_svg');
    }
  });

  let slidingLogos = new Swiper('.js-top-image-sliders', {
    speed: 24000,
    autoplay: true,
    loop: true,
    // slidesPerView: 5,
    allowTouchMove: false,
    pauseOnMouseEnter: false,
    autoplay: {
      delay: 0,
    },
    loop: true,
    allowTouchMove: false,
    pauseOnMouseEnter: false,
  });
});


// swiper our clients section and  destroying swipper @ more than 769px
const breakpoint = window.matchMedia('(min-width:769px)');

let mySwiper;
const breakpointChecker = function () {
  console.log(breakpoint)
  if (breakpoint.matches === true) {

    if (mySwiper !== undefined) mySwiper.destroy(true, true);


    return;

  } else if (breakpoint.matches === false) {

    return enableSwiper();

  }

};


const enableSwiper = function () {

  mySwiper = new Swiper('.js-top-image-sliders-mobile', {
    speed: 4000,
    autoplay: true,
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
    pauseOnMouseEnter: false,
    breakpoints: {
      520: {
        slidesPerView: 1,
      },
    }

  });

};

breakpoint.addListener(breakpointChecker);

breakpointChecker();

// active slides shoptrade-info starts here
var mySwiper_new = new Swiper('.shoptrade-plus-info-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    hide: false,
    draggable: true,
  },
  breakpoints: {
    1023: {
      slidesPerView: 1,
    },
    1400: {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        hide: false,
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 3,
    },
  },
});
function togglePagination() {
  if (mySwiper_new.isEnd && mySwiper_new.slides.length <= mySwiper_new.params.slidesPerView) {
    mySwiper_new.pagination.el.style.display = 'none';
  } else {
    mySwiper_new.pagination.el.style.display = 'block';
  }
}

togglePagination();
window.addEventListener('resize', togglePagination);

// active slides shoptrade-info ends here


// manuel images scroll .manuel-img-scroll-main
var swiper_manual = new Swiper('.grid-item-main-scroll', {
  slidesPerView: 3,
  spaceBetween: 20,
  // loop: true,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    520: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 2.3,
    },
  }
});


