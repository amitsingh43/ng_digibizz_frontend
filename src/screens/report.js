import MainReport from "../components/mainReport";
import UnderstandReport from "../components/understandReport";
import RecommendationsReports from "../components/recommendationsReports";
import Testimonials from "../components/testimonials";
import Footer from "../components/main/footer";
import "../styles/report.css";
import { connect } from "react-redux";
import { header_digital_status } from "../store/actions";
import { useHistory } from "react-router-dom";
function Report({
	header_digital_status,
	userDetails,
	recommendations,
	percentage,
	section_results,
	lead_id,
}) {
	const history = useHistory();
	if (userDetails.user === null) {
		history.push("/knowStatus");
		return <div>Redirecting</div>;
	} else {
		header_digital_status();
		return (
			<div className="report-main">
				{userDetails.user && (
					<MainReport
						lead_id={lead_id}
						percentage={percentage}
						userDetails={userDetails}
					/>
				)}
				{recommendations && (
					<RecommendationsReports recommendations={recommendations} />
				)}
				<UnderstandReport section_results={section_results} />
				<Testimonials />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { setResults } = state;
	const { section_results, percentage, recommendations, lead_id } = setResults;
	return {
		userDetails: state.userDetails,
		recommendations,
		section_results,
		lead_id,
		percentage,
	};
};

export default connect(mapStateToProps, {
	header_digital_status,
})(Report);
