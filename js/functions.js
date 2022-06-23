const submitBtn = document.getElementById("submitBtn");
/*when clicking on submitbtn a text should appear under the button*/
submitBtn.addEventListener("click", function () {
  const text = document.getElementById("text");
  text.innerHTML = "Thank you for your submission";
});

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => ntlFormSuccess())
    .catch((error) => alert(error));
});

function ntlFormSuccess() {
  console.log("form submitted");
  form.reset();
  document.querySelector(".successNoti").style.display = "inline";
}
