import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ReviewInput from "./ReviewInput";

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

export default function ProductDetail({ productDetail }) {
  return (
    <Container>
      <ProductInfo productDetail={productDetail} />
      <ReviewInput />
    </Container>
  );
}
