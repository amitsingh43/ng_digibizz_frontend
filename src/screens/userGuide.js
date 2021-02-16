import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { header_user_guide } from "../store/actions";
import { KNOWLEDGE_CENTER } from "../store/strings";
import UserCard from "../components/userCard";
import Footer from "../components/main/footer";
import "../styles/successStories.css";
const Content = () => {
	return (
		<div>
			<h1>Knowledge Center</h1>
			<div className="row">
				<p className="col-lg-8">
					Begin your business transformation journey now by browsing through our
					hand picked blogs and be updated on latest industry trends.
				</p>
			</div>
		</div>
	);
};

function UserGuide({ header_user_guide, headerState, set_user_guide_details }) {
	useEffect(() => {
		header_user_guide();
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="success-stories">
			<div className="top-content">
				<Content />
			</div>
			{KNOWLEDGE_CENTER.map((knowledge, index) => (
				<div className="success-content" key={index}>
					<UserCard
						id={knowledge.id}
						heading={knowledge.heading}
						desc={knowledge.desc}
						image={knowledge.image}
					/>
				</div>
			))}
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		headerState: state.headerState,
	};
};

export default connect(mapStateToProps, {
	header_user_guide,
})(UserGuide);
