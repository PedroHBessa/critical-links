import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

interface IModalProps {
  children: JSX.Element;
  show: boolean;
  onCloseButton?: () => void;
}

const Modal: React.FC<IModalProps> = ({ show, children }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <SModal show={show}>
      <SModalWrapper>{children}</SModalWrapper>
    </SModal>,
    document.body
  );
};

export default Modal;

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

const SModal = styled.div<{show: boolean}>`
    background-color: #00000094;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    opacity: 0;
    opacity: ${props => props.show ? 1 : 0};
    display: ${props => props.show ? 'block' : 'none'};
    animation: ${fadeIn} 0.5s;
`;

const SModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
