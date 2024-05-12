const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  displaySuccessMessage();

  form.reset();
});

function displaySuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Votre réclamation a été envoyée";
  successMessage.style.color = "white";
  successMessage.style.fontWeight = "bold";
  successMessage.style.textAlign = "center";
  successMessage.style.marginTop = "20px";
  successMessage.style.fontSize = "60px";
  form.appendChild(successMessage);
}
