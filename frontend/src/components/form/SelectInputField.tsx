import React from "react";
import styled from "styled-components";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface ISelectInputField {
  placeholder: string;
  inputRef: Partial<UseFormRegister<FieldValues>>;
  errorMessage: JSX.Element;
}

const SelectInputField: React.FC<ISelectInputField> = ({
  placeholder,
  inputRef,
  errorMessage,
}) => {
  return (
    <>
      <SSelectInputField {...inputRef} placeholder={placeholder} >
        <option value="" >Class Name</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        {errorMessage}
      </SSelectInputField>
     
    </>
  );
};

export default SelectInputField;

const SSelectInputField = styled.select`
  width: 100%;
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
  margin: 44px 0 5px 0;
  &:focus {
    outline: none !important;
  }
`;
