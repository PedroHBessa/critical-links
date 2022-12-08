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
import { errorFeedback, successFeedback } from "../../utils/functions/feedback";

export interface IEditStudentForm {}

const EditStudentForm: React.FC<IEditStudentForm> = () => {
  const [data, setData] = useState();
  const { editStudent, loading } = useContext(ModalContext);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(
          `/students/${editStudent.editStudentId}`
        );
        setData(response.data);
      } catch (error: any) {
        errorFeedback(`something went wrong: ${error.message}`);
      }
     
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
    
    try {
      
      axios.patch(`/students/${editStudent.editStudentId}`, data);
      loading.setLoading(true)
      editStudent.toggleEditStudentModal(false);
      successFeedback("Student updated successfully")
    } catch (error: any) {
      errorFeedback(`something went wrong: ${error.message}`);
      loading.setLoading(false)
    }
   
  };

  return (
    <SEditStudentForm onSubmit={handleSubmit((data) => updateStudent(data))}>
      <InputField
        inputRef={{
          ...register("first_name", { required: "This field is required." }),
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
          ...register("last_name", { required: "This field is required." }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="last_name" as="p" />}
        placeholder="last_name"
      />
      <InputField
        inputRef={{
          ...register("email", {
            required: "This field is required.",
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
            required: "This field is required.",
            pattern: {
              value: /^[0-9]{6,6}$/,
              message: "Should have 6 digits (only numbers)",
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
          closeModal={editStudent.toggleEditStudentModal}
          text={"Cancel"}
        />
        <FormButton text={"Edit"} type={"submit"} />
      </SButtonWrapper>
    </SEditStudentForm>
  );
};

export default EditStudentForm;

const SEditStudentForm = styled.form`
 & p {
    font-family: "Roboto";
    font-style: normal;
    font-size: 13px;
    color: #ff0000;
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
