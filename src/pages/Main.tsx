import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Main() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<string>("home");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShow(e.currentTarget.getAttribute("data-route") as string);
    if (
      e.currentTarget.getAttribute("data-route") === "sign-in" &&
      localStorage.getItem("token")
    ) {
      navigate("/todo");
    }
  };

  return (
    <div>
      <Home isShow={isShow} handleClick={handleClick} />
      <SignIn isShow={isShow} handleClick={handleClick} />
      <SignUp isShow={isShow} handleClick={handleClick} />
    </div>
  );
}

export default Main;
