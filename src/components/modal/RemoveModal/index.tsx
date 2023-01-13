import React from "react";
import { removeTodo } from "api/todo";
import { BasicModalType } from "types/modal";
import Modal from "../../common/Modal";
import { ModalTitle, ButtonWrapper } from "./style";

function RemoveModal({ todoId, isClose, setToggle }: BasicModalType) {
  const handleRemoveTodo = () => {
    if (todoId)
      removeTodo(todoId).then(() => {
        setToggle(false);
      });
  };

  return (
    <Modal setToggle={setToggle} isClose={isClose}>
      <ModalTitle>Todo 삭제</ModalTitle>
      <ButtonWrapper>
        <button onClick={handleRemoveTodo}>삭제</button>
        <button onClick={() => setToggle(false)}>취소</button>
      </ButtonWrapper>
    </Modal>
  );
}

export default RemoveModal;
