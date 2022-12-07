import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../services/axios";
import Class from "./Class";

export interface IClassListProps {}

export interface IClassModel {
  name: string
  year: string
  _id: string
}

export interface IClassModelList extends Array<IClassModel>{}

const ClassList: React.FC<IClassListProps> = ({}) => {
  const [classes, setClasses] = useState<IClassModelList | undefined>();
  useEffect(() => {
    const getClasses = async () => {
      const response = await axios.get("/classes");
      setClasses(response.data);
    };
    getClasses();
  }, []);
  return (
    <SClassList>
      <span className="title">Class name</span>
      {classes && classes.map((e, i) => {
        return <Class key={i} name={e.name} id={e._id} />
      })}
    </SClassList>
  );
};

export default ClassList;

const SClassList = styled.div`
& .title{
  display: block;
  margin-bottom: 3px;
}
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
