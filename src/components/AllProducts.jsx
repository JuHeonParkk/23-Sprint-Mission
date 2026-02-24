import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import Button from "./Button";
import SelectOption from "./SelectOption";
import arrowDown from "../assets/arrow_down.svg";

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

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  margin-top: 40px;
  margin-bottom: 24px;
  flex-grow: 1;
`;

const ProductContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const CustomSelect = styled.div`
  width: 130px;
  position: relative;
  border-radius: 12px;
  padding: 12px 20px;
  border: 1px solid #e5e7eb;
  color: var(--secondary-800);
`;

const CustomSelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export default function AllProducts() {
  return (
    <Container>
      <ProductHeader>
        <ProductTitle>전체 상품</ProductTitle>
        <SearchInput />
        <Button>상품 등록하기</Button>
        <CustomSelect>
          <CustomSelectButton>
            <span>최신순</span>
            <img src={arrowDown} alt="select_arrow" />
          </CustomSelectButton>

          <SelectOption>
            <li value="createAt">최신순</li>
            <li value="favorite">좋아요순</li>
          </SelectOption>
        </CustomSelect>
      </ProductHeader>
      <ProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductContainer>
    </Container>
  );
}
