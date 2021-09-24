import { useEffect } from "react";
import ReactDOM from "@hot-loader/react-dom";

import * as S from "./styled";

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body);

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const downHandler = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (onClose) onClose();
      }
    };

    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <Portal>
          <S.BackDrop onClick={onClose}>
            <S.Modal>{children}</S.Modal>
          </S.BackDrop>
        </Portal>
      )}
    </>
  );
};

export default Modal;
