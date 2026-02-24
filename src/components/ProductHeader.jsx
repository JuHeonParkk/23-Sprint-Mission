import React from "react";
import styled from "styled-components";
import arrowDown from "../assets/arrow_down.svg";
import Button from "./Button";
import SearchInput from "./SearchInput";
import SelectOption from "./SelectOption";

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  flex-grow: 1;
`;

const SubmitButton = styled(Button)``;

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

export default function ProductHeader() {
  return (
    <Container>
      <ProductTitle>전체 상품</ProductTitle>
      <SearchInput />
      <SubmitButton>상품 등록하기</SubmitButton>
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
    </Container>
  );
}
