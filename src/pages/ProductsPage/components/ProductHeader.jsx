import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button";
import SearchInput from "@/components/SearchInput";
import SelectOption from "@/components/SelectOption";

import arrowDown from "@/assets/arrow_down.svg";
import arrowDownMobile from "@/assets/mobile_arrow_down.svg";

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
  min-width: 130px;
  position: relative;
  align-items: center;
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
  width: 100px;
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

export default function ProductHeader({ device, order, setOrder }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (value) => {
    setOrder(value);
    setIsOptionOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOptionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <LeftContainer>
        <ProductTitle>전체 상품</ProductTitle>
        <SearchInput />
      </LeftContainer>
      <RightContainer>
        <SubmitButton as={Link} to="/additem">
          상품 등록하기
        </SubmitButton>
        <CustomSelect ref={selectRef}>
          <CustomSelectButton
            onClick={() => {
              setIsOptionOpen(!isOptionOpen);
            }}
          >
            {device !== "mobile" ? (
              <>
                <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
                <img src={arrowDown} alt="select_arrow" />
              </>
            ) : (
              <img src={arrowDownMobile} alt="select_arrow_mobile" />
            )}
          </CustomSelectButton>

          {isOptionOpen && (
            <SelectOption>
              <li
                value="recent"
                onClick={() => {
                  handleSelect("recent");
                }}
              >
                최신순
              </li>
              <li value="favorite" onClick={() => handleSelect("favorite")}>
                좋아요순
              </li>
            </SelectOption>
          )}
        </CustomSelect>
      </RightContainer>
    </Container>
  );
}
