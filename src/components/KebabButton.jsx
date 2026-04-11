import styled from "styled-components";

const KebabContainer = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--secondary-200);
  border-radius: 8px;
  background-color: var(--bg-white);

  & li {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-500);
    padding: 14px 26px;

    @media (min-width: 768px) {
      padding: 14px 40px;
    }

    &:hover {
      background-color: var(--secondary-100);
      color: var(--secondary-700);
      cursor: pointer;
    }
  }
`;

export default function KebabButton({ children }) {
  return <KebabContainer>{children}</KebabContainer>;
}
