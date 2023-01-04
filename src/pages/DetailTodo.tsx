import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editTodo, getTodo } from "../api/todoApi";

interface Item {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

function DetailTodo() {
  const navigate = useNavigate();
  const params = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({
    id: "",
    title: "",
    content: "",
    updatedAt: "",
  });

  useEffect(() => {
    getTodo(params.id).then(
      (res: AxiosResponse<any, any> | undefined): void => {
        if (res?.status === 200) {
          setItem(res?.data?.data);
        }
      }
    );
  }, []);

  const onToggle = () => {
    setIsEdit(!isEdit);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleEdit = (item: Item) => {
    const data = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    editTodo(data).then(() => {
      onToggle();
    });
  };

  return (
    <div>
      <p>Todo</p>
      {isEdit ? (
        <EditButton onClick={() => handleEdit(item)}>수정완료</EditButton>
      ) : (
        <EditButton onClick={onToggle}>수정하기</EditButton>
      )}
      <button onClick={() => navigate("/todo")}>뒤로</button>
      <p>
        최종 수정 날짜 : <span>{item?.updatedAt}</span>
      </p>
      <p>제목</p>
      <input
        name="title"
        onChange={onChange}
        defaultValue={item?.title}
        readOnly={!isEdit}
      />
      <p>내용</p>
      <input
        name="content"
        onChange={onChange}
        defaultValue={item?.content}
        readOnly={!isEdit}
      />
    </div>
  );
}

export default DetailTodo;

const EditButton = styled.button``;
