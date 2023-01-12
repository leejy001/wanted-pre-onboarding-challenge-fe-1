import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { addTodo, editTodo } from "../api/todo";
import useForm from "../hooks/useForm";
import { TodoType } from "../types/todo";

interface PropsType {
  todo: TodoType | undefined;
  modalType: string;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {
  id: "",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: ""
};

function PostModal({ todo, modalType, setToggle }: PropsType) {
  const [{ id, title, content, createdAt, updatedAt }, handleChange, setState] =
    useForm<TodoType>(initialState);

  useEffect(() => {
    if (todo)
      setState({
        id: todo.id,
        title: todo.title,
        content: todo.content,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      });
    return () => {
      setState(initialState);
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
    <ModalContainer>
      <CloseButton onClick={() => setToggle(false)}>X</CloseButton>
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
    </ModalContainer>
  );
}

export default PostModal;

const ModalContainer = styled.div`
  position: fixed;
  width: 400px;
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

const CloseButton = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  color: #1e90ff;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  p {
    font-size: 18px;
    font-weight: 600;
  }
  input[type="text"] {
    font-size: 16px;
    padding: 5px;
    border: 1px solid #1e90ff;
  }
  textarea {
    font-size: 16px;
    padding: 5px;
    height: 100px;
    border: 1px solid #1e90ff;
  }
`;

const ConfirmButton = styled.button`
  width: 150px;
  height: 36px;
  background-color: #1e90ff;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 0;
  margin: 10px auto 0px;
`;
