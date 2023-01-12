import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <TodoLogo>Todo</TodoLogo>
      <SignButton onClick={() => navigate("/auth/sign-in")}>Sign In</SignButton>
      <SignButton onClick={() => navigate("/auth/sign-up")}>Sign Up</SignButton>
    </MainContainer>
  );
}

export default Auth;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
