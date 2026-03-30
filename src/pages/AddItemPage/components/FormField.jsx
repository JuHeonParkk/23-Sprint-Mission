import styled from "styled-components";
import Input from "@/components/Input";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;

  & h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--secondary-800);
  }
`;

export default function FormField({ title, children }) {
  return (
    <InputContainer>
      <h2>{title}</h2>
      {children}
    </InputContainer>
  );
}
