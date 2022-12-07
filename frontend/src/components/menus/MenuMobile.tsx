import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import CloseButton from "../../utils/widgets/CloseButton";
import ButtonMobile from "../buttons/ButtonMobile";
import { BUTTONS_MOBILE_PRESET } from "../buttons/presets/buttons";

export interface IMenuMobile {}

const MenuMobile: React.FC<IMenuMobile> = () => {
  const ctx = useContext(ModalContext);
  return (
    <SMenuMobileWrapper>
      <div className="close-btn"
        onClick={() => {
          ctx.menuMobile.setMenuMobile(false);
        }}
      >
        <CloseButton />
      </div>
      <SMenuMobile>
        {BUTTONS_MOBILE_PRESET &&
          BUTTONS_MOBILE_PRESET.map((e, i) => {
            return (
              <>
                <ButtonMobile key={i} text={e.text} type={e.type} />
              </>
            );
          })}
      </SMenuMobile>
    </SMenuMobileWrapper>
  );
};

export default MenuMobile;

const SMenuMobileWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 99;
  & .close-btn{
    position: absolute;
    right: 10px;
    padding: 12px;
  }
`;
const SMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
