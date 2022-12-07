import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BUTTONS_PRESET } from "./presets/buttons";

export interface IButtonsGroup {}

const ButtonsGroup: React.FC<IButtonsGroup> = () => {
  return (
    <SButtonsGroup>
      {BUTTONS_PRESET &&
        BUTTONS_PRESET.map((e, i) => {
          return <Button key={i} text={e.text} type={e.type} />;
        })}
    </SButtonsGroup>
  );
};

export default ButtonsGroup;

const SButtonsGroup = styled.div`
${props => props.theme.fn.media({to: 'lg'})}{
    display: none;
  }`
