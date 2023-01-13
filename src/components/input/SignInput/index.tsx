import React from "react";
import { SignInputType } from "../../../types/sign";
import { InputWrapper, InputTitle, InputBody } from "./style";

function SignInput({
  inputTitle,
  inputName,
  handleChange,
  placeholder,
  errorMessage
}: SignInputType) {
  return (
    <InputWrapper>
      <InputTitle>{inputTitle}</InputTitle>
      <InputBody isErrorMessage={errorMessage}>
        <input
          type={inputName === "email" ? "text" : "password"}
          name={inputName}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <p>{errorMessage}</p>
      </InputBody>
    </InputWrapper>
  );
}

export default SignInput;
