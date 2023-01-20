import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 0;
  background-color: #0074e4;
  box-shadow: 5px 2px 2px rgba(0, 116, 228, 0.5);
  -moz-transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #65b3ff;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;
