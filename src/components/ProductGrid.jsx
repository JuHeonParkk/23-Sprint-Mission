import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ count, isBest }) =>
    isBest ? `repeat(${count}, 1fr)` : `repeat(${count}, 1fr)`};
  gap: 40px 24px;
`;

export default function ProductGrid({ count, isBest, products }) {
  // console.log("ProductGrid", products);
  // const productList = isBest ? products.slice(0, count) : products;

  console.log("ProductGrid", products);
  return (
    <Container count={count} isBest={isBest}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
