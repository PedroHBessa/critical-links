import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BUTTONS_PRESET } from "./presets/buttons";

export interface IButtonsGroup {}

const ButtonsGroup: React.FC<IButtonsGroup> = () => {
  return (
    <SButtonsGroup>
      {BUTTONS_PRESET &&
        BUTTONS_PRESET.map((e) => {
          return <Button text={e.text} />;
        })}
    </SButtonsGroup>
  );
};

export default ButtonsGroup;

const SButtonsGroup = styled.div``;
