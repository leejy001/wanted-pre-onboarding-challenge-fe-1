import React, { PropsWithChildren } from "react";
import { BasicModalType } from "../../../types/modal";
import { ModalContainer, CloseButton } from "./style";

function Modal({
  isClose,
  setToggle,
  children
}: PropsWithChildren<BasicModalType>) {
  return (
    <ModalContainer>
      {isClose && <CloseButton onClick={() => setToggle(false)}>X</CloseButton>}
      {children}
    </ModalContainer>
  );
}

export default Modal;
