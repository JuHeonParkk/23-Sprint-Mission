import { mainFeatureContents } from "./MainContent";

import FeatureImage1 from "@/assets/main/section_01.png";
import FeatureImage2 from "@/assets/main/section_02.png";
import FeatureImage3 from "@/assets/main/section_03.png";

import styled from "styled-components";

interface StyledProps {
  $alignReverse?: boolean;
}

const Container = styled.div`
  padding: 52px 16px;

  @media (min-width: 768px) {
    padding: 56px 24px;
  }

  @media (min-width: 1200px) {
    padding: 138px 0;
    margin: 0 auto;
  }
`;

const ContentInner = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 40px;
  background-color: var(--bg-gray);
  border-radius: 12px;

  @media (min-width: 768px) {
    margin-bottom: 52px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    flex-direction: ${({ $alignReverse }) =>
      $alignReverse ? "row-reverse" : "row"};
    align-items: center;
    margin: 0 auto;
    margin-bottom: 138px;
    gap: 64px;
  }
`;

const Img = styled.img`
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const FeatureText = styled.div<StyledProps>`
  flex-grow: 1;
  color: var(--secondary-700);

  align-items: ${({ $alignReverse }) =>
    $alignReverse ? "flex-end" : "flex-start"};
  text-align: ${({ $alignReverse }) => ($alignReverse ? "right" : "left")};
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-100);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  margin: 8px 0 16px 0;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 16px 0 24px 0;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    white-space: pre-line;
  }
`;
const Info = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export default function FeatureSection({}) {
  const featureImages = [FeatureImage1, FeatureImage2, FeatureImage3];

  return (
    <Container>
      {mainFeatureContents.map((feature, index) => {
        const isReverse = index % 2 === 1;
        return (
          <ContentInner key={feature.label} $alignReverse={isReverse}>
            <Img src={featureImages[index]} alt="Feature" />
            <FeatureText $alignReverse={isReverse}>
              <SubTitle>{feature.label}</SubTitle>
              <Title>{feature.title.join("\n")}</Title>
              <Info>{feature.description.join("\n")}</Info>
            </FeatureText>
          </ContentInner>
        );
      })}
    </Container>
  );
}
