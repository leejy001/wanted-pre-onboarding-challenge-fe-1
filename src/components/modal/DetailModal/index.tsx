import React from "react";
import { BasicModalType } from "types/modal";
import Modal from "../../common/Modal";
import { ModalTitle, InfoTitle, InfoContent } from "./style";
import useTodoQuery from "hooks/todo/queries/useTodoQuery";

function DetailModal({ todoId, isClose, setToggle }: BasicModalType) {
  const { data: todo } = useTodoQuery(todoId);

  return (
    <Modal setToggle={setToggle} isClose={isClose}>
      <ModalTitle>Todo</ModalTitle>
      <p>마지막 수정 날짜: {todo?.data.updatedAt.split("T")[0]}</p>
      <InfoTitle>{todo?.data.title}</InfoTitle>
      <InfoContent>{todo?.data.content}</InfoContent>
    </Modal>
  );
}

export default DetailModal;
