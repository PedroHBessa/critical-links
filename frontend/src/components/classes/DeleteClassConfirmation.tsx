import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import axios from "../../services/axios";

export interface IDeleteClassConfirmation {
  title: string;
}

const DeleteClassConfirmation: React.FC<IDeleteClassConfirmation> = ({
  title,
}) => {
  const { deleteClassConfirmation } = useContext(ModalContext);

  const deleteClass = async (id: string) => {
    await axios.delete(`classes/${id}`);
    deleteClassConfirmation.toggleDeleteClassConfirmationModal(false);
    window.location.reload();
  };
  return (
    <>
      <div className="modal-title">{title}</div>
      <SButtonWrapper>
        <SModalButton
          onClick={() => {
            deleteClassConfirmation.toggleDeleteClassConfirmationModal(false);
          }}
        >
          No
        </SModalButton>
        <SModalButton
          onClick={() => {
            deleteClass(deleteClassConfirmation.deleteClassId);
          }}
        >
          Yes
        </SModalButton>
        ;
      </SButtonWrapper>
    </>
  );
};

export default DeleteClassConfirmation;

const SDeleteClassConfirmation = styled.div`
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
