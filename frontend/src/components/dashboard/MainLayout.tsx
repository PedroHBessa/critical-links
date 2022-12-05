import React from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup"
import Avatar from "../student/Avatar";
import StudentCard from "../student/Card";

function MainLayout() {
  return (
    <SMainContent>
      <div>Student Manager</div>
      <ButtonsGroup />
      <StudentCard>
        <Avatar />
      </StudentCard>
    </SMainContent>
  );
}

export default MainLayout;

const SMainContent = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
