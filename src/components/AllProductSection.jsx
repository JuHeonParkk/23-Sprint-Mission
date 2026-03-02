import React from "react";
import styled from "styled-components";
import useDevice from "../hook/useDevice";
import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import arrowRight from "../assets/arrow_right.svg";

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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
  gap: 40px 24px;
  margin-bottom: 40px;
`;

const PageButton = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const ArrowButton = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;

  &:last-child {
    transform: scale(-1, 1);
  }

  &.disabled {
    & img {
      opacity: 0.5;
    }
  }
`;

const NumberButton = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
`;

export default function AllProductSection({
  order,
  setOrder,
  products,
  currentPage,
  totalCount,
}) {
  const totalPages = Math.ceil(totalCount / 10);
  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages;

  let count;
  const device = useDevice();

  if (device === "mobile") count = 2;
  else if (device === "tablet") count = 3;
  else count = 5;

  return (
    <Container>
      <ProductHeader device={device} order={order} setOrder={setOrder} />
      <ProductGrid count={count}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <PageButton>
        <ArrowButton className={noPrev ? "disabled" : ""}>
          <img src={arrowRight} alt="prev_button" />
        </ArrowButton>
        {[...Array(totalPages)].map((_, index) => (
          <NumberButton key={index + 1}>{index + 1}</NumberButton>
        ))}
        <ArrowButton className={noNext ? "disabled" : ""}>
          <img src={arrowRight} alt="next_button" />
        </ArrowButton>
      </PageButton>
    </Container>
  );
}
