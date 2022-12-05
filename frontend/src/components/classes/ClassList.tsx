import React from "react";
import styled from "styled-components";
import Class from "./Class";

export interface IClassList {}

const ClassList: React.FC<IClassList> = ({}) => {
  return (
    <SClassList>
      <span>Class name</span>
      <Class />
      <Class />
      <Class />
    </SClassList>
  );
};

export default ClassList;

const SClassList = styled.div`
  & span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 10px 16px;
    color: rgba(0, 0, 0, 0.5);
  }
  & img {
    width: 19px;
    height: 19px;
  }
`;
