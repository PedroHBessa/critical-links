import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import CancelButton from "../buttons/CancelButton";
import ClassList from "./ClassList";
import Modal from "../modal/Modal";
import ModalButton from "../modal/ModalButton";

export interface IManageClass {
}

const ManageClass: React.FC<IManageClass> = ({ }) => {
  const { manageClass } = useContext(ModalContext);
  return (
    <>
        <ClassList />
        <SButtonWrapper>
          <CancelButton
            closeModal={manageClass.setManageClassModal}
            text={"Close"}
          />
        </SButtonWrapper>
        </>
  );
};

export default ManageClass;

const SManageClassModal = styled.div`
  width: 284px;
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

const STitleModal = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
