import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-top: 15px;
`;

export const InputTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

export const InputBody = styled.div<{ isErrorMessage: string }>`
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
