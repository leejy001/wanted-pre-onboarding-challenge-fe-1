import React from "react";
import styled from "styled-components";

interface PropsType {
  inputTitle: string;
  inputName: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  errorMessage: string;
}

function SignInput({
  inputTitle,
  inputName,
  handleChange,
  placeholder,
  errorMessage
}: PropsType) {
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-top: 15px;
`;

const InputTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

const InputBody = styled.div<{ isErrorMessage: string }>`
  input {
    border: 2px solid
      ${({ isErrorMessage }) => (isErrorMessage === "" ? "#1e90ff" : "red")};
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 600;
  }
  p {
    width: 200px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 12px;
    font-weight: 600;
    color: red;
  }
`;
