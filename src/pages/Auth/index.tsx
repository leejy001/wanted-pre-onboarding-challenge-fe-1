import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, TodoLogo, SignButton } from "./style";

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
