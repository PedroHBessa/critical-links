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

export interface IEditStudentForm {}

const EditStudentForm: React.FC<IEditStudentForm> = () => {
  const [data, setData] = useState();
  const { editStudent } = useContext(ModalContext);

  useEffect(() => {
    const getStudent = async () => {
      const response = await axios.get(
        `/students/${editStudent.editStudentId}`
      );
      setData(response.data);
    };
    getStudent();
  }, []);

  useEffect(() => {
    reset(data);
  }, [data]);
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: data,
  });

  const updateStudent = (data: any) => {
    axios.patch(`/students/${editStudent.editStudentId}`, data);
    editStudent.toggleEditStudentModal(false);
    window.location.reload();
  };

  return (
    <SEditStudentForm onSubmit={handleSubmit((data) => updateStudent(data))}>
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
        placeholder="last_name"
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
          ...register("class_name"),
        }}
        errorMessage={<ErrorMessage errors={errors} name="class_name" as="p" />}
        placeholder="Class Name"
      />

      <SButtonWrapper>
        <CancelButton
          closeModal={editStudent.toggleEditStudentModalIsOpen}
          text={"Cancel"}
        />
        <FormButton text={"Edit"} type={"submit"} />
      </SButtonWrapper>
    </SEditStudentForm>
  );
};

export default EditStudentForm;

const SEditStudentForm = styled.form``;

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
