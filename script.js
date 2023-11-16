const submitBtn = document.getElementById("submitButton");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const eMail = document.getElementById("email");
const passWord = document.getElementById("password");
const errorFirst = document.querySelector(".error-first");
const errorLast = document.querySelector(".error-last");
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");

function validateField(field, errorElement, errorMessage) {
 const trimmedValue = field.value.trim();

 if (trimmedValue === "") {
  field.style.outline = "1px red solid";
  field.classList.add("error");
  errorElement.innerHTML = errorMessage;
  return false;
 } else {
  field.classList.remove("error");
  field.style.outline = "";
  errorElement.innerHTML = "";
  return true;
 }
}
function validateEmail(email, errorElement) {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailRegex.test(email.value.trim())) {
  email.style.outline = "1px red solid";
  email.classList.add("error");
  errorElement.innerHTML = "Please enter a valid email address.";
  return false;
 } else {
  email.classList.remove("error");
  email.style.outline = "";
  errorElement.innerHTML = "";
  return true;
 }
}
function validatePassword(password, errorElement) {
 if (password.value.length < 8) {
  password.style.outline = "1px red solid";
  password.classList.add("error-second");
  errorElement.innerHTML = "Password must be at least 8 characters.";
  return false;
 } else {
  password.classList.remove("error-second");
  password.style.outline = "";
  errorElement.innerHTML = "";
  return true;
 }
}
submitBtn.addEventListener("click", (event) => {
 const isFirstNameValid = validateField(
  firstName,
  errorFirst,
  "Please enter your First name."
 );
 const isLastNameValid = validateField(
  lastName,
  errorLast,
  "Please enter your Last name."
 );
 const isEmailValid = validateEmail(eMail, errorEmail);
 const isPasswordValid = validatePassword(passWord, errorPassword);

 if (
  !(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid)
 ) {
  event.preventDefault();
 }
});
