import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editTodo, getTodo } from "../api/todo";
import { TodoType } from "../types/todo";

const initialState = {
  id: "",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: ""
};

function DetailTodo() {
  const navigate = useNavigate();
  const params = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [item, setItem] = useState<TodoType>(initialState);

  useEffect(() => {
    getTodo(params.id).then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setItem(res?.data?.data);
      }
    });
    return () => {
      setItem(initialState);
    };
  }, []);

  const onToggle = () => {
    setIsEdit(!isEdit);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleEdit = (item: TodoType) => {
    const data = {
      id: item.id,
      title: item.title,
      content: item.content
    };
    editTodo(data).then(() => {
      onToggle();
    });
  };

  return (
    <TodoContainer>
      <TitleWrapper>
        <TodoTitle>Todo</TodoTitle>
        <p>
          최종 수정 날짜 : <span>{item?.updatedAt.split("T")[0]}</span>
        </p>
      </TitleWrapper>
      <InputWrapper>
        <p>제목</p>
        <input
          name="title"
          onChange={onChange}
          defaultValue={item?.title}
          readOnly={!isEdit}
        />
      </InputWrapper>
      <InputWrapper>
        <p>내용</p>
        <input
          name="content"
          onChange={onChange}
          defaultValue={item?.content}
          readOnly={!isEdit}
        />
      </InputWrapper>
      <ButtonWrapper>
        {isEdit ? (
          <button onClick={() => handleEdit(item)}>수정완료</button>
        ) : (
          <button onClick={onToggle}>수정하기</button>
        )}
        <button onClick={() => navigate("/todo")}>뒤로</button>
      </ButtonWrapper>
    </TodoContainer>
  );
}

export default DetailTodo;

const TodoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p:last-child {
    font-size: 16px;
    font-weight: 700;
    color: #1e90ff;
    letter-spacing: -1px;
  }
`;

const TodoTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #1e90ff;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 36px;
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
