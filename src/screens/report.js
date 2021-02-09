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
		header_digital_status();
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
				<Disclaimer />
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
