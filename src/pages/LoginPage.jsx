import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import passwordHiddenIcon from "../assets/icon/password_hidden_icon.svg";
import passwordVisibleIcon from "../assets/icon/password_visible_icon.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";
import validations from "../utils/validations";
import LogoHeader from "../components/LogoHeader";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { emailRegex, validateEmail, validatePassword } = validations();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };

  const isFormValid =
    email.trim() !== "" &&
    emailRegex.test(email) &&
    password.trim() !== "" &&
    password.length >= 8;

  return (
    <Container>
      <LogoHeader />
      <Form onSubmit={handleSubmit}>
        <InputItem>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={() => setEmailError(validateEmail(email))}
            placeholder="이메일을 입력해주세요"
            required
            autoFocus
            show={!!emailError}
          />
          <ErrorMessage show={!!emailError}>{emailError}</ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="password">비밀번호</Label>
          <PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={() => setPasswordError(validatePassword(password))}
              placeholder="비밀번호를 입력해주세요"
              required
              show={!!passwordError}
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
