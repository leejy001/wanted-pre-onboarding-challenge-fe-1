import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getTodos } from "../api/todo";
import RemoveModal from "../components/RemoveModal";
import DetailModal from "../components/DetailModal";
import PostModal from "../components/PostModal";
import { TodoType } from "../types/todo";

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [isToggle, setToggle] = useState<boolean>(false);
  const [isRemove, setRemove] = useState<boolean>(false);
  const [isDetail, setDetail] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<string>("");
  const [modalType, setModalType] = useState<string>("add");

  useEffect(() => {
    getTodos().then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setTodos(res?.data?.data);
      } else {
        setTodos([]);
      }
    });
  }, [isToggle, isRemove]);

  const handleToggleDetail = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDetail(!isDetail);
    setTodoId(id);
  };

  const handleToggleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setModalType("edit");
    setTodoId(id);
    setToggle(!isToggle);
  };

  const handleToggleAdd = () => {
    setModalType("add");
    setToggle(!isToggle);
  };

  const handleToggleRemove = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setTodoId(id);
    setRemove(!isToggle);
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
          <button onClick={handleToggleAdd}>추가하기</button>
        </AddContainer>
        <TodoListContainer>
          {todos?.map((item: TodoType) => (
            <TodoItem
              key={item.id}
              onClick={(e) => handleToggleDetail(e, item.id)}
            >
              <TodoInfoWrapper>
                <p>작성일자: {item.createdAt.split("T")[0]}</p>
                <p>{item.title}</p>
              </TodoInfoWrapper>
              <ButtonWrapper>
                <button onClick={(e) => handleToggleEdit(e, item.id)}>🖊</button>
                <button onClick={(e) => handleToggleRemove(e, item.id)}>
                  🗑
                </button>
              </ButtonWrapper>
            </TodoItem>
          ))}
        </TodoListContainer>
      </TodoContainer>
      {isToggle && (
        <PostModal
          todoId={todoId}
          modalType={modalType}
          setToggle={setToggle}
        />
      )}
      {isDetail && <DetailModal todoId={todoId} setToggle={setDetail} />}
      {isRemove && <RemoveModal todoId={todoId} setToggle={setRemove} />}
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
