import React from "react";
import styled from "styled-components";

export interface IModalButton {
  text: string;
}

const ModalButton: React.FC<IModalButton> = ({ text }) => {
  return <SModalButton>{text}</SModalButton>;
};

export default ModalButton;

const SModalButton = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #4e87f8;
  padding: 8px;
  margin: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
