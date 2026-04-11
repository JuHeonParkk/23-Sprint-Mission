import styled from "styled-components";
import Button from "@/components/Button";
import ProductInfo from "./ProductInfo";
import ReviewInput from "./ReviewInput";
import ProductReview from "./ProductReview";

import ArrowBackIcon from "@/assets/icon/arrow_back.svg";

const Container = styled.div`
  width: 100%;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1200px) {
    padding: 24px 200px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-200);
  margin: 24px 0;

  @media (min-width: 768px) {
    margin: 40px 0;
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  padding: 11px 40px;
`;

export default function ProductDetail({ productDetail, reviews }) {
  return (
    <Container>
      <ProductInfo productDetail={productDetail} />
      <Line />
      <ReviewInput />
      <ReviewContainer>
        {reviews && <ProductReview reviews={reviews} />}
        <BackButton onClick={() => window.history.back()}>
          <p>목록으로 돌아가기</p>
          <img src={ArrowBackIcon} />
        </BackButton>
      </ReviewContainer>
    </Container>
  );
}
