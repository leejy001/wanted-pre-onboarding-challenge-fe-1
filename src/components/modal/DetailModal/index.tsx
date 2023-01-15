import React, { useEffect, useState } from "react";
import { getTodo } from "api/todo";
import { BasicModalType } from "types/modal";
import { TodoType } from "types/todo";
import { initialTodoState } from "util/state";
import Modal from "../../common/Modal";
import { ModalTitle, InfoTitle, InfoContent } from "./style";

function DetailModal({ todoId, isClose, setToggle }: BasicModalType) {
  const [{ title, content, updatedAt }, setItem] =
    useState<TodoType>(initialTodoState);

  useEffect(() => {
    getTodo(todoId).then(
      (res: { status: number; data: TodoType } | undefined): void => {
        if (res?.status === 200) {
          setItem(res?.data);
        }
      }
    );
    return () => {
      setItem(initialTodoState);
    };
  }, []);

  return (
    <Modal setToggle={setToggle} isClose={isClose}>
      <ModalTitle>Todo</ModalTitle>
      <p>마지막 수정 날짜: {updatedAt.split("T")[0]}</p>
      <InfoTitle>{title}</InfoTitle>
      <InfoContent>{content}</InfoContent>
    </Modal>
  );
}

export default DetailModal;
