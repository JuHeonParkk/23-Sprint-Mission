import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 325px;
  padding: 9px 20px 9px 16px;
  background-color: var(--secondary-100);
  border: none;
  border-radius: 12px;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-400);
  }
`;

export default function SearchInput() {
  return <Input type="text" placeholder="검색할 상품을 입력해주세요" />;
}
