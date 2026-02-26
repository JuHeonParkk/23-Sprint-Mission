import React, { useState } from "react";
import styled from "styled-components";
import arrowDown from "../assets/arrow_down.svg";
import arrowDownMobile from "../assets/mobile_arrow_down.svg";
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

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
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

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    border: none;
  }
`;

const CustomSelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    padding: 9px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
  }
`;

export default function ProductHeader({ device }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <Container>
      <LeftContainer>
        <ProductTitle>전체 상품</ProductTitle>
        <SearchInput />
      </LeftContainer>
      <RightContainer>
        <SubmitButton>상품 등록하기</SubmitButton>
        <CustomSelect>
          <CustomSelectButton onClick={() => setIsOptionOpen(!isOptionOpen)}>
            {device !== "mobile" ? (
              <>
                <span>최신순</span>
                <img src={arrowDown} alt="select_arrow" />
              </>
            ) : (
              <img src={arrowDownMobile} alt="select_arrow" />
            )}
          </CustomSelectButton>

          <SelectOption isOpen={isOptionOpen} />
        </CustomSelect>
      </RightContainer>
    </Container>
  );
}
