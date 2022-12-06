import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface IModalProps {
  children: JSX.Element;
  show: boolean;
  onCloseButton?: () => void;
}

const Modal: React.FC<IModalProps> = ({ show, children }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <SModal>
      <SModalWrapper>{children}</SModalWrapper>
    </SModal>,
    document.body
  );
};

export default Modal;

const SModal = styled.div`
    background-color: #00000094;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
`;

const SModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
