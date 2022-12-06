import React, { useState } from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup";
import FormModal from "../modal/FormModal";
import ManageClassModal from "../modal/ManageClassModal";
import WarningModal from "../modal/WarningModal";
import Actions from "../student/Actions";
import Avatar from "../student/Avatar";
import StudentCard from "../student/Card";
import TextContent from "../student/TextContent";
import { ModalContext } from "../../context/ModalContext";
import useModal from  '../modal/context/modals'

function MainLayout() {
  
  return (
    <ModalContext.Provider value={useModal()}>
      <SMainContent>
        <SHeader>
          <div className="title">Student Manager</div>
          <ButtonsGroup />
        </SHeader>

        <StudentCard>
          <>
            <Avatar />
            <TextContent
              fullname="Pedro Teixeira"
              email={"pedro@live.com"}
              id={"123456"}
            />
            <Actions size="reg" />
          </>
        </StudentCard>

        <FormModal title="Create Student" />
        <WarningModal title="Are you sure you want to delete?" />
        <ManageClassModal title="Manage Classes" />
      </SMainContent>
    </ModalContext.Provider>
  );
}

export default MainLayout;

const SMainContent = styled.main`
  background-color: #f5f5f5;
  height: 100%;
  min-height: 100vh;
  margin: 0 38px;

  & .title {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #5b5b5b;
  }
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 35px 0;
`;
