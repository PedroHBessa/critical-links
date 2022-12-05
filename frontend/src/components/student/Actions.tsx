import React from "react";
import styled from "styled-components";

export interface IActions {
}

const Actions: React.FC<IActions> = ({}) => {
  return <SActions>
    <span id="edit">
    <img src={require('../../assets/edit-icon.png')} />
    </span>
    <span id="delete">
    <img src={require('../../assets/delete-icon.png')} />
    </span>
  </SActions>;
};

export default Actions;

const SActions = styled.div`
&{
    span{
        margin: 0 7.5px;
        cursor: pointer;
    }
}
`;
