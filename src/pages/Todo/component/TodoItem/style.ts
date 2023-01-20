import styled from "styled-components";

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a9a9a9;
  padding: 10px 0px;
  cursor: pointer;
  height: 40px;
  div:nth-child(1) {
    font-size: 18px;
    font-weight: 700;
  }
  div:nth-child(2) {
    display: block;
    gap: 10px;
  }
  div:nth-child(3) {
    display: none;
    gap: 10px;
  }
  &:hover {
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      display: flex;
    }
  }
`;
