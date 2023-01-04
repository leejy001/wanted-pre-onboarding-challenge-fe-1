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
        SignIn
      </SignButton>
      <SignButton onClick={(e) => handleClick(e)} data-route="sign-up">
        SignUp
      </SignButton>
    </MainContainer>
  );
}

export default Home;

const MainContainer = styled.div<{ isShow: string }>`
  display: ${({ isShow }) => (isShow === "home" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

const TodoLogo = styled.div`
  font-size: 20px;
`;

const SignButton = styled.button`
  width: 200px;
  height: 36px;
  font-size: 18px;
`;
