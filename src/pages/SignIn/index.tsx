import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/common/useForm";
import useError from "hooks/common/useError";
import useSignInMutation from "hooks/sign/useSignInMutation";
import { SignInFormType } from "types/sign";
import { SignInErrorType } from "types/error";
import { isEmailValidate, isPasswordValidate } from "util/validate";
import SignInput from "components/input/SignInput";
import { ERROR } from "util/constants";
import { SignInContianer, Title, ButtonWrapper } from "./style";
import DefaultButton from "components/common/Button";

function SignIn() {
  const navigate = useNavigate();
  const { mutate, error } = useSignInMutation();
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
    if (!isFormValidate().includes(true)) mutate({ email, password });
  };

  useEffect(() => {
    if (error) setError("signIn", true);
  }, [error]);

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
          <DefaultButton
            name="뒤로"
            className="primary"
            width={130}
            height={40}
            onClick={() => navigate(-1)}
          />
          <DefaultButton
            type="submit"
            name="로그인"
            className="primary"
            width={130}
            height={40}
          />
        </ButtonWrapper>
      </form>
    </SignInContianer>
  );
}

export default SignIn;
