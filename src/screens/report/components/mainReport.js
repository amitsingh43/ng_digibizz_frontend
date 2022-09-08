import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "styles/mainReport.css";
import email_icon from "assets/email.svg";
import download from "assets/download.svg";
import report1 from "assets/report1.svg";
import report2 from "assets/report2.svg";
import report3 from "assets/report3.svg";
import report4 from "assets/report4.svg";
import { downloadReport, emailReport, reset_user } from "store/actions";
import {
  reset_answers,
  reset_questions,
} from "screens/questionnaire/store/actions";
import { reset_results, reset_recommendations } from "../store/actions";

export default function MainReport({
  userDetails,
  percentage,
  downloadText,
  setDownloadText,
}) {
  const dispatch = useDispatch();
  const { full_name, email, gender, business_name } = userDetails.user;
  const [reportImg, setReportImg] = useState(report1);
  const history = useHistory();

  useEffect(() => {
    var intPercent = parseInt(percentage);
    if (intPercent >= 0 && intPercent <= 25) {
      setReportImg(report1);
    } else if (intPercent > 25 && intPercent <= 50) {
      setReportImg(report2);
    } else if (intPercent > 50 && intPercent <= 75) {
      setReportImg(report3);
    } else {
      setReportImg(report4);
    }
  }, [percentage]);

  return (
    <div className="main-report">
      <div className="namaste">Hello!</div>
      <div className="name">
        {gender} {full_name}
      </div>
      <div className="business-name">
        Here is the Digital Score of your business, {business_name}
      </div>
      <div className="report-img">
        <img alt="report" src={reportImg} />
      </div>
      <div className="score">{percentage}%</div>
      <div>
        <span
          className="btns"
          onClick={() => downloadReport(downloadText, setDownloadText)}
        >
          {downloadText}
          <span>
            <img src={download} alt="download" />
          </span>
        </span>
        <span className="btns" onClick={() => dispatch(emailReport())}>
          Email Report
          <span>
            <img src={email_icon} alt="email" />
          </span>
        </span>
        <div className="outer-btn">
          <div
            className="btns-small"
            onClick={() => downloadReport(downloadText, setDownloadText)}
          >
            {downloadText}
            <span>
              <img src={download} alt="download" />
            </span>
          </div>
        </div>
        <div className="outer-btn">
          <div className="btns-small" onClick={() => dispatch(emailReport())}>
            Email Report
            <span>
              <img src={email_icon} alt="download" />
            </span>
          </div>
        </div>
      </div>
      <div className="start-again">
        <div
          className="btns-small btns u"
          style={{ display: "block" }}
          onClick={() => {
            history.push("/");
            localStorage.clear();
            dispatch(reset_answers());
            dispatch(reset_questions());
            dispatch(reset_user());
            dispatch(reset_results());
            dispatch(reset_recommendations());
          }}
        >
          Exit
        </div>
      </div>
      <div className="happy">
        We are glad to share a customized report on the digital readiness across
        all aspects of your business. Here is our list of recommendations to
        help you re-imagine and transform your business.
      </div>
    </div>
  );
}
