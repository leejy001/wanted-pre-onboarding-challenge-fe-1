import DefaultButton from "components/common/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, TodoLogo } from "./style";

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
      <DefaultButton
        name="Sign In"
        className="primary"
        width={200}
        height={40}
        onClick={handleSignIn}
      />
      <DefaultButton
        name="Sign Up"
        className="primary"
        width={200}
        height={40}
        onClick={() => navigate("/auth/sign-up")}
      />
    </MainContainer>
  );
}

export default Auth;
