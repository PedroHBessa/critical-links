import React from "react";
import styled from "styled-components";

export interface IFormButton {
  text: string
  type: string
}

const FormButton: React.FC<IFormButton> = ({ text, type }) => {
  return (
      <SFormButton type={type} value={text} />
  );
};

export default FormButton;

const SFormButton = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #4e87f8;
  padding: 8px 16px;
  margin: 8px 8px 0 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover{
    background-color: #0000ff22;
  }
`;

