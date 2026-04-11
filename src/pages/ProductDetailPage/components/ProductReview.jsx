import { useState } from "react";
import styled from "styled-components";
import KebabIcon from "@/assets/icon/kebab_icon.svg";
import Profile from "@/assets/common/profile.svg";
import EmptyReviewImg from "@/assets/common/inquiry_empty.svg";
import KebabButton from "@/components/KebabButton";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

const ReviewContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: var(--secondary-800);
  }
`;

const KebabImage = styled.img`
  cursor: pointer;
`;

const ReviewerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ReviewerImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewerName = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: var(--secondary-600);
`;

const ReviewerDate = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: var(--secondary-400);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-200);
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

export default function ProductReview({ reviews }) {
  const [kebabOpen, setKebabOpen] = useState(null);

  const handleKebabToggle = (reviewId) => {
    setKebabOpen((prev) => (prev === reviewId ? null : reviewId));
  };

  if (!reviews || reviews.length === 0) {
    return (
      <EmptyContainer>
        <EmptyImg src={EmptyReviewImg} alt="리뷰가 없습니다" />
        <EmptyText>아직 문의가 없어요</EmptyText>
      </EmptyContainer>
    );
  }

  return (
    <>
      {reviews.map((review) => (
        <Container key={review.id}>
          <ReviewContainer>
            <p>{review.content}</p>
            <KebabImage
              src={KebabIcon}
              onClick={() => handleKebabToggle(review.id)}
            />
            {kebabOpen === review.id && <KebabButton />}
          </ReviewContainer>

          <ReviewerContainer>
            <ReviewerImage
              src={review.writer?.image || Profile}
              alt="사용자 프로필"
            />
            <ReviewerInfo>
              <ReviewerName>{review.writer?.nickname}</ReviewerName>
              <ReviewerDate>
                {new Date(review.createdAt).toLocaleDateString()}
              </ReviewerDate>
            </ReviewerInfo>
          </ReviewerContainer>
          <Line />
        </Container>
      ))}
    </>
  );
}
