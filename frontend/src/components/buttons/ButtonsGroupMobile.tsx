import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import MenuMobile from "../menus/MenuMobile";
import Button from "./Button";
import { BUTTONS_PRESET } from "./presets/buttons";

export interface IButtonsGroupMobile {}

const ButtonsGroupMobile: React.FC<IButtonsGroupMobile> = () => {
  const ctx = useContext(ModalContext);
  return (
    <SButtonsGroupMobile data-testid="btns-group-mobile">
      <img
        onClick={() => {
          ctx.menuMobile.setMenuMobile(true);
        }}
        src={require("../../assets/icons/mb-icon.png")}
      />
      <MenuMobile isShow={ctx.menuMobile.menuMobile} />
    </SButtonsGroupMobile>
  );
};

export default ButtonsGroupMobile;

const SButtonsGroupMobile = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  & img {
    position: relative;
    padding-top: 10px;
  }
  ${(props) => props.theme.fn.media({ to: "lg" })} {
    display: block;
  }
  ${(props) => props.theme.fn.media({ to: "md" })} {
    margin: 0 20px;
  }
`;
