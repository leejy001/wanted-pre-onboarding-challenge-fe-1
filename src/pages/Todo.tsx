import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getTodos, removeTodo } from "../api/todoApi";

interface Item {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

function Todo() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    getTodos().then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setItems(res?.data?.data);
      } else {
        setItems([]);
      }
    });
  }, []);

  const removeItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeTodo(id).then(() => {
      getTodos().then((res: AxiosResponse<any> | undefined): void => {
        if (res?.status === 200) {
          setItems(res?.data?.data);
        } else {
          setItems([]);
        }
      });
    });
  };

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <TodoContainer>
      <TodoTitle>Todo</TodoTitle>
      <LogoutButton onClick={logoutClick}>로그아웃</LogoutButton>
      <AddContainer>
        <p>{items?.length}개의 할일</p>
        <button onClick={() => navigate("/todo/add")}>추가하기</button>
      </AddContainer>
      <TodoListContainer>
        {items?.map((item: Item) => (
          <TodoItem key={item.id} onClick={() => navigate(`/todo/${item.id}`)}>
            <TodoInfoWrapper>
              <p>작성일자: {item.createdAt.split("T")[0]}</p>
              <p>{item.title}</p>
            </TodoInfoWrapper>
            <DeleteButton onClick={(e) => removeItem(e, item.id)}>
              🗑
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoListContainer>
    </TodoContainer>
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
  button {
    display: none;
  }
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

const DeleteButton = styled.button`
  background-color: white;
  border: none;
  font-size: 36px;
`;
