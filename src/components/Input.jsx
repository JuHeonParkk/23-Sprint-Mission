import { css } from "styled-components";

const Input = css`
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  background-color: var(--secondary-100);
  border: none;
  border-radius: 12px;
  font-size: 16px;
  color: var(--secondary-800);
  ${({ show }) => (show ? "outline: 1px solid var(--error);" : "")}
  font-family: inherit;

  &:focus,
  &:active {
    outline: 1px solid var(--primary-100);
  }

  &::placeholder {
    font-size: 16px;
    line-height: 26px;
    color: var(--secondary-400);
  }
`;

export default Input;
