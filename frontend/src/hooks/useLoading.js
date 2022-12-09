import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useLoading = (bool) => {
  const { loading } = useContext(ModalContext);
  loading.setLoading(bool);
};

export default useLoading;
