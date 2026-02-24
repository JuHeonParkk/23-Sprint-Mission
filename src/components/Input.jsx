import styled from "styled-components";

const Input = styled.input`
  background-color: var(--secondary-100);
  border: none;
  border-radius: 12px;

  &:focus,
  &:active {
    outline: 1px solid var(--primary-100);
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-400);
  }
`;

export default Input;
