import React from "react";
import styled from "styled-components";

export interface ICancelButton {
    closeModal: any
    text: string
}

const CancelButton: React.FC<ICancelButton> = ({closeModal, text}) => {
  return (
      <SCancelButton onClick={()=>{closeModal(false)}} type={"reset"} value={text} />
  );
};

export default CancelButton;

const SCancelButton = styled.input`
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

