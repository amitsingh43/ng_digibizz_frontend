import React from "react";
import { useEffect, useState } from "react";
import "../styles/welcome.css";
import welcome_bg from "../assets/welcome_bg.png";
import digital_discovery from "../assets/sections/digital_discovery.svg";
import digital_fulfillment from "../assets/sections/digital_fulfillment.svg";
import digital_transactions from "../assets/sections/digital_transactions.svg";
import digital_operations from "../assets/sections/digital_operations.svg";
import digital_engagement from "../assets/sections/digital_engagement.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import left_active from "../assets/left_active.svg";
import right_inactive from "../assets/right_inactive.svg";
import TestimonialsCarousal from "../components/testimonialsCarousal";
import Footer from "../components/main/footer";
import { services } from "../store/services_mapping";
import { Link, useHistory } from "react-router-dom";
import { header_reset, homepage_decrement } from "../store/actions";
import { connect } from "react-redux";
import { KNOWLEDGE_CENTER } from "../store/strings";
import welcome_youtube from "../assets/welcome/welcome_youtube.svg";

const SideText = (props) => {
	return (
		<div className="side-text">
			<h1>
				Transforming Businesses.
				<br />
				Empowering Lives.
			</h1>
			<p>
				Now upgrade your business with the help of our <br />
				customised solutions.{"	"}
				<span
					className="watch-to-know-more"
					style={{
						color: "#28B04B",
						textDecoration: "underline",
						// paddingTop: 10,
					}}
				>
					<span
						style={{ cursor: "pointer" }}
						onClick={() =>
							window.open(
								"https://www.youtube.com/watch?v=fW-eU-7SfMk&feature=youtu.be",
								"_blank"
							)
						}
					>
						Watch to know more <img alt="play" src={welcome_youtube} />
					</span>
				</span>
			</p>
			<Link to="/knowStatus" onClick={() => props.homepage_decrement()}>
				<div className="btn">Check your Digital Score</div>
			</Link>
		</div>
	);
};

const ServiceIcon = (props) => {
	const history = useHistory();
	const { img, label, tag } = props;

	return (
		<div
			onClick={() => {
				window.location.href = window.location + `services#${tag}`;
			}}
			className="col-sm-4 col-md-2 s-icon"
		>
			<img src={img} alt="service" />
			<div>{label}</div>
		</div>
	);
};

const ExploreOurServices = () => {
	const services1 = services.slice(0, 5);
	const services2 = services.slice(5, 10);
	const services3 = services.slice(10, 13);
	return (
		<div className="container">
			<div className="heading">Explore our services</div>
			<p>
				Reimagine and transform your business with a full range of services
				offered by our digital partners.
			</p>
			<div className="row icons">
				<div className="col-md-1 col-sm-1"></div>
				{services1.map((service) => (
					<ServiceIcon
						tag={service.tag}
						img={service.image}
						label={service.label}
						key={service.label}
					/>
				))}
				<div className="col-md-1 col-sm-1"></div>
			</div>
			<div className="row icons">
				<div className="col-md-1 col-sm-1"></div>
				{services2.map((service) => (
					<ServiceIcon
						tag={service.tag}
						img={service.image}
						label={service.label}
						key={service.label}
					/>
				))}
				<div className="col-md-1 col-sm-1"></div>
			</div>
			<div id="viiewmore" className="row icons">
				<div className="col-md-3 col-sm-1"></div>
				{services3.map((service) => (
					<ServiceIcon
						tag={service.tag}
						img={service.image}
						label={service.label}
						key={service.label}
					/>
				))}
				<div className="col-md-3 col-sm-1"></div>
			</div>
		</div>
	);
};

const TopContent = (props) => {
	return (
		<div className="top-content">
			<div className="col-md-6">
				<SideText homepage_decrement={props.homepage_decrement} />
			</div>
			<div className="col-md-6">
				<img className="img-responsive" alt="bg" src={welcome_bg} />
			</div>
		</div>
	);
};

const Question = (props) => {
	const sectionIcons = [
		{ image: digital_discovery, label: "Digital Discovery" },
		{ image: digital_fulfillment, label: "Digital Fulfilment" },
		{ image: digital_transactions, label: "Digital Transactions" },
		{ image: digital_operations, label: "Digital Operations" },
		{ image: digital_engagement, label: "Digital Engagement" },
	];
	return (
		<div className="container">
			<div className="heading">Is your Business Digital Ready?</div>
			<p>
				Find out your digital readiness today in all aspects of your business,
				with the help of our logical algorithm.
			</p>

			<div className="check-digital-score-btn-outer">
				<Link
					style={{ textDecoration: "none" }}
					to="/knowStatus"
					onClick={() => props.homepage_decrement()}
				>
					<div className="check-digital-score-btn">
						Check your Digital Score
					</div>
				</Link>
			</div>
			<div className="row section-icons">
				<div className="col-md-1"></div>
				{sectionIcons.map((icon) => (
					<div className="col-xs-4 col-md-2" key={icon.label}>
						<div className="col-md-12 section">
							<div>
								<img src={icon.image} alt="section-icon" />
							</div>
							<div className="label">{icon.label}</div>
						</div>
					</div>
				))}
				<div className=" col-md-1"></div>
			</div>
		</div>
	);
};

