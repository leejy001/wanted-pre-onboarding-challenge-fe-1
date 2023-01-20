import React, { PropsWithChildren } from "react";
import { BasicModalType } from "types/modal";
import ImageButton from "../ImageButton";
import { ModalOutWrapper, ModalContainer, CloseButtonWrapper } from "./style";

function Modal({
  isClose,
  width,
  setToggle,
  children
}: PropsWithChildren<BasicModalType>) {
  return (
    <ModalOutWrapper>
      <ModalContainer width={width}>
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
    </ModalOutWrapper>
  );
}

Modal.defaultProps = {
  width: 400
};

export default Modal;
