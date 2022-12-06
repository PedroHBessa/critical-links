import { useState } from "react";

const useModal = () => {
  const [createStudentModal, setCreateStudentModal] = useState(false);
  const [editStudentModal, setEditStudentModal] = useState(false);
  const [manageClassModal, setManageClassModal] = useState(false);
  const [editClassModal, setEditClassModal] = useState(false);
  const [deleteStudentConfirmationModal, setDeleteStudentConfirmationModal] = useState(false);
  const modals = {
    createStudent: {
      createStudentModal,
      setCreateStudentModal,
    },
    editStudent: {
      editStudentModal,
      setEditStudentModal,
    },
    manageClass: {
      manageClassModal,
      setManageClassModal,
    },
    editClass: {
      editClassModal,
      setEditClassModal,
    },
    deleteStudentConfirmation: {
      deleteStudentConfirmationModal,
      setDeleteStudentConfirmationModal,
    },
  };
  return modals;
};

export default useModal;
