import styled from "styled-components";

export const ModalOutWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div<{ width?: number }>`
  position: absolute;
  width: ${({ width }) => width}px;
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
