import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

type Size = "sm" | "reg";

export interface IStudentActions {
  size: Size;
  openModal: (arg: boolean) => void
}

const StudentActions: React.FC<IStudentActions> = ({ size, openModal }) => {
  const ctx = useContext(ModalContext);
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
          ctx.deleteStudentConfirmation.setDeleteStudentConfirmationModal(true);
        }}
      >
        <img src={require(`../../assets/icons/delete-icon-${size}.png`)} />
      </span>
    </SStudentActions>
  );
};

export default StudentActions;

const SStudentActions = styled.div<{ size: string }>`
  display: flex;
  & {
    span {
      margin: ${(props) => (props.size === "reg" ? "0 7.5px" : "0 -8px")};
      cursor: pointer;
    }
  }
`;
