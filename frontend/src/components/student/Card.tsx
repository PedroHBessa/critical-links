import React from "react";
import styled from "styled-components";

export interface ICard {
  children: JSX.Element;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <SCard>{children}</SCard>;
};

export default Card;

const SCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 35.5px 20px;
  width: 425px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
