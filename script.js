const button = document.getElementById("clickMe");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("mouseover", function () {
  if (!validateEmail(email.value) || password.value === "") {
    moveButton();
  }
});

email.addEventListener("input", toggleButtonState);
password.addEventListener("input", toggleButtonState);

function moveButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const newX = Math.random() * (containerRect.width - button.offsetWidth);
  const newY = Math.random() * (containerRect.height - button.offsetHeight);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function toggleButtonState() {
  if (validateEmail(email.value) && password.value !== "") {
    button.disabled = false;
    button.style.position = "static";
  } else {
    button.disabled = true;
    button.style.position = "absolute";
  }
}
