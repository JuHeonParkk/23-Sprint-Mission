import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & label {
    font-size: 16px;
    font-weight: 600;
    color: var(--secondary-900);
  }
`;

export default function ReviewInput() {
  return (
    <Container>
      <label htmlFor="review">문의하기</label>
      <textarea
        id="review"
        type="text"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button>등록</button>
    </Container>
  );
}
