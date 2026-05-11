import styled from "styled-components";

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

const ContentInner = styled.div`
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

const FeatureText = styled.div`
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

export default function FeatureSection({
  imgUrl,
  subTitle,
  title,
  info,
  alignReverse,
}) {
  return (
    <Container>
      <ContentInner $alignReverse={alignReverse}>
        <Img src={imgUrl} alt="Feature" />
        <FeatureText $alignReverse={alignReverse}>
          <SubTitle>{subTitle}</SubTitle>
          <Title>{title}</Title>
          <Info>{info}</Info>
        </FeatureText>
      </ContentInner>
    </Container>
  );
}
