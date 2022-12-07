import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StudentCard from "./StudentCard";
import axios from "../../services/axios";
import { errorFeedback } from "../../utils/functions/feedback";
import { ModalContext } from "../../context/ModalContext";

export interface IStudentSectionProps {}

export interface IStudentModel {
  first_name: string;
  last_name: string;
  email: string;
  student_id: string;
  class_name: string;
  _id: string
}

export interface IStudentModelList extends Array<IStudentModel> {}

const StudentSection: React.FC<IStudentSectionProps> = ({}) => {
  const [students, setStudents] = useState<IStudentModelList>();
  const {loading } = useContext(ModalContext);
  useEffect(() => {
    const getStudents = async () => {
      try {
        loading.setLoading(true)
        const response = await axios.get("/students");
        setStudents(response.data);
      } catch (error: any) {
        errorFeedback(`something went wrong: ${error.message}`);
      } finally {
        loading.setLoading(false)
      }
   
    };
    getStudents();
  }, []);
  return (
    <SStudentSection>
      {students &&
        students.map((e, i) => {
          return (
            <StudentCard
              key={i}
              fullname={`${e.first_name} ${e.last_name}`}
              email={e.email}
              studentId={e.student_id}
              id={e._id}
            />
          );
        })}
    </SStudentSection>
  );
};

export default StudentSection;

const SStudentSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  ${props => props.theme.fn.media({from: 'md', to: 'lg'})}{
    grid-template-columns: repeat(2, 1fr);
  }
  ${props => props.theme.fn.media({to: 'md'})}{
    grid-template-columns: repeat(1, 1fr);
  }

  color: rgba(0, 0, 0, 0.87);
`;
