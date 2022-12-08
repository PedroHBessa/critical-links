import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton";
import CancelButton from "../buttons/CancelButton";
import axios from "../../services/axios";
import { errorFeedback, successFeedback } from "../../utils/functions/feedback";
import { ModalContext } from "../../context/ModalContext";
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "../../context/AuthContext";

export interface ISignupForm {}

const SignupForm: React.FC<ISignupForm> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const ctx = useContext(AuthContext);

  const createUser = async (data: any) => {
    try {
      const response = await axios.post("/auth/login", data);
      ctx.login(response);

      successFeedback("user logged successfully", false);
    } catch (error: any) {
      errorFeedback(`something went wrong: ${error.message}`);
    }
  };
  return (
    <SSignupForm onSubmit={handleSubmit((data) => createUser(data))}>
      <InputField
        inputRef={{
          ...register("username", { required: "This field is required." }),
        }}
        errorMessage={
          <ErrorMessage
            className="error-message"
            errors={errors}
            name="username"
            as="p"
          />
        }
        placeholder="username"
      />
      <InputField
        inputRef={{
          ...register("password", {
            required: "This field is required.",
            minLength: {
              value: 8,
              message: "Password too short, must have at least 8 characters",
            },
          }),
        }}
        type={"password"}
        errorMessage={<ErrorMessage errors={errors} name="password" as="p" />}
        placeholder="password"
      />

      <SButtonWrapper>
        <FormButton text={"Signin"} type={"submit"} />
      </SButtonWrapper>
    </SSignupForm>
  );
};

export default SignupForm;

const SSignupForm = styled.form`
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
