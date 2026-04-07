import { useState } from "react";
import styled from "styled-components";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  & label {
    font-size: 16px;
    font-weight: 600;
    color: var(--secondary-900);
    margin-bottom: -8px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const Textarea = styled.textarea`
  height: 129px;
  resize: none;
  font-size: 14px;

  @media (min-width: 768px) {
    height: 104px;
    font-size: 16px;
  }
`;

const SubmitButton = styled(Button)`
  padding: 8px 23px;
  width: fit-content;
  height: 42px;
  align-self: flex-end;
`;

export default function ReviewInput() {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setReview("");
  };

  return (
    <Container>
      <label htmlFor="review">문의하기</label>
      <Textarea
        id="review"
        type="text"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit} disabled={!review}>
        등록
      </SubmitButton>
    </Container>
  );
}
