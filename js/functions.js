your_email = "warrevandenhoucke@hotmail.com";
emailSub = "Contact form";
emailBody = document.getElementById("message").innerText;
var email_btn = document.getElementById("contact-submit");
email_btn.addEventListener("click", function (e) {
  e.preventDefault();
  location.href =
    "mailto:" + your_email + "?subject=" + emailSub + "?body=" + emailBody;
});
