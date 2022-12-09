import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import FormButton from "../form/FormButton";
import SigninForm from "../form/SigninForm";

export interface ISignin {}

const Signin: React.FC<ISignin> = ({}) => {
  return (
    <SSignin data-testid="Signin">
      <SigninForm />
    </SSignin>
  );
};

export default Signin;

const SSignin = styled.div``;
