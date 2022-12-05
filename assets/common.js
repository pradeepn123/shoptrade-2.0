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

      // if (prevdata.length == 1 && e.target.value == "h") {
      //   e.target.value = "https://" ;
      // }

      // if (prevdata.length == 1 && prevdata[0] != 'h') {
      //   e.target.value = "https://" + e.target.value;
      // }

      // if (
      //   (prevdata.length == 4 || prevdata.length == 5) &&
      //   (e.target.value == "https" || e.target.value == "http")
      // ) {
      //   e.target.value = "";
      // }
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
  $(".loader ").hide();
  ContactPopUp.init();

  $(".play-icon").click(function (e) {
    $("body").addClass("hide-scroll");
    e.preventDefault();
    $(".model-popup").fadeIn();
    let source = $(".iframe-vedio").attr("src");
    $(".iframe-vedio").attr("src", source + "?autoplay=1");
  });

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
  });

  $(window).scroll(function () {
    var sticky = $("header"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("fixed-header");
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
      $(this).attr("data-charactor", countString.slice(countString.length - 1));
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
});
