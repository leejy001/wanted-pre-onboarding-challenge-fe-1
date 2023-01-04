import React from "react";
import { useNavigate } from "react-router";

function Todo() {
  const navigate = useNavigate();
  const logoutClick = () => {
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div>
      <p>Todo</p>
      <button onClick={logoutClick}>로그아웃</button>
    </div>
  );
}

export default Todo;
