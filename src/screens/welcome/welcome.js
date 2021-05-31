import { useEffect } from "react";
import "styles/welcome.css";
import { header_reset, homepage_decrement } from "store/actions";
import { connect } from "react-redux"
import { ExploreOurServices, UserGuide, TopContent, Question, SuccessStories,MobileView } from "./components";

function Welcome({ header_reset, homepage_decrement, userDetails }) {
	useEffect(() => {
		window.scrollTo(0, 0);
		header_reset();
		// const options = {
		// 	autoConfig: true, // set pixel's autoConfig
		// 	debug: false, // enable logs
		// };
		// ReactPixel.init("281787519125313", options);
	}, [header_reset]);
	return (
		<div style={{ fontFamily: "Rubik" }}>
			<div className="welcome">
				<TopContent homepage_decrement={homepage_decrement} />
			</div>
			<div className="explore-our-services">
				<ExploreOurServices />
				<MobileView />
			</div>
			<div className="question">
				<Question homepage_decrement={homepage_decrement} />
			</div>
			<div className="user-guide">
				{/* <UserGuide /> */}
				<UserGuide />
			</div>
			<div className="success-stories1">
				<SuccessStories />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userDetails: state.userDetails,
	};
};

export default connect(mapStateToProps, {
	header_reset,
	homepage_decrement,
})(Welcome);
