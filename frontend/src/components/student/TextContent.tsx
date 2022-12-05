import React from "react";
import styled from "styled-components";

export interface ITextContent {
}

const TextContent: React.FC<ITextContent> = () => {
  return <STextContent>

  </STextContent>;
};

export default TextContent;

const STextContent = styled.div`
  width: 425px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
