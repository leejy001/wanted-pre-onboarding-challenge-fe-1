import React from "react";
import styled from "styled-components";

type PropsTypes = {
  isShow: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function Home({ isShow, handleClick }: PropsTypes) {
  return (
    <MainContainer isShow={isShow}>
      <TodoLogo>Todo</TodoLogo>
      <SignButton onClick={(e) => handleClick(e)} data-route="sign-in">
        Sign In
      </SignButton>
      <SignButton onClick={(e) => handleClick(e)} data-route="sign-up">
        Sign Up
      </SignButton>
    </MainContainer>
  );
}

export default Home;

const MainContainer = styled.div<{ isShow: string }>`
  margin: 0 auto;
  display: ${({ isShow }) => (isShow === "home" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
`;

const TodoLogo = styled.div`
  color: #1e90ff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SignButton = styled.button`
  background-color: #1e90ff;
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 200px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
`;
