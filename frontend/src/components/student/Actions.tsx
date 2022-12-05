import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styled from "styled-components";

type Size = 'sm' | 'reg'

export interface IActions {
  size: Size
}

const Actions: React.FC<IActions> = ({size}) => {
  return <SActions size={size}>
    <span id="edit">
    <img src={require(`../../assets/edit-icon-${size}.png`)} />
    </span>
    <span id="delete">
    <img src={require(`../../assets/delete-icon-${size}.png`)} />
    </span>
  </SActions>;
};

export default Actions;

const SActions = styled.div<{size: string}>`
display: flex;
&{
    span{
      margin: ${props => props.size === 'reg' ? '0 7.5px' : '0 -8px'};
        cursor: pointer;
    }
}
`;
