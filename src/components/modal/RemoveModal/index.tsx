import React from "react";
import { BasicModalType } from "types/modal";
import Modal from "../../common/Modal";
import { ModalTitle, ButtonWrapper } from "./style";
import useRemoveTodoMutation from "hooks/todo/mutation/useRemoveTodoMutation";

function RemoveModal({ todoId, isClose, setToggle }: BasicModalType) {
  const { mutate } = useRemoveTodoMutation({ setToggle });

  const handleRemoveTodo = () => {
    if (todoId) mutate(todoId);
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
