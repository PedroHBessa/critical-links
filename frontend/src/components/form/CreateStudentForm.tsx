import React, { useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import SelectInputField from "./SelectInputField";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";
import axios from "../../services/axios";
import toast from "react-hot-toast";
import { successFeedback, errorFeedback } from "../../utils/functions/feedback";

export interface ICreateStudentForm {}

const CreateStudentForm: React.FC<ICreateStudentForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createStudents, loading } = useContext(ModalContext);

  const createStudent = async (data: any) => {
    try {
      await axios.post("/students", data);
      loading.setLoading(true);
      createStudents.toggleCreateStudentModal(false);
      successFeedback("Student created successfully");
    } catch (error: any) {
      errorFeedback(`something went wrong: ${error.message}`);
      loading.setLoading(false);
    }
  };

  return (
    <SCreateStudentForm onSubmit={handleSubmit((data) => createStudent(data))}>
      <InputField
        inputRef={{
          ...register("first_name", { required: "This field is required" }),
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
          ...register("last_name", { required: "This field is required" }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="last_name" as="p" />}
        placeholder="Last Name"
      />
      <InputField
        inputRef={{
          ...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email",
            },
          }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="email" as="p" />}
        placeholder="Email"
      />
      <InputField
        inputRef={{
          ...register("student_id", {
            required: "This field is required",
            pattern: {
              value: /^[0-9]{1,6}$/,
              message: "Should have up to 6 digits (only numbers)",
            },
          }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="student_id" as="p" />}
        placeholder="Student ID"
      />
      <SelectInputField
        inputRef={{
          ...register("class_name"),
        }}
        errorMessage={<ErrorMessage errors={errors} name="class_name" as="p" />}
        placeholder="Class Name"
      />

      <SButtonWrapper>
        <CancelButton
          closeModal={createStudents.toggleCreateStudentModal}
          text={"Cancel"}
        />
        <FormButton text={"Create"} type={"submit"} />
      </SButtonWrapper>
    </SCreateStudentForm>
  );
};

export default CreateStudentForm;

const SCreateStudentForm = styled.form`
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-size: 13px;
    color: #ff0000;
  }
  & .select-label {
    position: relative;
    top: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

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
