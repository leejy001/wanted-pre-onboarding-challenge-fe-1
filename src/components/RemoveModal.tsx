import React from "react";
import styled from "styled-components";
import { removeTodo } from "../api/todo";
import { BasicModalType } from "../types/modal";

function RemoveModal({ todoId, setToggle }: BasicModalType) {
  const handleRemoveTodo = () => {
    removeTodo(todoId).then(() => {
      setToggle(false);
    });
  };

  return (
    <ModalContainer>
      <ModalTitle>Todo 삭제</ModalTitle>
      <ButtonWrapper>
        <button onClick={handleRemoveTodo}>삭제</button>
        <button onClick={() => setToggle(false)}>취소</button>
      </ButtonWrapper>
    </ModalContainer>
  );
}

export default RemoveModal;

const ModalContainer = styled.div`
  position: fixed;
  width: 300px;
  background-color: white;
  border: 2px solid #1e90ff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #1e90ff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  button {
    width: 150px;
    height: 36px;
    background-color: #1e90ff;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 0;
  }
`;
