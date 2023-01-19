import React, { useState } from "react";
import { useNavigate } from "react-router";
import RemoveModal from "components/modal/RemoveModal";
import DetailModal from "components/modal/DetailModal";
import PostModal from "components/modal/PostModal";
import { TodoType } from "types/todo";
import useTodosQuery from "hooks/todo/queries/useTodosQuery";
import {
  TodoContainer,
  TodoTitle,
  AddContainer,
  TodoListContainer,
  TodoItem,
  TodoInfoWrapper
} from "./style";
import DefaultButton from "components/common/Button";
import ImageButton from "components/common/ImageButton";

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
      <TodoContainer>
        <TodoTitle>Todo</TodoTitle>
        <DefaultButton
          name="로그아웃"
          className="border-primary"
          width={80}
          height={27}
          fontSize={16}
          onClick={logoutClick}
        />
        <AddContainer>
          <p>{todos?.data.length}개의 할일</p>
          <DefaultButton
            name="추가하기"
            className="border-primary"
            width={80}
            height={27}
            fontSize={16}
            onClick={handleToggleAdd}
          />
        </AddContainer>
        <TodoListContainer>
          {todos?.data.map((item: TodoType) => (
            <TodoItem
              key={item.id}
              onClick={(e) => handleToggleDetail(e, item.id)}
            >
              <TodoInfoWrapper>
                <p>작성일자: {item.createdAt.split("T")[0]}</p>
                <p>{item.title}</p>
              </TodoInfoWrapper>
              <div>
                <ImageButton
                  onClick={(e) => handleToggleEdit(e, item.id)}
                  width={32}
                  height={32}
                  imgSrc={`${process.env.PUBLIC_URL}/asset/edit.png`}
                />
                <ImageButton
                  onClick={(e) => handleToggleRemove(e, item.id)}
                  width={32}
                  height={32}
                  imgSrc={`${process.env.PUBLIC_URL}/asset/trash.png`}
                />
              </div>
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
