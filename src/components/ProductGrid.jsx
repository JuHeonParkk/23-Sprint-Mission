import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import products from "../mock.json";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ count, isBest }) =>
    isBest ? `repeat(${count}, 1fr)` : `repeat(${count}, 1fr)`};
  gap: 40px 24px;
`;

export default function ProductGrid({ count, isBest }) {
  const productList = isBest
    ? products.products.slice(0, count)
    : products.products;

  return (
    <Container count={count} isBest={isBest}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
