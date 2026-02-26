import React from "react";
import styled from "styled-components";
import ProductGrid from "./ProductGrid";
import useDevice from "../hook/useDevice";
import ProductHeader from "./ProductHeader";

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

export default function AllProductSection() {
  let count;
  const device = useDevice();

  if (device === "mobile") count = 2;
  else if (device === "tablet") count = 3;
  else count = 5;

  return (
    <Container>
      <ProductHeader device={device} />
      <ProductGrid count={count} />
    </Container>
  );
}
