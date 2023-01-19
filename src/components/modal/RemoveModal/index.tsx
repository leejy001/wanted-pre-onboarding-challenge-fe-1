import React from "react";
import { BasicModalType } from "types/modal";
import Modal from "../../common/Modal";
import { ModalTitle, ButtonWrapper } from "./style";
import useRemoveTodoMutation from "hooks/todo/mutation/useRemoveTodoMutation";
import DefaultButton from "components/common/Button";

function RemoveModal({ todoId, isClose, setToggle }: BasicModalType) {
  const { mutate } = useRemoveTodoMutation({ setToggle });

  const handleRemoveTodo = () => {
    if (todoId) mutate(todoId);
  };

  return (
    <Modal setToggle={setToggle} isClose={isClose}>
      <ModalTitle>Todo 삭제</ModalTitle>
      <ButtonWrapper>
        <DefaultButton
          name="삭제"
          className="primary"
          width={130}
          height={40}
          onClick={handleRemoveTodo}
        />
        <DefaultButton
          name="취소"
          className="primary"
          width={130}
          height={40}
          onClick={() => setToggle(false)}
        />
      </ButtonWrapper>
    </Modal>
  );
}

export default RemoveModal;
