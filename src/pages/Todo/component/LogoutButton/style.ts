import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 70px;
  -moz-transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  p {
    font-size: 14px;
    font-weight: 700;
    color: #1e90ff;
  }
  img {
    width: 28px;
  }
  &:hover {
    right: 0;
  }
`;
