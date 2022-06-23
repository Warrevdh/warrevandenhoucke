const submitBtn = document.getElementById("submitBtn");
/*when clicking on submitbtn a text should appear under the button*/
submitBtn.onclick(() => {
  const text = document.getElementById("text");
  text.innerHTML = "Thank you for your submission";
});
