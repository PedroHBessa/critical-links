import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import SelectInputField from "./SelectInputField";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";

export interface ICreateStudentForm {}

const CreateStudentForm: React.FC<ICreateStudentForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createStudent } = useContext(ModalContext);

  const createStudents = (data: any) => {
    axios.post("/students", data);
    createStudent.toggleCreateStudentModal(false);
    window.location.reload();
  };

  return (
    <SCreateStudentForm onSubmit={handleSubmit((data) => createStudents(data))}>
      <InputField
        inputRef={{
          ...register("first_name", { required: "This is required." }),
        }}
        errorMessage={
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="first_name"
            as="p"
          />
        }
        placeholder="First Name"
      />
      <InputField
        inputRef={{
          ...register("last_name", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="last_name" as="p" />}
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
          ...register("student_id", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="student_id" as="p" />}
        placeholder="Student ID"
      />
      <SelectInputField
        inputRef={{
          ...register("class_name", { required: "This is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="class_name" as="p" />}
        placeholder="Class Name"
      />

      <SButtonWrapper>
        <CancelButton
          closeModal={createStudent.toggleCreateStudentModal}
          text={"Cancel"}
        />
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
