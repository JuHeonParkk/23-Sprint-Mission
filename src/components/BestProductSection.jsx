import React from "react";
import styled from "styled-components";
import useDevice from "../hook/useDevice";
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ count, $isBest }) =>
    $isBest ? `repeat(${count}, 1fr)` : `repeat(${count}, 1fr)`};
  gap: 40px 24px;
`;

export default function BestProductSection({ products }) {
  let count;
  const device = useDevice();

  if (device === "mobile") count = 1;
  else if (device === "tablet") count = 2;
  else count = 4;

  const bestProducts = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, count);

  return (
    <Container>
      <ProductTitle>베스트 상품</ProductTitle>
      <ProductGrid count={count} $isBest={true}>
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
}
