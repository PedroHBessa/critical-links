import { useState } from "react";

const useModal = () => {
  const [createStudentModalIsOpen, toggleCreateStudentModal] = useState(false);
  const [editStudentModalIsOpen, toggleEditStudentModal] = useState(false);
  const [manageClassModalIsOpen, toggleManageClassModal] = useState(false);
  const [createClassModalIsOpen, toggleCreateClassModal] = useState(false);
  const [editClassModalIsOpen, toggleEditClassModal] = useState(false);
  const [
    deleteStudentConfirmationModalIsOpen,
    toggleDeleteStudentConfirmationModal,
  ] = useState(false);
  const [
    deleteClassConfirmationModalIsOpen,
    toggleDeleteClassConfirmationModal,
  ] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState("");
  const [deleteClassId, setDeleteClassId] = useState("");
  const [editStudentId, setEditStudentId] = useState("");
  const [editClassId, setEditClassId] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  const modals = {
    createStudents: {
      createStudentModalIsOpen,
      toggleCreateStudentModal,
    },
    editStudent: {
      editStudentModalIsOpen,
      toggleEditStudentModal,
      editStudentId,
      setEditStudentId,
    },
    manageClass: {
      manageClassModalIsOpen,
      toggleManageClassModal,
    },
    createClasses: {
      createClassModalIsOpen,
      toggleCreateClassModal,
    },
    editClass: {
      editClassModalIsOpen,
      toggleEditClassModal,
      editClassId,
      setEditClassId,
    },
    deleteStudentConfirmation: {
      deleteStudentConfirmationModalIsOpen,
      toggleDeleteStudentConfirmationModal,
      deleteStudentId,
      setDeleteStudentId,
    },
    deleteClassConfirmation: {
      deleteClassConfirmationModalIsOpen,
      toggleDeleteClassConfirmationModal,
      deleteClassId,
      setDeleteClassId,
    },
    loading: {
      loading,
      setLoading,
    },
    menuMobile: {
      menuMobile,
      setMenuMobile,
    },
  };
  return modals;
};

export default useModal;
