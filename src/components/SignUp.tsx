import { AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../api/auth";
import useError from "../hooks/useError";
import useForm from "../hooks/useForm";
import { SignUpFormType } from "../types/sign";
import { SignUpErrorType } from "../types/error";
import SignInput from "./SignInput";
import { ERROR } from "../util/constants";
import { isEmailValidate, isPasswordValidate } from "../util/validate";

type PropsTypes = {
  isShow: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function SignUp({ isShow, handleClick }: PropsTypes) {
  const navigate = useNavigate();
  const [{ email, password, confirmPassword }, handleChange] =
    useForm<SignUpFormType>({
      email: "",
      password: "",
      confirmPassword: ""
    });

  const [isError, setError] = useError<SignUpErrorType>({
    email: false,
    password: false,
    confirmPassword: false,
    signUp: false
  });

  const isFormValidate = () => {
    return [
      setError("email", !isEmailValidate(email)),
      setError("password", !isPasswordValidate(password)),
      setError("confirmPassword", password !== confirmPassword)
    ];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(1, isError);
    if (!isFormValidate().includes(true)) {
      console.log(2, isError);
      signup({ email, password }).then(
        (res: AxiosResponse<any> | undefined): void => {
          if (res?.status === 200) {
            localStorage.setItem("token", res?.data.token);
            navigate("/todo");
          } else {
            setError("signUp", true);
          }
        }
      );
    }
    console.log(3, isError);
  };

  return (
    <SignUpContainer isShow={isShow}>
      <TitleWrapper>
        <p>회원가입</p>
      </TitleWrapper>
      <form onSubmit={handleSubmit}>
        <SignInput
          inputTitle="이메일"
          inputName="email"
          handleChange={handleChange}
          placeholder="이메일을 입력하세요"
          errorMessage={
            isError.email ? ERROR.EMAIL : isError.signUp ? ERROR.SIGN_UP : ""
          }
        />
        <SignInput
          inputTitle="비밀번호"
          inputName="password"
          handleChange={handleChange}
          placeholder="비밀번호를 입력하세요"
          errorMessage={
            isError.password
              ? ERROR.PASSWORD
              : isError.confirmPassword
              ? ERROR.PASSWORD_MATH
              : ""
          }
        />
        <SignInput
          inputTitle="비밀번호 확인"
          inputName="confirmPassword"
          handleChange={handleChange}
          placeholder="비밀번호를 한번더 입력하세요"
          errorMessage={
            isError.password
              ? ERROR.PASSWORD
              : isError.confirmPassword
              ? ERROR.PASSWORD_MATH
              : ""
          }
        />
        <ButtonWrapper>
          <button onClick={(e) => handleClick(e)} data-route="home">
            뒤로
          </button>
          <button type="submit">회원가입 하기</button>
        </ButtonWrapper>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div<{ isShow: string }>`
  margin: 0 auto;
  display: ${({ isShow }) => (isShow === "sign-up" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 350px;
  border: 2px solid #1e90ff;
  border-radius: 20px;
`;

const TitleWrapper = styled.div`
  color: #1e90ff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  button {
    width: 150px;
    height: 36px;
    background-color: #1e90ff;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 0;
  }
  button:disabled {
    background-color: #dcdcdc;
    color: #a9a9a9;
  }
`;
