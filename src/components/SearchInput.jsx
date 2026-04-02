import React from "react";
import styled from "styled-components";
import Input from "./Input";
import searchIcon from "../assets/icon/searchIcon.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputStyled = styled(Input)`
  width: 300px;
  height: 42px;
  padding: 9px 16px 9px 44px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export default function SearchInput() {
  return (
    <Container>
      <Icon src={searchIcon} alt="search_icon" />
      <SearchInputStyled type="text" placeholder="검색할 상품을 입력해주세요" />
    </Container>
  );
}
