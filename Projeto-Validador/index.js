function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email ou senha Invalidos");
    err.input = "email";
    throw err;
  }
}

function validateName(name) {
  if (name === "") {
    const err = new Error("Favor digitar o nome completo");
    err.input = "name";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[A-Z]/) ||
    !password.match(/[a-z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    const err = new Error("Email ou senha Invalidos");
    err.input = password;
    throw err;
  }
}

function wrong(errorMessage) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = errorMessage;
}

const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  try {
    validateEmail(emailInput.value);
    validatePassword(passwordInput.value);
    validateName(nameInput.value);
    wrong("");
  } catch (err) {
    wrong(err.message);
  }
});
