const emailInput = document.getElementById("email");
const formButton = document.querySelector("[data-js-formButton]");

function checkEmailInput() {
  emailInput.addEventListener("change", () => {
    if (
      !emailInput.value.includes("@", 0) ||
      !emailInput.value.includes(".", 0) ||
      emailInput.value.length < 5
    ) {
      emailInput.classList.add("is-invalid");
      formButton.disabled = true;
    } else {
      emailInput.classList.remove("is-invalid");
      formButton.disabled = false;
    }
  });
}

checkEmailInput();
