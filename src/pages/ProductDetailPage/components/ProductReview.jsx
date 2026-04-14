import { useState } from "react";
import styled from "styled-components";
import { InputStyle } from "@/components/Input";
import Button from "@/components/Button";
import KebabIcon from "@/assets/icon/kebab_icon.svg";
import Profile from "@/assets/common/profile.svg";
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReviewerContext = styled.div`
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

const StyledTextarea = styled(InputStyle).attrs({ as: "textarea" })`
  height: 80px;
  resize: none;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const NoLinkButton = styled(Button)`
  background-color: var(--bg-white);
  color: var(--secondary-500);

  &:hover {
    background-color: var(--secondary-200);
    color: var(--secondary-700);
  }
`;

export default function ProductReview({ review, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editReview, setEditReview] = useState(review.content);
  const [kebabOpen, setKebabOpen] = useState(null);
  console.log(review.content);

  const handleKebabToggle = (reviewId) => {
    setKebabOpen((prev) => (prev === reviewId ? null : reviewId));
  };

  const handleEditOpen = () => {
    setIsEditing((prev) => !prev);
    setEditReview(review.content);
    setKebabOpen(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (!editReview.trim()) return;

    onUpdate(review.id, editReview);
    setIsEditing(false);
  };

  return (
    <Container>
      {isEditing ? (
        <StyledTextarea
          value={editReview}
          onChange={(e) => setEditReview(e.target.value)}
        />
      ) : (
        <ReviewContainer>
          <p>{review.content}</p>
          <KebabImage
            src={KebabIcon}
            onClick={() => handleKebabToggle(review.id)}
          />
          {kebabOpen === review.id && (
            <KebabButton>
              <li onClick={handleEditOpen}>수정하기</li>
              <li>삭제하기</li>
            </KebabButton>
          )}
        </ReviewContainer>
      )}

      <ReviewerContainer>
        <ReviewerContext>
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
        </ReviewerContext>
        {isEditing && (
          <ButtonContainer>
            <NoLinkButton onClick={handleEditOpen}>취소</NoLinkButton>
            <Button onClick={handleEditSubmit}>수정완료</Button>
          </ButtonContainer>
        )}
      </ReviewerContainer>
      <Line />
    </Container>
  );
}
