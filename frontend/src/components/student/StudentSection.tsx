import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentCard from "./StudentCard";
import axios from "../../services/axios";
import { errorFeedback } from "../../utils/functions/feedback";

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
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get("/students");
        setStudents(response.data);
      } catch (error: any) {
        errorFeedback(`something went wrong: ${error.message}`);
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 40px;

  color: rgba(0, 0, 0, 0.87);
`;
