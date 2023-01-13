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

export const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  color: #1e90ff;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 700;
  }
  button {
    background-color: white;
    border: 2px solid #1e90ff;
    border-radius: 5px;
    color: #1e90ff;
  }
`;

export const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a9a9a9;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    button {
      display: block;
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

export const ButtonWrapper = styled.div`
  display: flex;
  button {
    display: none;
    background-color: white;
    border: none;
    font-size: 30px;
  }
`;
