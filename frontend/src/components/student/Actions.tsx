import React from "react";
import styled from "styled-components";

export interface IActions {
  children: JSX.Element;
}

const Actions: React.FC<IActions> = ({ children }) => {
  return <SActions>{children}</SActions>;
};

export default Actions;

const SActions = styled.button`
  width: 425px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
