import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../api/signApi";

type PropsTypes = {
  isShow: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

interface UserInfo {
  email: string;
  password: string;
}

function SignUp({ isShow, handleClick }: PropsTypes) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });
  const [btnOn, setBtnOn] = useState<boolean>(false);

  const checkRegex = (userInfo: UserInfo) => {
    if (!userInfo.email || !userInfo.password) return false;
    const regEmail =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(userInfo.email) === true && userInfo.password.length >= 8)
      return true;
    return false;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
    if (checkRegex(userInfo)) {
      setBtnOn(true);
      return;
    }
    setBtnOn(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signup(userInfo).then((res: AxiosResponse<any, any> | undefined): void => {
      if (res?.status === 200) {
        sessionStorage.setItem("token", res?.data.token);
        navigate("/todo");
      } else {
        alert("오류! 관리자에게 문의해주세요");
      }
    });
  };

  return (
    <SignUpContainer isShow={isShow}>
      <TitleWrapper>
        <p>회원가입</p>
        <button onClick={(e) => handleClick(e)} data-route="home">
          뒤로
        </button>
      </TitleWrapper>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input
          type="email"
          onChange={onChange}
          placeholder="이메일을 입력하세요"
        />
        <p>password</p>
        <input
          type="password"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
        <button type="submit" disabled={!btnOn}>
          회원가입 하기
        </button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div<{ isShow: string }>`
  display: ${({ isShow }) => (isShow === "sign-up" ? "flex" : "none")};
  flex-direction: column;
  width: 400px;
  height: 400px;
`;

const TitleWrapper = styled.div`
  display: flex;
`;
