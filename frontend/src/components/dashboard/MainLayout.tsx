import React, { useState, useContext } from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup";
import ModalContent from "../modal/ModalContent";
import ManageClass from "../classes/ManageClass";
import DeleteStudentConfirmation from "../student/DeleteStudentConfirmation";
import StudentActions from "../student/StudentActions";
import Avatar from "../student/Avatar";
import StudentCard from "../student/Card";
import TextContent from "../student/TextContent";
import { ModalContext } from "../../context/ModalContext";
import useModal from "../modal/hooks/useModal";
import CreateStudentForm from "../form/CreateStudentForm";
import EditStudentForm from "../form/EditStudentForm";
import CreateClassForm from "../form/CreateClassForm";
import EditClassForm from "../form/EditClassForm";
import DeleteClassConfirmation from "../classes/DeleteClassConfirmation";

function MainLayout() {
  const ctx = useModal();
  return (
    <ModalContext.Provider value={ctx}>
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
            <StudentActions size="reg" deleteModal={ctx.deleteStudentConfirmation.setDeleteStudentConfirmationModal} openModal={ctx.editStudent.setEditStudentModal}/>
          </>
        </StudentCard>

        <ModalContent
          modal={ctx.editStudent.editStudentModal}
          isModalOpen={ctx.editStudent.setEditStudentModal}
          title="Edit Student"
          content={<EditStudentForm />}
        />
        <ModalContent
          modal={ctx.createStudent.createStudentModal}
          isModalOpen={ctx.createStudent.setCreateStudentModal}
          title="Create Student"
          content={<CreateStudentForm />}
        />
        <ModalContent
          modal={ctx.manageClass.manageClassModal}
          isModalOpen={ctx.manageClass.setManageClassModal}
          title="Manage Classes"
          content={<ManageClass />}
        />
        <ModalContent
          modal={ctx.createClass.createClassModal}
          isModalOpen={ctx.createClass.setCreateClassModal}
          title="Create Class"
          content={<CreateClassForm />}
        />
        <ModalContent
          modal={ctx.editClass.editClassModal}
          isModalOpen={ctx.editClass.setEditClassModal}
          title="Edit Class"
          content={<EditClassForm />}
        />
        <ModalContent
          modal={ctx.deleteStudentConfirmation.deleteStudentConfirmationModal}
          isModalOpen={ctx.deleteStudentConfirmation.setDeleteStudentConfirmationModal}
          title="Delete Student"
          content={<DeleteStudentConfirmation title="Are you sure you want to delete?" />}
        />
        <ModalContent
          modal={ctx.deleteClassConfirmation.deleteClassConfirmationModal}
          isModalOpen={ctx.deleteClassConfirmation.setDeleteClassConfirmationModal}
          title="Delete Class"
          content={<DeleteClassConfirmation title="Are you sure you want to delete?" />}
        />
       
        
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
