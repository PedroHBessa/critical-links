import React from "react";
import styled from "styled-components";

export interface IButton {
  text: string;
}

const Button: React.FC<IButton> = ({ text }) => {
  return <SButton>{text}</SButton>;
};

export default Button;

const SButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  width: 170px;
  padding: 14px 25px;
  border: 0;
  background-color: #4E87F8;
  border-radius: 8px;
  margin: 0 6.5px;
  cursor: pointer;
`;
