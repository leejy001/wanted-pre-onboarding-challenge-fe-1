import React from "react";
import { useState } from "react";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Main() {
  const [isShow, setIsShow] = useState<string>("home");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!isShow) return;
    setIsShow(e.currentTarget.getAttribute("data-route") as string);
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
