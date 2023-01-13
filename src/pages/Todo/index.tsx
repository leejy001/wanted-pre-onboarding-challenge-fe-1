import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodos } from "api/todo";
import RemoveModal from "components/modal/RemoveModal";
import DetailModal from "components/modal/DetailModal";
import PostModal from "components/modal/PostModal";
import { TodoType } from "types/todo";
import {
  TodoContainer,
  TodoTitle,
  LogoutButton,
  AddContainer,
  TodoListContainer,
  TodoItem,
  TodoInfoWrapper,
  ButtonWrapper
} from "./style";

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
          isClose={true}
          modalType={modalType}
          setToggle={setToggle}
        />
      )}
      {isDetail && (
        <DetailModal todoId={todoId} isClose={true} setToggle={setDetail} />
      )}
      {isRemove && (
        <RemoveModal todoId={todoId} isClose={false} setToggle={setRemove} />
      )}
    </>
  );
}

export default Todo;
