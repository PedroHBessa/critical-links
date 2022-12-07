import { StringifyOptions } from "querystring";
import React from "react";
import styled from "styled-components";

export interface ITextContent {
  fullname: string | undefined;
  email: String | undefined;
  id: string;
}

const TextContent: React.FC<ITextContent> = ({ fullname, email, id }) => {
  return (
    <STextContent>
      <div id="fullname">{fullname}</div>
      <div id="email">{email}</div>
      <div id="id">{`ID: ${id}`}</div>
    </STextContent>
  );
};

export default TextContent;

const STextContent = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-size: 18px;
  line-height: 30px;

  text-align: left;
  & #fullname {
    display: inline;
    font-weight: 700;
    color: #272727;
  }
  & #email {
    font-weight: 300;

    color: #272727;
  }
  & #id {
    font-weight: 200;

    color: #9a9a9a;
  }
`;
