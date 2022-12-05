import React from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup";
import InputField from "../form/InputField";
import FormModal from "../modal/FormModal";
import ManageClassModal from "../modal/ManageClassModal";
import WarningModal from "../modal/WarningModal";
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
          <Actions size="reg"/>
        </>
      </StudentCard>
      <FormModal title="Create Student"/>
      <WarningModal title="Are you sure you want to delete?" />
      <ManageClassModal title="Manage Classes" />
    </SMainContent>
  );
}

export default MainLayout;

const SMainContent = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
