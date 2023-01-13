import { AxiosResponse } from "axios";
import React, { useCallback, useEffect } from "react";
import { addTodo, editTodo, getTodo } from "../../../api/todo";
import useForm from "../../../hooks/useForm";
import { PostModalType } from "../../../types/modal";
import { TodoType } from "../../../types/todo";
import { initialTodoState } from "../../../util/state";
import Modal from "../../common/Modal";
import { ModalTitle, ModalForm, ConfirmButton } from "./style";

function PostModal({ todoId, isClose, modalType, setToggle }: PostModalType) {
  const [{ id, title, content, createdAt, updatedAt }, handleChange, setState] =
    useForm<TodoType>(initialTodoState);

  useEffect(() => {
    if (modalType === "edit") {
      getTodo(todoId).then((res: AxiosResponse<any> | undefined): void => {
        if (res?.status === 200) {
          setState(res?.data?.data);
        }
      });
    }
    return () => {
      setState(initialTodoState);
    };
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (modalType === "add") {
        addTodo({ title, content }).then(() => {
          alert("추가 완료!!");
          setToggle(false);
        });
        return;
      }
      editTodo({ id, title, content }).then(() => {
        alert("수정 완료!!");
        setToggle(false);
      });
    },
    [title, content]
  );

  return (
    <Modal setToggle={setToggle} isClose={isClose}>
      <ModalTitle>
        {modalType === "add" ? "할일 추가하기" : "할일 수정하기"}
      </ModalTitle>
      {modalType === "edit" && (
        <p>마지막 수정 날짜: {updatedAt.split("T")[0]}</p>
      )}
      <ModalForm onSubmit={handleSubmit}>
        <p>제목</p>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <p>내용</p>
        <textarea name="content" value={content} onChange={handleChange} />
        <ConfirmButton type="submit">완료</ConfirmButton>
      </ModalForm>
    </Modal>
  );
}

export default PostModal;
