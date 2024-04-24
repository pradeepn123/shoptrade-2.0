(function (C, A, L) {
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          api.q.push(arguments);
        };
        api.q = api.q || [];
        const namespace = ar[1];
        if (typeof namespace === "string") {
          cal.ns[namespace] = api;
        } else {
          cal.q.push(ar);
        }
        return;
      }
      cal.q.push(ar);
    };

  // Function to set calLink based on the domain
  function setCalLink() {
    let currentDomain = window.location.hostname;
    let calLink;
    switch (currentDomain) {
      case "shoptrade.co":
        calLink = "/team/shoptrade/us";
        break;
      case "shoptrade.sg":
        calLink = "/team/shoptrade/sg";
        break;
      case "shoptrade.co.in":
        calLink = "/team/shoptrade/in";
        break;
      default:
        calLink = "/team/shoptrade"; // Default calLink
    }

    // Trigger Cal.com inline widget to open
    Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: calLink,
    });
  }

  // Bind function to click event of footer link
  document.addEventListener("DOMContentLoaded", function () {
    let footerLink = document.querySelector("#footer-book-meeting-link");
    if (footerLink) {
      footerLink.addEventListener("click", setCalLink);
    }
  });

  // Initialize Cal.com with the script URL
  Cal("init", { origin: "https://app.cal.com" });
})(window, "https://app.cal.com/embed/embed.js", "init");
