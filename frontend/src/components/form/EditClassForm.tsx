import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import SelectInputField from "./SelectInputField";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";

export interface IEditClassForm {}

const EditClassForm: React.FC<IEditClassForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const {editStudent} = useContext(ModalContext)
  return (
    <SEditClassForm onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
        <CancelButton closeModal={editStudent.toggleEditStudentModalIsOpen} text={"Cancel"} />
        <FormButton text={"Edit"} type={"submit"} />
      </SButtonWrapper>
    </SEditClassForm>
  );
};

export default EditClassForm;

const SEditClassForm = styled.form``;

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
