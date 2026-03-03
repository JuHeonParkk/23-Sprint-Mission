import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/common/logo.svg";
import passwordHiddenIcon from "../assets/icon/password_hidden_icon.svg";
import passwordVisibleIcon from "../assets/icon/password_visible_icon.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";

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

const SignupLink = styled.div`
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

export default function LoginPage() {
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleEmailError = () => {
    if (emailValue.trim() === "") {
      setErrorEmailMessage("이메일을 입력해주세요.");
    } else if (!emailRegex.test(emailValue)) {
      setErrorEmailMessage("잘못된 이메일 형식입니다.");
    } else {
      setErrorEmailMessage("");
    }
  };

  const handlePasswordError = () => {
    if (passwordValue.trim() === "") {
      setErrorPasswordMessage("비밀번호를 입력해주세요.");
    } else if (passwordValue.length < 8) {
      setErrorPasswordMessage("비밀번호를 8자 이상 입력해주세요.");
    } else {
      setErrorPasswordMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailError();
    handlePasswordError();
  };

  const isFormValid =
    emailValue.trim() !== "" &&
    emailRegex.test(emailValue) &&
    passwordValue.trim() !== "" &&
    passwordValue.length >= 8;

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputItem>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
              setErrorEmailMessage("");
            }}
            onBlur={handleEmailError}
            placeholder="이메일을 입력해주세요"
            required
            autoFocus
            show={!!errorEmailMessage}
          />
          <ErrorMessage show={!!errorEmailMessage}>
            {errorEmailMessage}
          </ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="password">비밀번호</Label>
          <PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setErrorPasswordMessage("");
              }}
              onBlur={handlePasswordError}
              placeholder="비밀번호를 입력해주세요"
              required
              show={!!errorPasswordMessage}
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
          <ErrorMessage show={!!errorPasswordMessage}>
            {errorPasswordMessage}
          </ErrorMessage>
        </InputItem>
        <SubmitButton
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          로그인
        </SubmitButton>
      </Form>
      <SocialLogin />
      <SignupLink>
        <span>판다마켓이 처음이신가요?</span>
        <Link to="/signup">회원가입</Link>
      </SignupLink>
    </Container>
  );
}
