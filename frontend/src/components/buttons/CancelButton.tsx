import React from "react";
import styled from "styled-components";

export interface ICancelButton {
  closeModal: (arg: boolean) => void;
  text: string;
}

const CancelButton: React.FC<ICancelButton> = ({ closeModal, text }) => {
  return (
    <SCancelButton
      data-testid="cancel-btn"
      onClick={() => {
        closeModal(false);
      }}
      type={"reset"}
      value={text}
    />
  );
};

export default CancelButton;

const SCancelButton = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #4e87f8;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 8px 16px;
  margin: 8px 0 0 0;
  &:hover {
    background-color: #0000ff22;
  }
`;
