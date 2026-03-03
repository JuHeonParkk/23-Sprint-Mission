import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-100);
  color: #f3f4f5;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-200);
  }

  &:disabled {
    background-color: var(--secondary-400);
    color: var(--secondary-200);
    cursor: not-allowed;
  }
`;

export default Button;
