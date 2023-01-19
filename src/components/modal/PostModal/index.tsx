import React, { useCallback, useEffect } from "react";
import useForm from "hooks/common/useForm";
import { PostModalType } from "types/modal";
import { TodoType } from "types/todo";
import { initialTodoState } from "util/state";
import Modal from "../../common/Modal";
import { ModalTitle, ModalForm, ButtonWrapper } from "./style";
import useAddTodoMutation from "hooks/todo/mutation/useAddTodoMutation";
import useModfiyTodoMutation from "hooks/todo/mutation/useModifyTodoMutation";
import useTodoQuery from "hooks/todo/queries/useTodoQuery";
import DefaultButton from "components/common/Button";

function PostModal({ todoId, isClose, modalType, setToggle }: PostModalType) {
  const [{ id, title, content, updatedAt }, handleChange, setState] =
    useForm<TodoType>(initialTodoState);
  const { data: todo } = useTodoQuery(todoId);
  const { mutate: addMutate } = useAddTodoMutation({ setToggle });
  const { mutate: modifyMutate } = useModfiyTodoMutation({ setToggle });

  useEffect(() => {
    if (modalType === "edit" && todo) {
      setState(todo?.data);
    }
  }, [todo?.data]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (modalType === "add") {
        addMutate({ title, content });
        return;
      }
      modifyMutate({ id, title, content });
      setState(initialTodoState);
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
        <ButtonWrapper>
          <DefaultButton
            type="submit"
            name="완료"
            className="primary"
            width={130}
            height={40}
          />
        </ButtonWrapper>
      </ModalForm>
    </Modal>
  );
}

export default PostModal;
