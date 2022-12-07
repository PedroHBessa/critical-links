import toast from "react-hot-toast";

export const successFeedback = (message, reload = true) => {
  toast.success(message, {
    duration: 2000,
  });
  if(reload){
    setTimeout(() => {
        window.location.reload();
      }, 2000);
  }
  
};

export const errorFeedback = (message) => {
  toast.error(message, {
    duration: 2000,
  });
};
