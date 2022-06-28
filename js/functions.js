const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(formData).toString(),
  })
    .catch((error) => alert(error))
    .then(() => ntlFormSuccess());
});

function ntlFormSuccess() {
  const text = document.getElementById("text");
  text.innerHTML = "Thank you for your submission";
  form.reset();
}

window.onscroll = () => {
  const toTheTop = document.getElementById("ToTheTop");
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    toTheTop.style.display = "inline";
    navbar.style.justifyContent = "space-between";
  } else {
    toTheTop.style.display = "none";
    navbar.style.justifyContent = "flex-end";
  }
};
