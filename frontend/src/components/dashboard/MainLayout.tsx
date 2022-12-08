import React, { useState, useContext } from "react";
import styled from "styled-components";
import ButtonsGroup from "../../components/buttons/ButtonsGroup";
import ModalContent from "../modal/ModalContent";
import ManageClass from "../classes/ManageClass";
import DeleteStudentConfirmation from "../student/DeleteStudentConfirmation";
import { ModalContext } from "../../context/ModalContext";
import useModal from "../modal/hooks/useModal";
import CreateStudentForm from "../form/CreateStudentForm";
import EditStudentForm from "../form/EditStudentForm";
import CreateClassForm from "../form/CreateClassForm";
import EditClassForm from "../form/EditClassForm";
import DeleteClassConfirmation from "../classes/DeleteClassConfirmation";
import StudentSection from "../student/StudentSection";
import { Toaster } from 'react-hot-toast';
import Loading from "../loading/Loading";
import ButtonsGroupMobile from "../buttons/ButtonsGroupMobile";

function MainLayout() {
  const ctx = useModal();
  return (
    <ModalContext.Provider value={ctx}>
      <SMainContent>
        <Toaster />
        <SHeader>
          <div data-testid="main-title" className="title">Student Manager</div>
          <ButtonsGroup />
          <ButtonsGroupMobile />
        </SHeader>
        
        <StudentSection />

        <ModalContent
          modal={ctx.editStudent.editStudentModalIsOpen}
          isModalOpen={ctx.editStudent.toggleEditStudentModal}
          title="Edit Student"
          content={<EditStudentForm />}
        />
        <ModalContent
          modal={ctx.createStudents.createStudentModalIsOpen}
          isModalOpen={ctx.createStudents.toggleCreateStudentModal}
          title="Create Student"
          content={<CreateStudentForm />}
        />
        <ModalContent
          modal={ctx.manageClass.manageClassModalIsOpen}
          isModalOpen={ctx.manageClass.toggleManageClassModal}
          title="Manage Classes"
          content={<ManageClass />}
        />
        <ModalContent
          modal={ctx.createClasses.createClassModalIsOpen}
          isModalOpen={ctx.createClasses.toggleCreateClassModal}
          title="Create Class"
          content={<CreateClassForm />}
        />
        <ModalContent
          modal={ctx.editClass.editClassModalIsOpen}
          isModalOpen={ctx.editClass.toggleEditClassModal}
          title="Edit Class"
          content={<EditClassForm />}
        />
        <ModalContent
          modal={ctx.deleteStudentConfirmation.deleteStudentConfirmationModalIsOpen}
          isModalOpen={
            ctx.deleteStudentConfirmation.toggleDeleteStudentConfirmationModal
          }
          title="Delete Student"
          content={
            <DeleteStudentConfirmation title="Are you sure you want to delete?" />
          }
        />
        <ModalContent
          modal={ctx.deleteClassConfirmation.deleteClassConfirmationModalIsOpen}
          isModalOpen={
            ctx.deleteClassConfirmation.toggleDeleteClassConfirmationModal
          }
          title="Delete Class"
          content={
            <DeleteClassConfirmation title="Are you sure you want to delete?" />
          }
        />
      </SMainContent>
      {ctx.loading.loading ? <Loading /> : null}
    </ModalContext.Provider>
  );
}

export default MainLayout;

const SMainContent = styled.main`
  background-color: #f5f5f5;
  height: 100%;
  min-height: 100vh;
  margin: 0 38px;
  ${props => props.theme.fn.media({from: 'md', to: 'lg'})}{
    margin: 0 38px;
  }
  ${props => props.theme.fn.media({to: 'md'})}{
    margin: 0 0;
  }

  & .title {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #5b5b5b;
    ${(props) => props.theme.fn.media({ to: "md" })} {
    margin: 0 20px;
  }
  }
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 35px 0;
`;
