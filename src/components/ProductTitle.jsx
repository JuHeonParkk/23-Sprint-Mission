import React from "react";
import styled from "styled-components";

const Container = styled.h2`
  padding: 0 16px;
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  padding: 0 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

export default function ProductTitle({ children }) {
  return <Container>{children}</Container>;
}
