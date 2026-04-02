import React from "react";
import styled from "styled-components";
import useDevice from "@/hooks/useDevice";
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
  grid-template-columns: repeat(1, 1fr);
  gap: 40px 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DEVICE_PRODUCT_COUNT = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};

export default function BestProductSection({ products }) {
  const device = useDevice();
  const count = DEVICE_PRODUCT_COUNT[device] ?? 4;

  return (
    <Container>
      <ProductTitle>베스트 상품</ProductTitle>
      <ProductGrid count={count} $isBest={true}>
        {products.slice(0, count).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
}
