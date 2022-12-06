import { useState } from "react";

const useModal = () => {
  const [createStudentModalIsOpen, toggleCreateStudentModal] = useState(false);
  const [editStudentModalIsOpen, toggleEditStudentModal] = useState(false);
  const [manageClassModalIsOpen, toggleManageClassModal] = useState(false);
  const [createClassModalIsOpen, toggleCreateClassModal] = useState(false);
  const [editClassModalIsOpen, toggleEditClassModal] = useState(false);
  const [deleteStudentConfirmationModalIsOpen, toggleDeleteStudentConfirmationModal] = useState(false);
  const [deleteClassConfirmationModalIsOpen, toggleDeleteClassConfirmationModal] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState('')
  const modals = {
    createStudent: {
      createStudentModalIsOpen,
      toggleCreateStudentModal,
    },
    editStudent: {
      editStudentModalIsOpen,
      toggleEditStudentModal,
    },
    manageClass: {
      manageClassModalIsOpen,
      toggleManageClassModal,
    },
    createClass:{
      createClassModalIsOpen,
      toggleCreateClassModal
    },
    editClass: {
      editClassModalIsOpen,
      toggleEditClassModal,
    },
    deleteStudentConfirmation: {
      deleteStudentConfirmationModalIsOpen,
      toggleDeleteStudentConfirmationModal,
      deleteStudentId,
      setDeleteStudentId
    },
    deleteClassConfirmation: {
      deleteClassConfirmationModalIsOpen,
      toggleDeleteClassConfirmationModal,
    },
  };
  return modals;
};

export default useModal;
