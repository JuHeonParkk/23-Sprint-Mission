export default function validations() {
  const emailRegex = /^\S+@\S+\.\S+$/;

  const validateEmail = (email: string) => {
    if (email.trim() === "") {
      return "이메일을 입력해주세요.";
    } else if (!emailRegex.test(email)) {
      return "잘못된 이메일 형식입니다.";
    } else {
      return "";
    }
  };

  const validatePassword = (password: string) => {
    if (password.trim() === "") {
      return "비밀번호를 입력해주세요.";
    } else if (password.length < 8) {
      return "비밀번호를 8자 이상 입력해주세요.";
    } else {
      return "";
    }
  };

  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string,
  ) => {
    if (passwordConfirm.trim() === "") {
      return "비밀번호를 입력해주세요.";
    } else if (password !== passwordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    } else {
      return "";
    }
  };

  const validateNickname = (nickname: string) => {
    if (nickname.trim() === "") {
      return "닉네임을 입력해주세요.";
    } else {
      return "";
    }
  };

  return {
    emailRegex,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
    validateNickname,
  };
}
