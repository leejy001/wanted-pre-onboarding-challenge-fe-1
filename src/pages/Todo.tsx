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
  const [items, setItems] = useState<Array<Item> | null>(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    getTodos().then((res: AxiosResponse<any, any> | undefined): void => {
      if (res?.status === 200) {
        setItems(res?.data?.data);
      } else {
        alert(res?.data?.message);
      }
    });
  };

  const removeItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeTodo(id).then(() => {
      getItems();
    });
  };

  const logoutClick = () => {
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div>
      <p>Todo</p>
      <button onClick={logoutClick}>로그아웃</button>
      <button onClick={() => navigate("/todo/add")}>추가하기</button>
      <p>{items?.length}개의 할일</p>
      <TodoListContainer>
        {items?.map((item: Item) => (
          <TodoItem key={item.id} onClick={() => navigate(`/todo/${item.id}`)}>
            {item.title} {item.createdAt}{" "}
            <button onClick={(e) => removeItem(e, item.id)}>삭제하기</button>
          </TodoItem>
        ))}
      </TodoListContainer>
    </div>
  );
}

export default Todo;

const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TodoItem = styled.li``;
