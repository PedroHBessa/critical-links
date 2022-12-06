import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import SelectInputField from "./SelectInputField";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";

export interface ICreateStudentForm {}

const CreateStudentForm: React.FC<ICreateStudentForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const {createStudent} = useContext(ModalContext)
  return (
    <SCreateStudentForm onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <InputField
        inputRef={{
          ...register("firstName", { required: "This is required." }),
        }}
        errorMessage={
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="firstName"
            as="p"
          />
        }
        placeholder="First Name"
      />
      <InputField
        inputRef={{
          ...register("lastName", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="lastName" as="p" />}
        placeholder="Last Name"
      />
      <InputField
        inputRef={{
          ...register("email", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="email" as="p" />}
        placeholder="Email"
      />
      <InputField
        inputRef={{
          ...register("studentId", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="studentId" as="p" />}
        placeholder="Student ID"
      />
      <SelectInputField
        inputRef={{
          ...register("className", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="className" as="p" />}
        placeholder="Class Name"
      />

      <SButtonWrapper>
        <CancelButton closeModal={createStudent.setCreateStudentModal} text={"Cancel"} />
        <FormButton text={"Create"} type={"submit"} />
      </SButtonWrapper>
    </SCreateStudentForm>
  );
};

export default CreateStudentForm;

const SCreateStudentForm = styled.form``;

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
