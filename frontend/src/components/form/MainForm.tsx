import React from "react";
import styled from "styled-components";
import InputField from "./InputField";

export interface IMainForm {}

const MainForm: React.FC<IMainForm> = () => {
  return (
    <SMainForm>
      <InputField placeholder="First Name"/>
      <InputField placeholder="First Name"/>
      <InputField placeholder="First Name"/>
      <InputField placeholder="First Name"/>
    </SMainForm>
  );
};

export default MainForm;

const SMainForm = styled.form`
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
