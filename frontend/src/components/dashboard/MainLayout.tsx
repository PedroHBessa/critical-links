import React from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup";
import Actions from "../student/Actions";
import Avatar from "../student/Avatar";
import StudentCard from "../student/Card";
import TextContent from "../student/TextContent";

function MainLayout() {
  return (
    <SMainContent>
      <div>Student Manager</div>
      <ButtonsGroup />
      <StudentCard>
        <>
          <Avatar />
          <TextContent
            fullname="Pedro Teixeira"
            email={"pedro@live.com"}
            id={"123456"}
          />
          <Actions />
        </>
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
