import React from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup"

function MainLayout() {
  return (
    <SMainContent>
      <div>Student Manager</div>
      <ButtonsGroup />
    </SMainContent>
  );
}

export default MainLayout;

const SMainContent = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
