import styled from "styled-components";

const SelectOption = styled.ul`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: var(--secondary-800);
  font-size: 16px;
  font-weight: 500;

  ${"li"} {
    width: 100%;
    padding: 12px 22px;
    text-align: center;
    color: var(--secondary-800);
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default SelectOption;
