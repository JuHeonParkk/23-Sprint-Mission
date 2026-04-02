import styled from "styled-components";
import closeIcon from "@/assets/icon/closeIcon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--secondary-100);
  border-radius: 26px;

  & span {
    font-size: 16px;
    color: var(--primary-800);
  }

  & img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export default function Tag({ tags, onDelete }) {
  return (
    <Container>
      {tags.map((tag, i) => (
        <TagContainer key={i}>
          <span>#{tag}</span>
          <img
            src={closeIcon}
            alt="지우기 아이콘"
            onClick={() => onDelete(i)}
          />
        </TagContainer>
      ))}
    </Container>
  );
}
