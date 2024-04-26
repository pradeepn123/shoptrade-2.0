document.addEventListener('DOMContentLoaded', () => {  
    // Get the current domain
    let currentDomain = window.location.hostname;
  
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

