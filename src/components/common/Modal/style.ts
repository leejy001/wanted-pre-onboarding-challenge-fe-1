import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 400px;
  background-color: white;
  border: 2px solid #1e90ff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  color: #1e90ff;
`;
