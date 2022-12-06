import { useState } from "react"

const useModal = () => {
    const [createStudentModal, setCreateStudentModal] = useState(false)
    const [manageClassModal, setManageClassModal] = useState(false)
    const modals = {
        createStudent: {
            createStudentModal,
            setCreateStudentModal
        },
        manageClass: {
            manageClassModal,
            setManageClassModal
        }
    }
     return modals
}

export default useModal