const UserGuide1 = () => {
	const history = useHistory();
	const [counter, setCounter] = useState(0);
	const [viewMore, setViewMore] = useState(false);
	const nextImage = () => {
		if (counter === 0 || counter === 1) {
			setCounter(counter + 1);
		}
	};
	const previousImage = () => {
		if (counter === 1 || counter === 2) {
			setCounter(counter - 1);
		}
	};
	return (
		<div style={{ marginBottom: 30 }}>
			<div className="row" style={{ textAlign: "center" }}>
				<div className="heading">Knowledge Center</div>
				<p>
					Know how to transform your business through our blogs and updates on
					latest industry trends.
				</p>
			</div>
			<div
				className="row row2"
				style={{
					display: "flex",
					width: "100vw",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<div
					className="back buttons"
					style={{
						borderColor: counter === 0 ? "#c4c4c4" : "#28b04b",
						cursor: counter === 0 ? "not-allowed" : "pointer",
					}}
					onClick={previousImage}
				>
					{counter === 0 && <img src={left} alt="left" />}
					{counter !== 0 && <img src={left_active} alt="left" />}
				</div>
				<div className="row2-imgs">
					{KNOWLEDGE_CENTER.slice(
						counter === 0 ? counter * 4 : counter * 4 - 2,
						viewMore
							? KNOWLEDGE_CENTER.length
							: counter === 0
							? counter * 4 + 4
							: counter * 4 + 2
					).map((image) => (
						<div
							className="col-md-2 card"
							id="be-img"
							key={image.heading}
							onClick={() => history.push(`knowledgeCenter/${image.id}`)}
						>
							<div
								className="bg-img"
								style={{ backgroundImage: `url(${image.badge})` }}
							>
								<div className="img-label">{image.heading}</div>
							</div>
						</div>
					))}
				</div>
				<div
					style={{
						borderColor: counter === 2 ? "#c4c4c4" : "#28b04b",
						cursor: counter === 2 ? "not-allowed" : "pointer",
					}}
					className="next buttons"
					onClick={nextImage}
				>
					{counter !== 2 && <img src={right} alt="right" />}
					{counter === 2 && <img src={right_inactive} alt="right" />}
				</div>
			</div>
			<div className="knowledge-view-more">
				<div className="view-more" onClick={() => setViewMore(!viewMore)}>
					{!viewMore && "View More"}
					{viewMore && "View Less"}
				</div>
			</div>
		</div>
	);
};

const UserGuide = () => {
	const history = useHistory();
	const [counter, setCounter] = useState(0);
	const [viewMore, setViewMore] = useState(false);
	const nextImage = () => {
		if (counter === 0 || counter === 1) {
			setCounter(counter + 1);
		}
	};
	const previousImage = () => {
		if (counter === 1 || counter === 2) {
			setCounter(counter - 1);
		}
	};
	return (
		<div>
			<div className="row">
				<div className="col-md-4">
					<div className="heading">Knowledge Center</div>
					<p>
						Know how to transform your business through our blogs and updates on
						latest industry trends.
					</p>
				</div>
			</div>
			<div className="row row2">
				<div className="col-md-3 buttons">
					<div
						style={{
							borderColor: counter === 2 ? "#c4c4c4" : "#28b04b",
							cursor: counter === 2 ? "not-allowed" : "pointer",
						}}
						className="next"
						onClick={nextImage}
					>
						{counter !== 2 && <img src={right} alt="right" />}
						{counter === 2 && <img src={right_inactive} alt="right" />}
					</div>
					<div
						className="back"
						style={{
							borderColor: counter === 0 ? "#c4c4c4" : "#28b04b",
							cursor: counter === 0 ? "not-allowed" : "pointer",
						}}
						onClick={previousImage}
					>
						{counter === 0 && <img src={left} alt="left" />}
						{counter !== 0 && <img src={left_active} alt="left" />}
					</div>
				</div>
				<div className="row2-imgs">
					{KNOWLEDGE_CENTER.slice(
						counter === 0 ? counter * 4 : counter * 4 - 2,
						viewMore
							? KNOWLEDGE_CENTER.length
							: counter === 0
							? counter * 4 + 4
							: counter * 4 + 2
					).map((image) => (
						<div
							className="col-md-2 card"
							id="be-img"
							key={image.heading}
							onClick={() => history.push(`knowledgeCenter/${image.id}`)}
						>
							<div
								className="bg-img"
								style={{ backgroundImage: `url(${image.badge})` }}
							>
								<div className="img-label">{image.heading}</div>
							</div>
						</div>
					))}
				</div>
				<div className="col-md-1"></div>
			</div>
			<div className="knowledge-view-more">
				<div className="view-more" onClick={() => setViewMore(!viewMore)}>
					{!viewMore && "View More"}
					{viewMore && "View Less"}
				</div>
			</div>
		</div>
	);
};

const SuccessStories = () => {
	return (
		<div style={{ width: "100%" }}>
			<div className="heading">Success Stories</div>
			<TestimonialsCarousal />
		</div>
	);
};

const MobileView = () => {
	const history = useHistory();
	return (
		<div className="mobile-view">
			{services.map((service) => (
				<div
					className="service"
					style={{ cursor: "pointer" }}
					onClick={() => {
						history.push({
							pathname: "/services",
							state: { id: service.tag },
						});
					}}
					key={service.label}
				>
					<img src={service.image} alt="img" />
					<div className="labell">{service.label}</div>
				</div>
			))}
			<div style={{ clear: "both" }}></div>
		</div>
	);
};

function Welcome({ header_reset, homepage_decrement, userDetails }) {
	useEffect(() => {
		window.scrollTo(0, 0);
		header_reset();
	}, []);
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
				<UserGuide1 />
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
