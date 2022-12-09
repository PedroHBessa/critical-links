import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import CancelButton from "../buttons/CancelButton";
import { ModalContext } from "../../context/ModalContext";
import axios from "../../services/axios";
import { errorFeedback, successFeedback } from "../../utils/functions/feedback";

export interface ICreateClassForm {}

const CreateClassForm: React.FC<ICreateClassForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const { createClasses, loading } = useContext(ModalContext);

  const createClass = async (data: any) => {
    try {
      await axios.post("/classes", data);
      loading.setLoading(true);
      createClasses.toggleCreateClassModal(false);
      successFeedback("class created successfully");
    } catch (error: any) {
      errorFeedback(`something went wrong: ${error.message}`);
      loading.setLoading(false);
    }
  };
  return (
    <SCreateClassForm onSubmit={handleSubmit((data) => createClass(data))}>
      <InputField
        inputRef={{
          ...register("name", { required: "This field is required." }),
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
          ...register("year", {
            required: "This field is required.",
            pattern: {
              value: /^[0-9]{1,2}$/,
              message: "Should have up to 2 digits (only numbers)",
            },
          }),
        }}
        errorMessage={<ErrorMessage errors={errors} name="year" as="p" />}
        placeholder="Year"
      />

      <SButtonWrapper>
        <CancelButton
          closeModal={createClasses.toggleCreateClassModal}
          text={"Cancel"}
        />
        <FormButton text={"Create"} type={"submit"} />
      </SButtonWrapper>
    </SCreateClassForm>
  );
};

export default CreateClassForm;

const SCreateClassForm = styled.form`
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
