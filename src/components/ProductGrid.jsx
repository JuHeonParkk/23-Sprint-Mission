import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import products from "../mock.json";

const Container = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, 1fr);
  gap: 24px;
`;

export default function ProductGrid({ count }) {
  return (
    <Container count={count}>
      {products.products.slice(0, count).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
