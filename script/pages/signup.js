const nicknameInput = document.querySelector("#nickname");
const passwordConfirmInput = document.querySelector("#password_confirm");

nicknameInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  if (!value) {
    return showErrorMessage(nicknameInput, "닉네임을 입력해주세요.");
  } else {
    return clearErrorMessage(nicknameInput);
  }
});

nicknameInput.addEventListener("focus", () => {
  clearErrorMessage(nicknameInput);
});
