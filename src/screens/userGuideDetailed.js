import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { header_user_guide } from "../store/actions";
import Footer from "../components/main/footer";
import Disclaimer from "../components/main/disclaimer";
import "../styles/successStoriesDetailed.css";
import { KNOWLEDGE_CENTER } from "../store/strings";
import { useHistory } from "react-router-dom";
const TopContent = ({ heading }) => {
	return (
		<div className="top-content">
			<div>
				User Guide{"    >>   "}
				<span>{heading}</span>
			</div>
		</div>
	);
};

const Image = ({ image }) => {
	return (
		<div className="img-responsive  user-guide-top-image">
			<img
				className="img-responsive col-lg-10 col-xs-12 thumbnail"
				src={image}
				alt="thumbnail"
			/>
		</div>
	);
};

const ImageContent = ({ image, content, type }) => {
	if (type === "left") {
		return (
			<div className="img-content">
				<img src={image} alt="theft" />
				<p>{content}</p>
			</div>
		);
	} else {
		return (
			<div className="right-img-content">
				<img src={image} alt="theft" />
				<p>{content}</p>
			</div>
		);
	}
};

const OnlyContent = ({ heading, content, list }) => {
	return (
		<div className="only-content">
			{heading && <div className="section-heading">{heading}</div>}
			<p className="p">{content}</p>
			{list && (
				<ul>
					{list.map((point) => (
						<p>
							<li className="p">{point}</li>
						</p>
					))}
				</ul>
			)}
		</div>
	);
};

const MainContent = ({ heading, desc, image, sections }) => {
	return (
		<div className="main-content col-lg-10 ">
			<div className="heading">{heading}</div>
			{sections.map((section) => (
				<div>
					{section.type === "left" && (
						<ImageContent
							image={section.image}
							content={section.content}
							type={section.type}
						/>
					)}
					{section.type === "content" && (
						<OnlyContent
							list={section.list}
							heading={section.heading}
							content={section.content}
						/>
					)}
					{section.type === "right" && (
						<ImageContent
							image={section.image}
							content={section.content}
							type={section.type}
						/>
					)}
				</div>
			))}
		</div>
	);
};

function UserGuideDetailed({ header_user_guide, match }) {
	useEffect(() => {
		header_user_guide();
		window.scrollTo(0, 0);
	}, []);
	const history = useHistory();
	const knowledge = KNOWLEDGE_CENTER.find((know) => know.id == match.params.id);
	if (knowledge === undefined) {
		history.push("/userGuide");
		return <h1>Loading</h1>;
	}
	return (
		<div style={{ background: "rgba(229, 229, 229, 0.4)" }}>
			<div className="success-stories-detailed">
				<div className="row">
					<TopContent heading={knowledge.heading} />
				</div>
				<div className="row ">
					<Image image={knowledge.bg} />
				</div>
				<div className="row " style={{ paddingTop: 0 }}>
					<MainContent
						sections={knowledge.sections}
						heading={knowledge.heading}
						desc={knowledge.desc}
					/>
				</div>
			</div>
			<Disclaimer />
			<Footer />
		</div>
	);
}

export default connect(null, { header_user_guide })(UserGuideDetailed);
