import React from "react";
import styled from "styled-components";

export interface IInputField {
    placeholder: string
}

const InputField: React.FC<IInputField> = ({placeholder}) => {
  return (
    <SInputField>
      <input type="text" placeholder={placeholder} />
    </SInputField>
  );
};

export default InputField;

const SInputField = styled.div`
  & input {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
    border: 0;
    outline: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    background-color: transparent;
    margin-bottom: 44px;
    &:focus {
      outline: none !important;
    }
  }
`;
