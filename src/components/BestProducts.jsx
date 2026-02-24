import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

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

const ProductContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export default function BestProducts() {
  return (
    <Container>
      <ProductTitle>베스트 상품</ProductTitle>
      <ProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductContainer>
    </Container>
  );
}
