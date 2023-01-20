import styled from "styled-components";

export const TodoWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  position: relative;
`;

export const TodoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 400px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 5px 5px rgba(0, 116, 228, 0.5);
  padding: 40px 40px 0 40px;
  z-index: 100;
`;

export const TodoContainerHeader = styled.div`
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
  div:nth-child(1) {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }
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

export const TodoContainerFooter = styled.div`
  padding: 30px 0px 50px;
  p {
    font-weight: 700;
    span {
      color: #1e90ff;
      font-size: 18px;
    }
  }
`;

export const CreateButtonWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
`;
