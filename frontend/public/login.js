const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

// Event Listener for Form Submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  validateLoginInputs();
});

// Set Error Message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// Set Success State
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// Validate Email
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Validate Login Inputs
const validateLoginInputs = () => {
  const emailValue = loginEmail.value.trim();
  const passwordValue = loginPassword.value.trim();

  if (emailValue === "") {
    setError(loginEmail, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(loginEmail, "Provide a valid email address");
  } else {
    setSuccess(loginEmail);
  }

  if (passwordValue === "") {
    setError(loginPassword, "Password is required");
  } else {
    setSuccess(loginPassword);
  }
};
