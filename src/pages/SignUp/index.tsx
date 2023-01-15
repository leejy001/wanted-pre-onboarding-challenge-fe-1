import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "api/auth";
import useError from "hooks/useError";
import useForm from "hooks/useForm";
import { SignSuccessType, SignUpFormType } from "types/sign";
import { SignUpErrorType } from "types/error";
import SignInput from "components/input/SignInput";
import { ERROR } from "util/constants";
import { isEmailValidate, isPasswordValidate } from "util/validate";
import { SignUpContainer, Title, ButtonWrapper } from "./style";

function SignUp() {
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
        (res: { status: number; data: SignSuccessType } | undefined): void => {
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
    <SignUpContainer>
      <Title>회원가입</Title>
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
          <button onClick={() => navigate(-1)} data-route="home">
            뒤로
          </button>
          <button type="submit">회원가입 하기</button>
        </ButtonWrapper>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
