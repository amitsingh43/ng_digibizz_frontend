import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { header_success_stories } from "../store/actions";
import SuccessCard from "../components/successStories/successCard";
import Footer from "../components/main/footer";
import "../styles/successStories.css";
import { SUCCESSDATA } from "../store/strings";
const Content = () => {
	return (
		<div>
			<h1>Success Stories</h1>
			<div className="row">
				<p className="col-lg-8">
					DiGibizz has created a long lasting impact on our customers on how
					they manage their business every day. We help empower, enable and
					transform small businesses in their digital journey towards growth.
				</p>
			</div>
		</div>
	);
};

function SuccessStories({ header_success_stories }) {
	useEffect(() => {
		header_success_stories();
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="success-stories">
			<div className="top-content">
				<Content />
			</div>
			{SUCCESSDATA.map((data, index) => (
				<div className="success-content" key={index}>
					<SuccessCard
						id={data.id}
						name={data.name}
						heading={data.heading}
						image={data.image}
						content={data.content}
						type={data.type}
					/>
				</div>
			))}
		</div>
	);
}

export default connect(null, { header_success_stories })(SuccessStories);
