import styled from "styled-components";

export const SignInContianer = styled.div`
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

export const Title = styled.p`
  color: #1e90ff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
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