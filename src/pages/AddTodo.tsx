import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../api/todoApi";

interface TodoInfo {
  title: string;
  content: string;
}

function AddTodo() {
  const navigate = useNavigate();
  const [btnOn, setBtnOn] = useState<boolean>(false);
  const [todoInfo, setTodoInfo] = useState({ title: "", content: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
    if (checkInput(todoInfo)) {
      setBtnOn(true);
      return;
    }
    setBtnOn(false);
  };

  const checkInput = (todoInfo: TodoInfo) => {
    if (!todoInfo.title || !todoInfo.content) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todoInfo).then(() => {
      navigate("/todo");
    });
  };

  return (
    <div>
      <p>Add Todo</p>
      <form onSubmit={handleSubmit}>
        <p>할일 제목</p>
        <input
          name="title"
          onChange={onChange}
          placeholder="제목을 입력해주세요"
        />
        <p>내용 제목</p>
        <input
          name="content"
          onChange={onChange}
          placeholder="내용을 입력해주세요"
        />
        <button type="submit" disabled={!btnOn}>
          제출하기
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
