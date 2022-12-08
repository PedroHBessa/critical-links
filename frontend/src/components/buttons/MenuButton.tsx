import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { successFeedback } from "../../utils/functions/feedback";


export interface IMenuButton {
  text: string;
}

const MenuButton: React.FC<IMenuButton> = ({ text }) => {
    const ctx = useContext(AuthContext);
    const logout = () => {
        ctx.logout()
        successFeedback("user logged out successfully", false);
    }
  return (
    <SMenuButton onClick={()=>{logout()}} data-testid="MenuButton">
       {text}
    </SMenuButton>
  );
};

export default MenuButton;

const SMenuButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  width: 100px;
  padding: 5px 0;
  border: 0;
  background-color: transparent;
  border-radius: 8px;
  margin: 10px 40px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${(props) => props.theme.fn.media({  to: "sm" })} {
    margin: 10px 20px;
    }
  &:hover{
    background-color: #ffffff4b;
  }
`;
