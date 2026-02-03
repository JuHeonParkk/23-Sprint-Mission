const formElement = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-login_btn");

emailInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!value) {
    return showErrorMessage(emailInput, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(value)) {
    return showErrorMessage(emailInput, "잘못된 이메일 형식입니다.");
  } else {
    return clearErrorMessage(emailInput);
  }
});

passwordInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  if (!value) {
    return showErrorMessage(passwordInput, "비밀번호를 입력해주세요.");
  } else if (value.length < 8) {
    return showErrorMessage(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    return clearErrorMessage(passwordInput);
  }
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFormValidity();

  if (!submitBtn.disabled) window.location.href = "../items.html";
});

function showErrorMessage(inputElement, message) {
  const errorMessage = document.querySelector(`.${inputElement.id}--error_msg`);
  errorMessage.textContent = message;
  errorMessage.classList.add("visible");

  inputElement.classList.add("error_border");
  checkFormValidity(inputElement);
}

function clearErrorMessage(inputElement) {
  const errorMessage = document.querySelector(`.${inputElement.id}--error_msg`);
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");

  inputElement.classList.remove("error_border");

  checkFormValidity(inputElement);
}

function checkFormValidity() {
  const emailError = document.querySelector(".email--error_msg");
  const passwordError = document.querySelector(".password--error_msg");
  const isEmailEmpty = emailInput.value.trim() === "";
  const isPasswordEmpty = passwordInput.value.trim() === "";

  const hasEmailError = emailError.classList.contains("visible");
  const hasPasswordError = passwordError.classList.contains("visible");

  submitBtn.disabled =
    isEmailEmpty || isPasswordEmpty || hasEmailError || hasPasswordError;
}
