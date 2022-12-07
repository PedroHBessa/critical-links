import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import Avatar from "./Avatar";
import StudentActions from "./StudentActions";
import TextContent from "./TextContent";
import { shortString } from "../../utils/functions/shortString";

export interface IStudentCard {
    fullname: string | undefined
    email: string | undefined
    studentId: string
    id: string
}

const StudentCard: React.FC<IStudentCard> = ({fullname, email, studentId, id}) => {
  const ctx = useContext(ModalContext);
  return (
    <SStudentCard>
      <Avatar email={email}/>
      <TextContent
        fullname={shortString(fullname)}
        email={shortString(email)}
        id={studentId}
      />
      <StudentActions
        size="reg"
        deleteModal={
          ctx.deleteStudentConfirmation.toggleDeleteStudentConfirmationModal
        }
        id={id}
        openModal={ctx.editStudent.toggleEditStudentModal}
      />
    </SStudentCard>
  );
};

export default StudentCard;

const SStudentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 35.5px 20px;
  margin: 20px 10px;
  width: 380px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.87);
`;
