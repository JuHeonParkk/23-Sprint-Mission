import { ChangeEvent, FormEvent, FocusEvent, useState } from "react";
import { Link } from "react-router-dom";

import { AuthBaseField } from "@/types/auth";
import {
  emailRegex,
  validateEmail,
  validatePassword,
} from "@/utils/validations";

import Input from "@/components/Input";
import Button from "@/components/Button";
import LogoHeader from "./components/LogoHeader";
import SocialLogin from "./components/SocialLogin";

import passwordHiddenIcon from "@/assets/icon/password_hidden_icon.svg";
import passwordVisibleIcon from "@/assets/icon/password_visible_icon.svg";

import styled from "styled-components";

interface StyledProps {
  $show?: boolean;
}

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

const ErrorMessage = styled.p<StyledProps>`
  padding-left: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--error);
  display: ${({ $show }) => ($show ? "block" : "none")};
`;

export default function LoginPage() {
  const [values, setValues] = useState<AuthBaseField>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<AuthBaseField>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email")
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    if (name === "password")
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  const isFormValid =
    emailRegex.test(values.email) && values.password.length >= 8;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(values.email);
    const passwordError = validatePassword(values.password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }
  };

  return (
    <Container>
      <LogoHeader />
      <Form onSubmit={handleSubmit}>
        <InputItem>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="이메일을 입력해주세요"
            required
            autoFocus
            $show={!!errors.email}
          />
          <ErrorMessage $show={!!errors.email}>{errors.email}</ErrorMessage>
        </InputItem>
        <InputItem>
          <Label htmlFor="password">비밀번호</Label>
          <PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="비밀번호를 입력해주세요"
              required
              $show={!!errors.password}
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
          <ErrorMessage $show={!!errors.password}>
            {errors.password}
          </ErrorMessage>
        </InputItem>
        <SubmitButton type="submit" disabled={!isFormValid}>
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
