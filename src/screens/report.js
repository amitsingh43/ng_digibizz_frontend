import React, { useEffect, useState } from "react";
import MainReport from "../components/mainReport";
import UnderstandReport from "../components/understandReport";
import RecommendationsReports from "../components/recommendationsReports";
import Testimonials from "../components/testimonials";
import Footer from "../components/main/footer";
import Loading from "../components/loading";
import Disclaimer from "../components/main/disclaimer";
import "../styles/report.css";
import { connect } from "react-redux";
import { header_digital_status, get_results } from "../store/actions";
import { useHistory } from "react-router-dom";
function Report({
	header_digital_status,
	userDetails,
	display_recommendations,
	percentage,
	section_results,
	lead_id,
	get_results,
}) {
	useEffect(() => {
		if (localStorage.getItem("report") && userDetails.user === null) {
			get_results(localStorage.getItem("lead_id"));
		}
		header_digital_status();
	}, []);
	const [downloadText, setDownloadText] = useState("Download Report");
	const history = useHistory();
	if (
		localStorage.getItem("lead_id") &&
		localStorage.getItem("report") !== "true"
	) {
		history.push("/questionnaire");
		return <div>Redirecting</div>;
	}
	if (localStorage.getItem("lead_id") === null) {
		history.push("/knowStatus");
		return <div>Redirecting</div>;
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
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { setResults } = state;
	const {
		section_results,
		percentage,
		display_recommendations,
		lead_id,
	} = setResults;
	return {
		userDetails: state.userDetails,
		display_recommendations,
		section_results,
		lead_id,
		percentage,
	};
};

export default connect(mapStateToProps, {
	header_digital_status,
	get_results,
})(Report);
