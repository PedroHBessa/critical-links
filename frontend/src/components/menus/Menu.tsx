import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import MenuButton from "../buttons/MenuButton";

export interface IMenu {}

const Menu: React.FC<IMenu> = ({}) => {
  return (
    <SMenu>
      <Link to={"/"}>
        <img
          className="logo"
          width={300}
          src="https://www.critical-links.com/wp-content/uploads/2018/05/s2.png"
          alt="critical links logo"
        />
      </Link>
      <MenuButton text={"logout"} />
    </SMenu>
  );
};

export default Menu;

const SMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4e87f8;
  position: relative;
  left: 0;
  width: 100vw;
  & .logo {
    font-size: 24px;
    line-height: 48px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin: 0 40px;
    cursor: pointer;
    ${(props) => props.theme.fn.media({  to: "md" })} {
      display: none;
    }
  }
`;
