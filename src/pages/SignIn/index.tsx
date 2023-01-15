import React from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "api/auth";
import useForm from "hooks/useForm";
import useError from "hooks/useError";
import { SignInFormType, SignSuccessType } from "types/sign";
import { SignInErrorType } from "types/error";
import { isEmailValidate, isPasswordValidate } from "util/validate";
import SignInput from "components/input/SignInput";
import { ERROR } from "util/constants";
import { SignInContianer, Title, ButtonWrapper } from "./style";

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
        (res: { status: number; data: SignSuccessType } | undefined): void => {
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
      <Title>로그인</Title>
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
