import toast from "react-hot-toast";
import useLoading from "../../hooks/useLoading";

export const successFeedback = (message, reload = true) => {
  toast.success(message, {
    duration: 2000,
  });
  if (reload) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
};

export const errorFeedback = (message) => {
  toast.error(message, {
    duration: 2000,
  });
};
