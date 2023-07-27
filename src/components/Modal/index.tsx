import React from "react";
import StyledModal from "./style";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledModal>
        <div>{children}</div>
      </StyledModal>
    </>
  );
};

export default Modal;
