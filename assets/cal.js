document.addEventListener('DOMContentLoaded', () => {

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

    const linkEls = document.querySelectorAll('[data-cal-link]');
    if(linkEls.length) {
      linkEls.forEach(linkEl => linkEl.dataset.calLink = calLink);
    }
})

