import React from "react";
import styled, { keyframes } from "styled-components";

export interface ILoading {}

const Loading: React.FC<ILoading> = () => {
  return (
    <SLoadingWrapper data-testid="loading">
      <SLoading className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SLoading>
    </SLoadingWrapper>
  );
};

export default Loading;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const SLoadingWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #000000d1;
z-index: 99;
`

const SLoading = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  z-index: 199;
  & {
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #9d0000;
      border-radius: 50%;
      animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
