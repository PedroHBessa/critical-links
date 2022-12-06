import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

type Size = "sm" | "reg";

export interface IStudentActions {
  size: Size;
  openModal: (arg: boolean) => void;
  deleteModal: (arg: boolean) => void;
  id: string;
}

const StudentActions: React.FC<IStudentActions> = ({
  size,
  openModal,
  deleteModal,
  id,
}) => {
  const { deleteStudentConfirmation } = useContext(ModalContext);
  const openModalAndPassId = () => {
    deleteModal(true);
    deleteStudentConfirmation.setDeleteStudentId(id);
  };
  return (
    <SStudentActions size={size}>
      <span
        id="edit"
        onClick={() => {
          openModal(true);
        }}
      >
        <img src={require(`../../assets/icons/edit-icon-${size}.png`)} />
      </span>
      <span
        id="delete"
        onClick={() => {
          openModalAndPassId();
        }}
      >
        <img
          width={21}
          height={26}
          src={require(`../../assets/icons/delete-icon-${size}.png`)}
        />
      </span>
    </SStudentActions>
  );
};

export default StudentActions;

const SStudentActions = styled.div<{ size: string }>`
  display: flex;
  & {
    span {
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
  & #edit {
    border-radius: 50px;
    padding: 10px;
    align-items: center;
    &:hover {
      background-color: #0000ff22;
    }
  }
  & #delete {
    border-radius: 50px;
    padding: 12px;
    align-items: center;
    &:hover {
      background-color: #ff000021;
    }
  }
`;
