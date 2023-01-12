import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTodo } from "../api/todo";
import { TodoType } from "../types/todo";

interface PropsType {
  id: string;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {
  id: "",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: ""
};

function DetailModal({ id, setToggle }: PropsType) {
  const [{ title, content, updatedAt }, setItem] =
    useState<TodoType>(initialState);

  useEffect(() => {
    getTodo(id).then((res: AxiosResponse<any> | undefined): void => {
      if (res?.status === 200) {
        setItem(res?.data?.data);
      }
    });
    return () => {
      setItem(initialState);
    };
  }, []);

  return (
    <ModalContainer>
      <CloseButton onClick={() => setToggle(false)}>X</CloseButton>
      <ModalTitle>Todo</ModalTitle>
      <p>마지막 수정 날짜: {updatedAt.split("T")[0]}</p>
      <InfoTitle>{title}</InfoTitle>
      <InfoContent>{content}</InfoContent>
    </ModalContainer>
  );
}

export default DetailModal;

const ModalContainer = styled.div`
  position: fixed;
  width: 400px;
  background-color: white;
  border: 2px solid #1e90ff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #1e90ff;
`;

const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 10px 0px;
  border-bottom: 1px solid #a9a9a9;
`;

const InfoContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  color: #1e90ff;
`;
