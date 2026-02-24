import React from "react";
import styled from "styled-components";
import like from "../assets/like_default.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;

const ProductImg = styled.img`
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-800);
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-800);
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--secondary-600);
`;

export default function ProductCard({ product }) {
  return (
    <Container>
      <ProductImg src={product.image} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      <LikeContainer>
        <LikeButton>
          <img src={like} />
        </LikeButton>
        <LikeCount>{product.likes.toLocaleString()}</LikeCount>
      </LikeContainer>
    </Container>
  );
}
