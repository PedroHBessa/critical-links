import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import FormButton from "../form/FormButton";
import SignupForm from "../form/SignupForm";

export interface ISignup {
}

const Signup: React.FC<ISignup> = ({ }) => {

  return (
    <SSignup data-testid="Signup">
       <SignupForm />
    </SSignup>
  );
};

export default Signup;

const SSignup = styled.div`
   

`;
