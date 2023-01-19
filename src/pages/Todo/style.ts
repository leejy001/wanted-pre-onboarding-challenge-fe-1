import styled from "styled-components";

export const TodoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
  padding: 20px;
`;

export const TodoTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #1e90ff;
  margin-bottom: 10px;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a9a9a9;
  padding: 10px 0px;
  cursor: pointer;
  div:nth-child(2) {
    display: none;
    gap: 10px;
  }
  &:hover {
    div:nth-child(2) {
      display: flex;
    }
  }
`;

export const TodoInfoWrapper = styled.div`
  p {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;
