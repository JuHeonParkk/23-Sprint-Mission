import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoHeader from "../components/LogoHeader";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";
import passwordHiddenIcon from "../assets/icon/password_hidden_icon.svg";
import passwordVisibleIcon from "../assets/icon/password_visible_icon.svg";
import useValidation from "../hook/useValidation";

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  margin: 60px 0 40px 0;
  text-align: center;
  & img {
    width: 198px;
    @media (min-width: 768px) {
      width: 396px;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const InputItem = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: var(--secondary-800);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const PasswordContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & button {
    padding: 0;
    position: absolute;
    right: 24px;
  }
`;

const SubmitButton = styled(Button)`
  height: 56px;
  font-size: 20px;
  border-radius: 9999px;
`;

const LoginLink = styled.div`
  & span {
    padding-right: 4px;
    font-size: 14px;
    color: var(--secondary-800);
  }
  & a {
    font-size: 14px;
    color: var(--primary-100);
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  padding-left: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--error);
  display: ${({ show }) => (show ? "block" : "none")};
`;

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const {
    emailRegex,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
    validateNickname,
  } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(validateEmail(email));
    setNicknameError(validateNickname(nickname));
    setPasswordError(validatePassword(password));
    setPasswordConfirmError(validatePasswordConfirm(password, passwordConfirm));
  };

  const isFormValid =
    email.trim() !== "" &&
    emailRegex.test(email) &&
    password.trim() !== "" &&
    password.length >= 8 &&
    nickname.trim() !== "" &&
    passwordConfirm.trim() !== "" &&
    password === passwordConfirm;

  return (
    <Container>
      <LogoHeader />
      <Form onSubmit={handleSubmit}>
        <InputItem>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            required
            autoFocus
            show={!!emailError}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={() => setEmailError(validateEmail(email))}
          />
          <ErrorMessage show={!!emailError}>{emailError}</ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            type="text"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            required
            show={!!nicknameError}
            onChange={(e) => {
              setNickname(e.target.value);
              setNicknameError("");
            }}
            onBlur={() => setNicknameError(validateNickname(nickname))}
          />
          <ErrorMessage show={!!nicknameError}>{nicknameError}</ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="password">비밀번호</Label>
          <PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="비밀번호를 입력해주세요"
              required
              show={!!passwordError}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={() => setPasswordError(validatePassword(password))}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? passwordVisibleIcon : passwordHiddenIcon}
                alt="passwordToggleIcon"
              />
            </button>
          </PasswordContainer>
          <ErrorMessage show={!!passwordError}>{passwordError}</ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
          <PasswordContainer>
            <Input
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              required
              show={!!passwordConfirmError}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
                setPasswordConfirmError("");
              }}
              onBlur={() =>
                setPasswordConfirmError(
                  validatePasswordConfirm(password, passwordConfirm),
                )
              }
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            >
              <img
                src={
                  showPasswordConfirm ? passwordVisibleIcon : passwordHiddenIcon
                }
                alt="passwordToggleIcon"
              />
            </button>
          </PasswordContainer>
          <ErrorMessage show={!!passwordConfirmError}>
            {passwordConfirmError}
          </ErrorMessage>
        </InputItem>
        <SubmitButton
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          회원가입
        </SubmitButton>
      </Form>
      <SocialLogin />
      <LoginLink>
        <span>이미 회원이신가요?</span>
        <Link to="/login">로그인</Link>
      </LoginLink>
    </Container>
  );
}
