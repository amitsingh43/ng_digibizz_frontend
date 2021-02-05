import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import punctuation1 from "../assets/punctuation1.svg";
import punctuation2 from "../assets/punctuation2.svg";
import { header_success_stories } from "../store/actions";
import Footer from "../components/main/footer";
import "../styles/successStoriesDetailed.css";
import play_logo from "../assets/youtube.svg";
import { SUCCESSDATA } from "../store/strings";
import { useHistory } from "react-router-dom";
const TopContent = ({ story }) => {
	return (
		<div className="top-content">
			<div>
				{"Success Stories    >>   "}
				<span>{story.topContent}</span>
			</div>
		</div>
	);
};

const DetailedCard = ({ story }) => {
	const [showVideo, toggleVideo] = useState(false);
	const videoID = "LVUEIz-AAi4";
	return (
		<div className="col-lg-10 detailed-card-1">
			<div className="col-lg-6 left-content">
				<div className="row img-title col-xs-12">
					<div className="col-lg-4 img-div">
						<img
							className="col-lg-12 col-xs-4 profile-pic"
							src={story.image}
							alt="profile_picture"
						/>
					</div>
					<div className="col-lg-8 col-xs-8 title-div">
						<div className="row title">
							<h3>{story.name}</h3>
							<div>{story.heading}</div>
						</div>
					</div>
				</div>
				<div className="row title-desc">
					<hr />
					<img className="punctuation1" alt="punctuation1" src={punctuation1} />
					<p>
						{story.content}
						<img
							className="punctuation2"
							alt="punctuation2"
							src={punctuation2}
						/>
					</p>
				</div>
			</div>
			<div
				className="img-responsive col-lg-6 col-xs-12 bgimage"
				style={{
					backgroundImage: `url(${story.image})`,
					border: 0,
				}}
			>
				{showVideo && story.type === "video" && (
					<iframe
						style={{ width: "100%", height: "100%" }}
						title="jfdsjj"
						frameborder="0"
						wmode="Opaque"
						src={
							"https://www.youtube.com/embed/" +
							videoID +
							"?modestbranding=1&autoplay=1&controls=0&rel=0&wmode=transparent"
						}
					>
						<h1 style={{ zIndex: 99, color: "yellow" }}>Close</h1>
					</iframe>
				)}
				{!showVideo && story.type === "video" && (
					<img
						onClick={() => toggleVideo(!showVideo)}
						className="play-button"
						src={play_logo}
						alt="play_button"
					/>
				)}
			</div>
		</div>
	);
};

const Content = ({ data }) => {
	const { heading, desc, list } = data;
	return (
		<div>
			<h3>{heading}</h3>
			{desc && desc.map((para) => <p style={{ color: "#68696A" }}>{para}</p>)}
			{list && (
				<ul>
					{list.map((point) => (
						<li>
							<span style={{ color: "black", fontWeight: "bold" }}>
								{point.bullet}
							</span>
							{point.content}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const MainContent = ({ story }) => {
	const { blog } = story;
	const styles = { fontSize: 16, lineHeight: 2 };
	return (
		<div className="main-content col-lg-10" style={styles}>
			<p style={{ marginTop: 30 }}>
				{blog.map((data) => (
					<Content data={data} />
				))}
			</p>
		</div>
	);
};

function SuccessStoriesDetailed({ header_success_stories, match }) {
	useEffect(() => {
		header_success_stories();
		window.scrollTo(0, 0);
	}, []);
	const history = useHistory();
	const story = SUCCESSDATA.find((data) => data.id == match.params.id);
	if (story === undefined) {
		history.push("/successStories");
		return <h1>Redirecting</h1>;
	}
	return (
		<div style={{ background: "rgba(229, 229, 229, 0.4)" }}>
			<div className="success-stories-detailed">
				<div className="row">
					<TopContent story={story} />
				</div>
				<div className="row">
					<DetailedCard story={story} />
				</div>
				<div className="row">
					<MainContent story={story} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default connect(null, { header_success_stories })(
	SuccessStoriesDetailed
);
