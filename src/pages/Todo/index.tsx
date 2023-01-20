import React, { useState } from "react";
import { useNavigate } from "react-router";
import RemoveModal from "components/modal/RemoveModal";
import DetailModal from "components/modal/DetailModal";
import PostModal from "components/modal/PostModal";
import { TodoType } from "types/todo";
import useTodosQuery from "hooks/todo/queries/useTodosQuery";
import {
  TodoWrapper,
  TodoContainer,
  TodoContainerHeader,
  TodoListContainer,
  TodoContainerFooter,
  CreateButtonWrapper
} from "./style";
import LogoutButton from "./component/LogoutButton";
import CreateButton from "./component/CraeteButton";
import Today from "./component/Today";
import TodoItem from "./component/TodoItem";
import TimeTag from "./component/TimeTag";

function Todo() {
  const navigate = useNavigate();
  const { data: todos } = useTodosQuery();
  const [isToggle, setToggle] = useState<boolean>(false);
  const [isRemove, setRemove] = useState<boolean>(false);
  const [isDetail, setDetail] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<string>("");
  const [modalType, setModalType] = useState<string>("add");

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
      <TodoWrapper>
        <LogoutButton logoutClick={logoutClick} />
        <TimeTag />
        <TodoContainer>
          <TodoContainerHeader>
            <Today />
          </TodoContainerHeader>
          <TodoListContainer>
            {todos?.data.map((item: TodoType) => (
              <TodoItem
                key={item.id}
                item={item}
                detailToggle={(e) => handleToggleDetail(e, item.id)}
                editToggle={(e) => handleToggleEdit(e, item.id)}
                removeToggle={(e) => handleToggleRemove(e, item.id)}
              />
            ))}
          </TodoListContainer>
          <TodoContainerFooter>
            <p>
              <span>{todos?.data.length}</span>개의 할일
            </p>
          </TodoContainerFooter>
          <CreateButtonWrapper>
            <CreateButton handleToggle={handleToggleAdd} />
          </CreateButtonWrapper>
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
      </TodoWrapper>
    </>
  );
}

export default Todo;
