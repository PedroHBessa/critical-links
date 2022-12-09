import React, { useContext } from "react";
import styled from "styled-components";

export interface ICloseButton {}

const CloseButton: React.FC<ICloseButton> = ({}) => {
  return (
    <SCloseButton>
      <img src={require("../../assets/icons/close-btn.png")} />
    </SCloseButton>
  );
};

export default CloseButton;

const SCloseButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
