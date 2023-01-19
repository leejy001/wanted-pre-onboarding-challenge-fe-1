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

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 36px;
  height: 36px;
`;
