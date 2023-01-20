import DefaultButton from "components/common/Button";
import Container from "components/common/Container";
import React from "react";
import { useNavigate } from "react-router-dom";

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
    <Container title={"ToDo"}>
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
    </Container>
  );
}

export default Auth;
