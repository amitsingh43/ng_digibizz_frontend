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
	console.log(userDetails);
	if (userDetails.user === 1) {
		history.push("/knowStatus");
		return <div>Redirecting</div>;
	} else {
		header_digital_status();
		return (
			<div className="report-main">
				{userDetails.user && <MainReport userDetails={userDetails} />}
				{recommendations && (
					<RecommendationsReports recommendations={recommendations} />
				)}
				<UnderstandReport />
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
