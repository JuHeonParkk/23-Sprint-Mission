import styled from "styled-components";

const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 130px;
  margin-top: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: var(--secondary-800);
  font-size: 16px;
  font-weight: 500;

  ${"li"} {
    width: 100%;
    padding: 10px 22px;
    text-align: center;
    color: var(--secondary-800);
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }
  }
`;

function SelectOption({ isOpen }) {
  if (!isOpen) return null;

  return (
    <Container>
      <li value="createAt">최신순</li>
      <li value="favorite">좋아요순</li>
    </Container>
  );
}

export default SelectOption;
