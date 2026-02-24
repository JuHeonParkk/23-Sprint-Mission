import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SearchInput from "./SearchInput";
import SelectOption from "./SelectOption";
import arrowDown from "../assets/mobile_arrow_down.svg";

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-900);
  flex-grow: 1;
`;

const SubmitButton = styled(Button)``;

const CustomSelect = styled.div``;

const CustomSelectButton = styled.button`
  width: 42px;
  height: 42px;
  padding: 9px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;

export default function MobileProductHeader() {
  return (
    <Container>
      <Section>
        <ProductTitle>전체 상품</ProductTitle>
        <SubmitButton>상품 등록하기</SubmitButton>
      </Section>
      <Section>
        <SearchInput />
        <CustomSelect>
          <CustomSelectButton>
            <img src={arrowDown} alt="select_arrow" />
          </CustomSelectButton>
          <SelectOption>
            <li value="createAt">최신순</li>
            <li value="favorite">좋아요순</li>
          </SelectOption>
        </CustomSelect>
      </Section>
    </Container>
  );
}
