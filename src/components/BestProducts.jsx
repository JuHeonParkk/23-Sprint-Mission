import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin: 0 auto;
  padding: 0 16px;
  margin-top: 17px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 24px;
    margin-top: 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 200px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function BestProducts() {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}
