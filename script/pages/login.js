import { formElement, submitBtn, emailInput, passwordInput } from "./dom.js";

export const emailError = emailInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!value) {
    showErrorMessage(emailInput, "이메일을 입력해주세요.");
  } else if (!emailRegex.test(value)) {
    showErrorMessage(emailInput, "잘못된 이메일 형식입니다.");
  } else {
    clearErrorMessage(emailInput);
  }
});

emailInput.addEventListener("focus", () => {
  clearErrorMessage(emailInput);
});

passwordInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  if (!value) {
    showErrorMessage(passwordInput, "비밀번호를 입력해주세요.");
  } else if (value.length < 8) {
    showErrorMessage(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    clearErrorMessage(passwordInput);
  }
});

passwordInput.addEventListener("focus", () => {
  clearErrorMessage(passwordInput);
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFormValidity();

  if (!submitBtn.disabled) window.location.href = "../items.html";
});
