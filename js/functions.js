const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(formData).toString(),
  }).then(() => ntlFormSuccess());
});

function ntlFormSuccess() {
  const text = document.getElementById("text");
  text.innerHTML = "Thank you for your submission";
  form.reset();
}
