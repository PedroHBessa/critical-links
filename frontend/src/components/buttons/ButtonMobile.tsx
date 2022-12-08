import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

export interface IButtonMobile {
  text: string;
  type: number;
}

const ButtonMobile: React.FC<IButtonMobile> = ({ text, type }) => {
  const ctx = useContext(ModalContext);
  const toggleModalMobile = () => {
    ctx.menuMobile.setMenuMobile(false)
    if (type === 0) return ctx.createStudents.toggleCreateStudentModal(true);
    if (type === 1) return ctx.createClasses.toggleCreateClassModal(true);
    if (type === 2) return ctx.manageClass.toggleManageClassModal(true);
  };
  return (
    <SButtonMobile
    data-testid='btn-mobile'
      onClick={() => {
        toggleModalMobile();
      }}
    >
      {text}
    </SButtonMobile>
  );
};

export default ButtonMobile;

const SButtonMobile = styled.div`
  display: block;
  width: 70%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #272727;
  background-color: #fff;
  padding: 14px 0;
  border-bottom: 1px solid #e6e6e6;
  margin: 0 6.5px;
  cursor: pointer;
`;
