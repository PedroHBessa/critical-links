import React from "react";
import styled from "styled-components";
import Actions from "../student/Actions";

export interface IClass {}

const Class: React.FC<IClass> = ({}) => {
  return (
    <SClass>
      <span>Classname</span>
      <Actions size="sm" />
    </SClass>
  );
};

export default Class;

const SClass = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    padding: 16px;
  }

  &:nth-child(even) {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #c2c9d1;
  }

  & img {
    width: 19px;
    height: 19px;
  }
`;
