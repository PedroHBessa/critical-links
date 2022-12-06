import React, { useContext } from "react";
import styled from "styled-components";
import ModalButton from "../modal/ModalButton";
import { ModalContext } from "../../context/ModalContext";
import Modal from "../modal/Modal";

export interface IDeleteStudentConfirmation {
  title: string;
}

const DeleteStudentConfirmation: React.FC<IDeleteStudentConfirmation> = ({ title }) => {
  const { deleteConfirmation } = useContext(ModalContext);
  return (
    <>
      <div className="modal-title">{title}</div>
      <SButtonWrapper>
        <SModalButton
          onClick={() => {
            deleteConfirmation.setDeleteConfirmationModal(false);
          }}
        >
          No
        </SModalButton>
        <SModalButton>Yes</SModalButton>;
      </SButtonWrapper>
    </>
  );
};

export default DeleteStudentConfirmation;

const SDeleteStudentConfirmation = styled.div`

  & .modal-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
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
  cursor: pointer;
`;

const SModalButton = styled.span`
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
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover{
    background-color: #0000ff22;
  }
`;