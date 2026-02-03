const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

emailInput.addEventListener("blur", (e) => {
  const value = e.target.value;
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
  const value = e.target.value;

  if (!value) {
    return showErrorMessage(passwordInput, "비밀번호를 입력해주세요.");
  } else if (value.length < 8) {
    return showErrorMessage(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    return clearErrorMessage(passwordInput);
  }
});

function showErrorMessage(inputElement, message) {
  errorMessage.classList.add("visible");
  const errorMessage = document.querySelector(`.${inputElement.id}--error_msg`);
  errorMessage.textContent = message;

  inputElement.classList.add("error_input");
}

function clearErrorMessage(inputElement) {
  errorMessage.classList.remove("visible");
  const errorMessage = document.querySelector(`.${inputElement.id}--error_msg`);
  errorMessage.textContent = "";

  inputElement.classList.remove("error_input");
}
