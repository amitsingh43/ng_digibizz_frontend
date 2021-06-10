import axios from "axios";
import { _post } from "store/api";
import show_toast from "util/showToast";
import { add_error } from "./errorActions";

var FileSaver = require("file-saver");

export const downloadReport = (downloadText, setDownloadText) => {
  if (downloadText === "Downloading...") {
    return;
  }
  const method = "GET";
  setDownloadText("Downloading...");
  const url =
    "https://uat.advancesuite.in:3061/api/download_report?lead_id=" +
    localStorage.getItem("lead_id");
  axios
    .request({
      url,
      method,
      responseType: "blob", //important
    })
    .then(({ data }) => {
      setDownloadText("Downloaded Report");
      console.log(data);
      // filedownload(data, "DiGiBizz Score Report.pdf");
      var blob = new Blob([data], { type: "application/pdf" });
      FileSaver.saveAs(blob, "DiGibizz Score Report.pdf");
    })
    .catch((err) => {
      setDownloadText("Download Report");
      let message = "Report not yet ready. Please try in a few seconds.";
      // console.log(error);

      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        message = err.response.data.message;
      }
      show_toast(message, "INFO");
    });
};

export const emailReport = () => async (dispatch) => {
  try {
    const { message } = await _post(
      "/api/email_report?lead_id=" + localStorage.getItem("lead_id")
    );
    show_toast(message, "SUCCESS");
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
  }
};
