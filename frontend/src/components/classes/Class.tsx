import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import ClassActions from "../classes/ClassesActions";

export interface IClass {}

const Class: React.FC<IClass> = ({}) => {
  const ctx = useContext(ModalContext);
  return (
    <SClass>
      <span>Classname</span>
      <ClassActions
        size="sm"
        openModal={ctx.editClass.toggleEditClassModal}
        deleteModal={
          ctx.deleteClassConfirmation.toggleDeleteClassConfirmationModal
        }
      />
    </SClass>
  );
};

export default Class;

const SClass = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    padding: 16px;
  }

  &:nth-child(even) {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #c2c9d1;
  }

  & img {
    width: 19px;
    height: 19px;
  }
`;
