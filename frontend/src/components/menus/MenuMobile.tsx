import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import CloseButton from "../../utils/widgets/CloseButton";
import ButtonMobile from "../buttons/ButtonMobile";
import { BUTTONS_MOBILE_PRESET } from "../buttons/presets/buttons";

export interface IMenuMobile {
  isShow: boolean
}

const MenuMobile: React.FC<IMenuMobile> = ({isShow}) => {
  const ctx = useContext(ModalContext);
  return (
    <SMenuMobileWrapper isShow={isShow}>
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

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`
const fadeOut = keyframes`
  0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

const SMenuMobileWrapper = styled.div<{isShow: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 99;
  opacity: ${props => props.isShow ? 1 : 0};
    display: ${props => props.isShow ? 'block' : 'none'};
    animation: ${fadeIn} 0.5s;
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
