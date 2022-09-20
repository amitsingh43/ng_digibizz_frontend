import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "styles/report.css";
import {
  MainReport,
  UnderstandReport,
  RecommendationsReports,
  Testimonials,
} from "./components";
import Loading from "components/loading";

import { header_digital_status } from "store/actions";
import { get_results } from "./store/actions";

export default function Report() {
  const [downloadText, setDownloadText] = useState("Download Report");
  const history = useHistory();
  const setResults = useSelector((state) => state.setResults);
  const userDetails=useSelector(state=>state.userDetails);
  console.log({setResultssssss: setResults});
  console.log({userDetailsssss: userDetails});
  const { section_results, percentage, display_recommendations, lead_id } =
    setResults;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("report") && userDetails.user === null) {
      console.log("user details is null");
      dispatch(get_results(localStorage.getItem("lead_id")));
    }
    dispatch(header_digital_status());
    window.scrollTo(0, 0);
  }, [dispatch, userDetails.user]);

  if (
    localStorage.getItem("lead_id") &&
    localStorage.getItem("report") !== "true"
  ) {
    history.push("/questionnaire/discovery");
    return <div>Redirecting</div>;
  }

  if (localStorage.getItem("report") !== true) {
    /*history.push("/knowStatus");
    return <div>Redirecting</div>;*/
  }

  if (userDetails.user === null) {
    return <Loading />;
  } else {
    return (
      <div className="report-main">
        {userDetails.user && (
          <MainReport
            lead_id={lead_id}
            percentage={percentage}
            userDetails={userDetails}
            downloadText={downloadText}
            setDownloadText={setDownloadText}
          />
        )}
        {display_recommendations && (
          <RecommendationsReports
            downloadText={downloadText}
            setDownloadText={setDownloadText}
            recommendations={display_recommendations}
          />
        )}
        {section_results && (
          <UnderstandReport section_results={section_results} />
        )}
        <Testimonials />
        <div className="disclaimer-main">
          <p>
            <span>Disclaimer: </span>
            The information provided in this document is for general
            informational purposes only and is provided in good faith. Under no
            circumstance shall we have any liability to you for any loss or
            damage of any kind incurred as a result of the use of these
            third-party services. Your use of these products / services and your
            reliance on any information related to these services is solely at
            your own risk. We will not be a party to or in any way be
            responsible for monitoring any transaction between you and
            third-party providers of products or services.
          </p>
        </div>
      </div>
    );
  }
}
