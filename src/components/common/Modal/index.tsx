import React, { PropsWithChildren } from "react";
import { BasicModalType } from "types/modal";
import ImageButton from "../ImageButton";
import { ModalContainer, CloseButtonWrapper } from "./style";

function Modal({
  isClose,
  setToggle,
  children
}: PropsWithChildren<BasicModalType>) {
  return (
    <ModalContainer>
      {isClose && (
        <CloseButtonWrapper>
          <ImageButton
            onClick={() => setToggle(false)}
            width={36}
            height={36}
            imgSrc={`${process.env.PUBLIC_URL}/asset/close.png`}
          />
        </CloseButtonWrapper>
      )}
      {children}
    </ModalContainer>
  );
}

export default Modal;
