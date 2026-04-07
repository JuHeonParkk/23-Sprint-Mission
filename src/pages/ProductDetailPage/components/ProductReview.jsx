import styled from "styled-components";
import KebabIcon from "@/assets/icon/kebab_icon.svg";
import Profile from "@/assets/common/profile.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const ReviewContainer = styled.div`
  width: 100%;
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
  margin: 12px 0 24px 0;
`;

export default function ProductReview({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <Container>
          <ReviewContainer key={review.id}>
            <p>{review.content}</p>
            <img src={KebabIcon} />
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
