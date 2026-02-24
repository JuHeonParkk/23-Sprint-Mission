import React from "react";
import styled from "styled-components";
import ProductGrid from "./ProductGrid";
import useDevice from "../hook/useDevice";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
    margin-top: 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export default function BestProductSection() {
  let count;
  const device = useDevice();

  if (device === "mobile") count = 1;
  else if (device === "tablet") count = 2;
  else count = 4;

  return (
    <Container>
      <ProductTitle>베스트 상품</ProductTitle>
      <ProductGrid count={count} />
    </Container>
  );
}
