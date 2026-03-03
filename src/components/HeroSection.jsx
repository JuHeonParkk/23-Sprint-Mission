import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--bg-blue);
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;

  @media (min-width: 1200px) {
    max-width: 1920px;
    padding-top: 160px;
    flex-direction: row;
    justify-content: space-between;
    gap: 7px;
  }
`;

const HeroText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  padding-bottom: 120px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 210px;
  }

  @media (min-width: 1200px) {
    padding: 0;
    justify-content: center;
    align-items: flex-start;
    gap: 18px;
  }
`;

const Title = styled.h1`
  width: 250px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-align: center;
  white-space: pre-line;

  @media (min-width: 768px) {
    width: 100%;
    font-size: 40px;
  }

  @media (min-width: 1200px) {
    width: 347px;
    text-align: left;
  }
`;

const LinkButton = styled(Button)`
  padding: 12px 70px;
  border-radius: 9999px;

  @media (min-width: 768px) {
    padding: 16px 124px;
  }
`;

export default function HeroSection({ heroTitle, imgUrl, hasButton }) {
  return (
    <Container>
      <HeroInner>
        <HeroText>
          <Title>{heroTitle}</Title>
          {hasButton && (
            <LinkButton as={Link} to="/items">
              구경하러 가기
            </LinkButton>
          )}
        </HeroText>
        <img src={imgUrl} alt="hero_image" />
      </HeroInner>
    </Container>
  );
}
