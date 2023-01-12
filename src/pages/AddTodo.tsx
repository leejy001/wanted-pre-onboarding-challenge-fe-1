import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addTodo } from "../api/todo";

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
    <TodoContainer>
      <TodoTitle>Add Todo</TodoTitle>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <p>할일 제목</p>
          <input
            name="title"
            onChange={onChange}
            placeholder="제목을 입력해주세요"
          />
        </InputWrapper>
        <InputWrapper>
          <p>할일 내용</p>
          <input
            name="content"
            onChange={onChange}
            placeholder="내용을 입력해주세요"
          />
        </InputWrapper>
        <ButtonWrapper>
          <button type="submit" disabled={!btnOn}>
            추가하기
          </button>
          <button onClick={() => navigate("/todo")}>뒤로</button>
        </ButtonWrapper>
      </form>
    </TodoContainer>
  );
}

export default AddTodo;

const TodoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
  padding: 20px;
`;

const TodoTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #1e90ff;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 36px;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  p {
    width: 90px;
    font-size: 16px;
    font-weight: 700;
  }
  input {
    border: 2px solid #1e90ff;
    border-radius: 5px;
    padding: 5px 10px 5px;
    width: 350px;
    font-size: 18px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  button {
    width: 130px;
    height: 36px;
    background-color: #1e90ff;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 0;
  }
`;
