document.addEventListener("DOMContentLoaded", function () {
  // Function to get the domain from the URL
  function getDomain(url) {
    let domain = url.split("//")[1].split("/")[0];
    return domain.split(".").slice(-2).join("."); // Get last two parts of domain
  }

  // Function to set calLink based on the domain
  function setCalLink() {
    // Get the current domain
    let currentDomain = getDomain(window.location.href);

    // Set calLink based on the domain
    let calLink;
    switch (currentDomain) {
      case "shoptrade.co":
        calLink = "/team/shoptrade";
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

    // Find the button or element with data-cal-link attribute and set its value
    let calButton = document.querySelector("[data-cal-link]");
    if (calButton) {
      calButton.setAttribute("data-cal-link", calLink);
    }

    // Optionally, trigger a click event on the button or element with data-cal-link attribute
    if (calButton) {
      calButton.click();
    }
  }

  // Add event listener to "Book a Meeting" link in the footer
  let bookMeetingLink = document.querySelector("#footer-book-meeting-link");
  if (bookMeetingLink) {
    bookMeetingLink.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Call setCalLink function to dynamically set data-cal-link attribute
      setCalLink();
    });
  }
});
