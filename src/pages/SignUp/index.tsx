import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/common/useForm";
import useError from "hooks/common/useError";
import useSignUpMutation from "hooks/sign/useSignUpMutation";
import { SignUpFormType } from "types/sign";
import { SignUpErrorType } from "types/error";
import SignInput from "components/input/SignInput";
import { ERROR } from "util/constants";
import { isEmailValidate, isPasswordValidate } from "util/validate";
import { SignUpContainer, Title, ButtonWrapper } from "./style";

function SignUp() {
  const navigate = useNavigate();
  const { mutate, error } = useSignUpMutation();
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
    if (!isFormValidate().includes(true)) mutate({ email, password });
  };

  useEffect(() => {
    if (error) setError("signUp", true);
  }, [error]);

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
