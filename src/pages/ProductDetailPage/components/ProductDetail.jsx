import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ReviewInput from "./ReviewInput";
import ProductReview from "./ProductReview";

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

export default function ProductDetail({ productDetail, reviews }) {
  return (
    <Container>
      <ProductInfo productDetail={productDetail} />
      <Line />
      <ReviewInput />
      {reviews && <ProductReview reviews={reviews} />}
    </Container>
  );
}
