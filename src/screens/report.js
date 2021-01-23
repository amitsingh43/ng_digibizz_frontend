import MainReport from "../components/mainReport";
import UnderstandReport from "../components/understandReport";
import RecommendationsReports from "../components/recommendationsReports";
import Testimonials from "../components/testimonials";
import Footer from "../components/main/footer";
import "../styles/report.css";
import { connect } from "react-redux";
import {
	header_digital_status,
	test_user,
	set_recommendations,
	section_results,
	questionnaire_take,
} from "../store/actions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function Report({
	header_digital_status,
	userDetails,
	test_user,
	set_recommendations,
	recommendations,
}) {
	useEffect(() => {
		test_user();
		set_recommendations();
	}, []);
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
						questionnaire_take={questionnaire_take}
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
	return {
		userDetails: state.userDetails,
		recommendations: state.recommendations,
	};
};

export default connect(mapStateToProps, {
	header_digital_status,
	set_recommendations,
	test_user,
})(Report);
