import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getTodo, getTodos, removeTodo } from "../api/todo";
import DetailModal from "../components/DetailModal";
import PostModal from "../components/PostModal";
import { TodoType } from "../types/todo";

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [todo, setTodo] = useState<TodoType>({
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: ""
  });
  const [isToggle, setToggle] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [modalType, setModalType] = useState<string>("add");

  useEffect(() => {
    getTodos().then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setTodos(res?.data?.data);
      } else {
        setTodos([]);
      }
    });
  }, [isToggle]);

  const handleDetailTodo = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIsDetail(!isDetail);
    setModalId(id);
  };

  const handleRemoveTodo = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeTodo(id).then(() => {
      getTodos().then((res: AxiosResponse<any> | undefined): void => {
        if (res?.status === 200) {
          setTodos(res?.data?.data);
        } else {
          setTodos([]);
        }
      });
    });
  };

  const handleEditTodo = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setModalType("edit");
    getTodo(id).then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setTodo(res?.data?.data);
        setToggle(!isToggle);
      }
    });
  };

  const handleAddTodo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalType("add");
    setToggle(!isToggle);
  };

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <TodoContainer>
        <TodoTitle>Todo</TodoTitle>
        <LogoutButton onClick={logoutClick}>로그아웃</LogoutButton>
        <AddContainer>
          <p>{todos?.length}개의 할일</p>
          <button onClick={(e) => handleAddTodo(e)}>추가하기</button>
        </AddContainer>
        <TodoListContainer>
          {todos?.map((item: TodoType) => (
            <TodoItem
              key={item.id}
              onClick={(e) => handleDetailTodo(e, item.id)}
            >
              <TodoInfoWrapper>
                <p>작성일자: {item.createdAt.split("T")[0]}</p>
                <p>{item.title}</p>
              </TodoInfoWrapper>
              <ButtonWrapper>
                <button onClick={(e) => handleEditTodo(e, item.id)}>🖊</button>
                <button onClick={(e) => handleRemoveTodo(e, item.id)}>🗑</button>
              </ButtonWrapper>
            </TodoItem>
          ))}
        </TodoListContainer>
      </TodoContainer>
      {isToggle && (
        <PostModal todo={todo} modalType={modalType} setToggle={setToggle} />
      )}
      {isDetail && <DetailModal id={modalId} setToggle={setIsDetail} />}
    </>
  );
}

export default Todo;

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
  margin-bottom: 10px;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  color: #1e90ff;
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 700;
  }
  button {
    background-color: white;
    border: 2px solid #1e90ff;
    border-radius: 5px;
    color: #1e90ff;
  }
`;

const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a9a9a9;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    button {
      display: block;
    }
  }
`;

const TodoInfoWrapper = styled.div`
  p {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  button {
    display: none;
    background-color: white;
    border: none;
    font-size: 30px;
  }
`;
