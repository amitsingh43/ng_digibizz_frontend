import { toast } from "react-toastify";

const toastType = {
  ERROR: (message, time) =>
    toast.error(message, {
      position: "bottom-left",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  SUCCESS: (message, time) =>
    toast.success(message, {
      position: "top-center",
      autoClose: time ? time : 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  INFO: (message, time) =>
    toast.info(message, {
      position: "top-right",
      autoClose: time?  time : 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
};
const show_toast = (message, type = "ERROR", time) => {
  toastType[type](message, time);
};

export default show_toast;
