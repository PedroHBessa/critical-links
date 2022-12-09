import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UseFormRegister, FieldValues } from "react-hook-form";
import axios from "../../services/axios";

export interface ISelectInputField {
  placeholder: string;
  inputRef: Partial<UseFormRegister<FieldValues>>;
  errorMessage: JSX.Element;
}

export interface IClassModel {
  name: string;
  year: string;
  _id: string;
}

export interface IClassModelList extends Array<IClassModel> {}

const SelectInputField: React.FC<ISelectInputField> = ({
  placeholder,
  inputRef,
  errorMessage,
}) => {
  const [classes, setClasses] = useState<IClassModelList>();
  useEffect(() => {
    const getClasses = async () => {
      const response = await axios.get("/classes");
      setClasses(response.data);
    };
    getClasses();
  }, []);
  return (
    <>
      <label className="select-label">Class</label>
      <SSelectInputField {...inputRef} placeholder={placeholder}>
        <option value=""></option>
        {classes &&
          classes.map((e, i) => {
            return (
              <option key={i} value={e._id}>
                {e.name}
              </option>
            );
          })}
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
