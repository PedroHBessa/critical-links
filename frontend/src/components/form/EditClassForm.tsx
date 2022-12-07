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

export interface IEditClassForm {}

const EditClassForm: React.FC<IEditClassForm> = () => {
  const [data, setData] = useState();
  const {editClass} = useContext(ModalContext)

  useEffect(() => {
    const getClass = async () => {
      const response = await axios.get(
        `/classes/${editClass.editClassId}`
      );
      setData(response.data);
    };
    getClass();
  }, []);

  useEffect(() => {
    reset(data);
  }, [data]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: data,
  });

  const updateClass = (data: any) => {
    axios.patch(`/classes/${editClass.editClassId}`, data);
    editClass.toggleEditClassModal(false);
    window.location.reload();
  };
  
  return (
    <SEditClassForm onSubmit={handleSubmit((data) => updateClass(data))}>
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
        <CancelButton closeModal={editClass.toggleEditClassModal} text={"Cancel"} />
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
