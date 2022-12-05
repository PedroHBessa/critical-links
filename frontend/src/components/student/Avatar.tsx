import React from "react";
import styled from "styled-components";

export interface IAvatar {}

const Avatar: React.FC<IAvatar> = ({}) => {
  return (
    <SAvatar>
      <img src="/" />
    </SAvatar>
  );
};

export default Avatar;

const SAvatar = styled.span`
  & img {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background-color: grey;
  }
`;