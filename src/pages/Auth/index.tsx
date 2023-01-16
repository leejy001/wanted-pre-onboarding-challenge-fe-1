import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, TodoLogo, SignButton } from "./style";

function Auth() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    } else {
      navigate("/auth/sign-in");
    }
  };

  return (
    <MainContainer>
      <TodoLogo>Todo</TodoLogo>
      <SignButton onClick={handleSignIn}>Sign In</SignButton>
      <SignButton onClick={() => navigate("/auth/sign-up")}>Sign Up</SignButton>
    </MainContainer>
  );
}

export default Auth;
