import React from "react";
import { Gap } from "components";
import { Wrapper, Overlay, Button } from "./Modal";

const Modal = ({ title, open, onClose, children }) => {
  if (!open) return null;

  return (
    <>
      <Overlay />
      <Wrapper>
        <h1>{title}</h1>
        <Gap height={30} />
        {children}
        <Gap height={50} />
        <Button type="submit">Save</Button>
        <Button onClick={onClose} secondary>
          Close
        </Button>
      </Wrapper>
    </>
  );
};

export default Modal;
