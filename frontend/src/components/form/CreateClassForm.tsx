import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import SelectInputField from "./SelectInputField";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";

export interface ICreateClassForm {}

const CreateClassForm: React.FC<ICreateClassForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const {createClass} = useContext(ModalContext)
  return (
    <SCreateClassForm onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <InputField
        inputRef={{
          ...register("name", { required: "This is required." }),
        }}
        errorMessage={
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="name"
            as="p"
          />
        }
        placeholder="Name"
      />
      <InputField
        inputRef={{
          ...register("year", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="year" as="p" />}
        placeholder="Year"
      />
      

      <SButtonWrapper>
        <CancelButton closeModal={createClass.toggleCreateClassModal} text={"Cancel"} />
        <FormButton text={"Create"} type={"submit"} />
      </SButtonWrapper>
    </SCreateClassForm>
  );
};

export default CreateClassForm;

const SCreateClassForm = styled.form``;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
  cursor: pointer;
`;
