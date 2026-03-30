import React from "react";
import styled from "styled-components";
import useDevice from "../hook/useDevice";
import getPagination from "../utils/getPagination";
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
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 24px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const PageButton = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 40px;
`;
const ArrowButton = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  cursor: pointer;

  &:last-child {
    transform: scale(-1, 1);
  }

  &.disabled {
    & img {
      opacity: 0.5;
    }
    pointer-events: none;
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
  cursor: pointer;

  &.active {
    background-color: var(--primary-100);
    color: var(--bg-white);
    border: none;
  }
`;

const PAGE_GROUP_SIZE = 5;

export default function AllProductSection({
  order,
  setOrder,
  products,
  totalCount,
  currentPage,
  setCurrentPage,
  pageSize,
}) {
  const device = useDevice();
  const { startPage, endPage, noPrev, noNext } = getPagination({
    currentPage,
    totalCount,
    pageSize,
    pageGroupSize: PAGE_GROUP_SIZE,
  });

  return (
    <Container>
      <ProductHeader device={device} order={order} setOrder={setOrder} />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <PageButton>
        <ArrowButton
          className={noPrev ? "disabled" : ""}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <img src={arrowRight} alt="prev_button" />
        </ArrowButton>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index,
        ).map((page) => (
          <NumberButton
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </NumberButton>
        ))}
        <ArrowButton
          className={noNext ? "disabled" : ""}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <img src={arrowRight} alt="next_button" />
        </ArrowButton>
      </PageButton>
    </Container>
  );
}
