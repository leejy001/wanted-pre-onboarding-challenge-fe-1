import styled from "styled-components";

export const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #1e90ff;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  p {
    font-size: 18px;
    font-weight: 600;
  }
  input[type="text"] {
    font-size: 16px;
    padding: 5px;
    border: 1px solid #1e90ff;
  }
  textarea {
    font-size: 16px;
    padding: 5px;
    height: 100px;
    border: 1px solid #1e90ff;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 10px auto 0px;
`;
