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
  width: 459px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;
  background-color: #fff;

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
`;
