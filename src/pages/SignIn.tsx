import React from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import styled from "styled-components";
import { signin } from "../api/auth";
import useForm from "../hooks/useForm";
import useError from "../hooks/useError";
import { SignInFormType } from "../types/sign";
import { SignInErrorType } from "../types/error";
import { isEmailValidate, isPasswordValidate } from "../util/validate";
import SignInput from "../components/SignInput";
import { ERROR } from "../util/constants";

function SignIn() {
  const navigate = useNavigate();
  const [{ email, password }, handleChange] = useForm<SignInFormType>({
    email: "",
    password: ""
  });

  const [isError, setError] = useError<SignInErrorType>({
    email: false,
    password: false,
    signIn: false
  });

  const isFormValidate = () => {
    return [
      setError("email", !isEmailValidate(email)),
      setError("password", !isPasswordValidate(password))
    ];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isFormValidate().includes(true)) {
      signin({ email, password }).then(
        (res: AxiosResponse<any> | undefined): void => {
          if (res?.status === 200) {
            localStorage.setItem("token", res?.data.token);
            navigate("/todo");
          } else {
            setError("signIn", true);
          }
        }
      );
    }
  };

  return (
    <SignInContianer>
      <TitleWrapper>로그인</TitleWrapper>
      <form onSubmit={handleSubmit}>
        <SignInput
          inputTitle="이메일"
          inputName="email"
          handleChange={handleChange}
          placeholder="이메일을 입력하세요"
          errorMessage={
            isError.email ? ERROR.EMAIL : isError.signIn ? ERROR.SIGN_IN : ""
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
              : isError.signIn
              ? ERROR.SIGN_IN
              : ""
          }
        />
        <ButtonWrapper>
          <button onClick={() => navigate(-1)}>뒤로</button>
          <button type="submit">로그인 하기</button>
        </ButtonWrapper>
      </form>
    </SignInContianer>
  );
}

export default SignIn;

const SignInContianer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
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
    width: 130px;
    height: 36px;
    background-color: #1e90ff;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
`;
