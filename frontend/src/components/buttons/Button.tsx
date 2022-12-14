import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

export interface IButton {
  text: string;
  type: number;
}

const Button: React.FC<IButton> = ({ text, type }) => {
  const ctx = useContext(ModalContext);

  return (
    <SButton
      data-testid="button"
      onClick={() => {
        if (type === 0)
          return ctx.createStudents.toggleCreateStudentModal(true);
        if (type === 1) return ctx.createClasses.toggleCreateClassModal(true);
        if (type === 2) return ctx.manageClass.toggleManageClassModal(true);
      }}
    >
      {text}
    </SButton>
  );
};

export default Button;

const SButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  width: 170px;
  padding: 14px 0;
  border: 0;
  background-color: #4e87f8;
  border-radius: 8px;
  margin: 0 6.5px;
  cursor: pointer;
  &:hover {
    background-color: #4e87f8d0;
  }
`;
