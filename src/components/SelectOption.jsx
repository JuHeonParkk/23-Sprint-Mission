import styled from "styled-components";

const SelectOption = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 8px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: var(--secondary-800);
  font-size: 16px;
  font-weight: 500;
  display: none;

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

export default SelectOption;
