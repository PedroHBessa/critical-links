import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "../modal/hooks/useModal";
import Avatar from "./Avatar";
import StudentActions from "./StudentActions";
import StudentCard from "./StudentCard";
import TextContent from "./TextContent";
import axios from "../../services/axios";

export interface IStudentSection {}
const StudentSection: React.FC<IStudentSection> = ({}) => {
  const [students, setStudents] = useState<any>(null);
  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get("/students");
      setStudents(response.data);
    };
    getStudents();
  }, []);
  return (
    <SStudentSection>
      {students &&
        students.map((e: any, i: number) => {
          return <StudentCard key={i} fullname={e.first_name} email={e.email} studentId={e.student_id} id={e._id} />;
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
