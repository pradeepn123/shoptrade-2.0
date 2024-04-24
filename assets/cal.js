(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
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
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string"
          ? (cal.ns[namespace] = api) && p(api, ar)
          : p(cal, ar);
        return;
      }
      p(cal, ar);
    };

  // Function to get the domain from the URL
  function getDomain(url) {
    let domain = url.split("//")[1].split("/")[0];
    return domain.split(".").slice(-2).join("."); // Get last two parts of domain
  }

  // Get the current domain
  let currentDomain = getDomain(window.location.href);

  // Set calLink based on the domain
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

  // Initialize Cal.com with dynamic calLink
  Cal("init", { origin: "https://app.cal.com" });

  // Only call Cal("inline") if #my-cal-inline element exists
  if (document.getElementById("my-cal-inline")) {
    Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: calLink,
    });
  }
})(window, "https://app.cal.com/embed/embed.js", "init");
