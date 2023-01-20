import React from "react";
import { ButtonContainer } from "./style";

interface PropsType {
  logoutClick: () => void;
}

function LogoutButton({ logoutClick }: PropsType) {
  return (
    <ButtonContainer onClick={logoutClick}>
      <p>로그아웃</p>
      <img src={`${process.env.PUBLIC_URL}/asset/logout.png`} />
    </ButtonContainer>
  );
}

export default LogoutButton;
