import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import ProductInfo from "./ProductInfo";
import ReviewInput from "./ReviewInput";
import ProductReview from "./ProductReview";

import ArrowBackIcon from "@/assets/icon/arrow_back.svg";
import EmptyReviewImg from "@/assets/common/inquiry_empty.svg";

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

const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const EmptyImg = styled.img`
  width: 140px;
  height: 140px;

  @media (min-width: 1200px) {
    width: 196px;
    height: 196px;
  }
`;

const EmptyText = styled.p`
  font-size: 16px;
  color: var(--secondary-400);
  text-align: center;
`;

export default function ProductDetail({ productDetail, reviews, setReviews }) {
  const navigate = useNavigate();

  const handleReviewSubmit = (newReview) => {
    const review = {
      id: Date.now(),
      content: newReview,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    setReviews((prevReviews) => [review, ...prevReviews]);
  };

  const handleReviewUpdate = (id, editReview) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, content: editReview } : review,
      ),
    );
  };

  return (
    <Container>
      <ProductInfo productDetail={productDetail} />
      <Line />
      <ReviewInput onSubmit={handleReviewSubmit} />
      <ReviewContainer>
        {reviews.length === 0 ? (
          <EmptyContainer>
            <EmptyImg src={EmptyReviewImg} alt="리뷰가 없습니다" />
            <EmptyText>아직 문의가 없어요</EmptyText>
          </EmptyContainer>
        ) : (
          reviews.map((review) => (
            <ProductReview
              key={review.id}
              review={review}
              onUpdate={handleReviewUpdate}
            />
          ))
        )}
        <BackButton onClick={() => navigate("/items")}>
          <p>목록으로 돌아가기</p>
          <img src={ArrowBackIcon} />
        </BackButton>
      </ReviewContainer>
    </Container>
  );
}
