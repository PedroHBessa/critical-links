import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

type Size = "sm" | "reg";

export interface IClassesActions {
  size: Size;
  openModal: (arg: boolean) => void;
  deleteModal: (arg: boolean) => void;
}

const ClassesActions: React.FC<IClassesActions> = ({
  size,
  openModal,
  deleteModal,
}) => {
  return (
    <SClassesActions size={size}>
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
          deleteModal(true);
        }}
      >
        <img src={require(`../../assets/icons/delete-icon-${size}.png`)} />
      </span>
    </SClassesActions>
  );
};

export default ClassesActions;

const SClassesActions = styled.div<{ size: string }>`
  display: flex;
  & {
    span {
      margin: ${(props) => (props.size === "reg" ? "0 7.5px" : "0 -8px")};
      cursor: pointer;
    }
  }
`;
