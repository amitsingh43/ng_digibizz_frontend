import { useEffect, useState } from "react";
import "../styles/welcome.css";
import welcome_bg from "../assets/welcome_bg.png";
import sell_online from "../assets/services/sell_online.svg";
import delivery_services from "../assets/services/delivery_services.svg";
import business_loans from "../assets/services/business_loans.svg";
import manage_stock from "../assets/services/manage_stock.svg";
import website from "../assets/services/website.svg";
import billing from "../assets/services/billing.svg";
import digital_khata from "../assets/services/digital_khata.svg";
import tax from "../assets/services/tax.svg";
import social_media from "../assets/services/social_media.svg";
import manage_payments from "../assets/services/manage_payments.svg";
import manage_staff from "../assets/services/manage_staff.svg";
import customer_loyalty from "../assets/services/customer_loyalty.svg";
import insurance from "../assets/services/insurance.svg";
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
import { Link } from "react-router-dom";
import {
	header_reset,
	homepage_decrement,
	get_api_call,
} from "../store/actions";
import { connect } from "react-redux";
import knowledge_1 from "../assets/welcome/knowledge_1.svg";
import knowledge_2 from "../assets/welcome/knowledge_2.svg";
import knowledge_3 from "../assets/welcome/knowledge_3.svg";
import knowledge_4 from "../assets/welcome/knowledge_4.svg";
import knowledge_5 from "../assets/welcome/knowledge_5.svg";
import knowledge_6 from "../assets/welcome/knowledge_6.svg";
import knowledge_7 from "../assets/welcome/knowledge_7.svg";

const SideText = (props) => {
	return (
		<div className="side-text">
			<h1>
				Transforming Business.
				<br />
				Empowering Lives.
			</h1>
			<p>
				Introducing Digit-o-Meter, a scoring mechanism for evaluating the
				digital readiness of small businesses
			</p>

			<Link to="/knowStatus" onClick={() => props.homepage_decrement()}>
				<div className="btn">Check your digital score</div>
			</Link>
		</div>
	);
};

const ServiceIcon = (props) => {
	const img = props.img;
	const label = props.label;
	return (
		<div className="col-sm-4 col-md-2 s-icon">
			<img src={img} alt="service" />
			<div>{label}</div>
		</div>
	);
};

const ExploreOurServices = () => {
	const services1 = services.splice(0, 5);
	const services2 = services.splice(5, 11);
	const services3 = services.splice(11, 13);
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
					<ServiceIcon img={service.image} label={service.label} />
				))}
				<div className="col-md-1 col-sm-1"></div>
			</div>
			<div className="row icons">
				<div className="col-md-1 col-sm-1"></div>
				{services2.map((service) => (
					<ServiceIcon img={service.image} label={service.label} />
				))}
				<div className="col-md-1 col-sm-1"></div>
			</div>
			<div id="viiewmore" className="row icons">
				<div className="col-md-3 col-sm-1"></div>
				{services3.map((service) => (
					<ServiceIcon img={service.image} label={service.label} />
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
		{ image: digital_fulfillment, label: "Digital Fulfillment" },
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
					<div className="col-xs-4 col-md-2">
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

const UserGuide = () => {
	const [counter, setCounter] = useState(0);
	const [viewMore, setViewMore] = useState(false);
	const imageDesc = [
		{
			image: knowledge_1,
			label:
				"Tips for How to Avoid Online Frauds and do secure business on the go",
		},
		{
			image: knowledge_2,
			label: "What is UPI and benefits of using UPI",
		},
		{
			image: knowledge_3,
			label: "How to get discovered online",
		},
		{
			image: knowledge_4,
			label:
				"How to list yourself on online delivery platforms, manage table bookings and orders",
		},
	];
	const imageDesc1 = [
		{
			image: knowledge_4,
			label:
				"How to list yourself on online delivery platforms, manage table bookings and orders?",
		},
		{
			image: knowledge_5,
			label:
				"How to tie-up with Online Delivery Partners like Dunzo, Swiggy, Zomato, etc?",
		},
		{
			image: knowledge_6,
			label:
				"How to set up your online store with NowFloats, Amazon Easy, Whatsapp Business, Near Store, etc",
		},
		{
			image: knowledge_7,
			label:
				"How to go about company registration, obtaining licenses, trademark registration, taxation help, etc",
		},
	];
	const nextImage = () => {
		if (counter === 0) {
			setCounter(counter + 1);
		}
	};
	const previousImage = () => {
		if (counter === 1) {
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
							borderColor: counter === 1 ? "#c4c4c4" : "#28b04b",
							cursor: counter === 1 ? "default" : "pointer",
						}}
						className="next"
						onClick={nextImage}
					>
						{counter !== 1 && <img src={right} alt="right" />}
						{counter === 1 && <img src={right_inactive} alt="right" />}
					</div>
					<div
						className="back"
						style={{
							borderColor: counter === 0 ? "#c4c4c4" : "#28b04b",
							cursor: counter === 0 ? "default" : "pointer",
						}}
						onClick={previousImage}
					>
						{counter === 0 && <img src={left} alt="left" />}
						{counter !== 0 && <img src={left_active} alt="left" />}
					</div>
				</div>
				<div className="row2-imgs">
					{counter === 0 &&
						imageDesc.map((image) => (
							<div className="col-md-2 card" id="be-img">
								<div
									className={"bg-img"}
									style={{ backgroundImage: `url(${image.image})` }}
								>
									<div className="img-label">{image.label}</div>
								</div>
							</div>
						))}
					{(counter === 1 || viewMore) &&
						imageDesc1.map((image) => (
							<div className="col-md-2 card">
								<div
									className={"bg-img"}
									style={{ backgroundImage: `url(${image.image})` }}
								>
									<div className="img-label">{image.label}</div>
								</div>
							</div>
						))}
				</div>
				<div className="col-md-1"></div>
			</div>
			<div className="knowledge-view-more">
				<div
					className="view-more"
					style={{ marginTop: viewMore ? 640 : 0 }}
					onClick={() => setViewMore(!viewMore)}
				>
					{!viewMore && "View More"}
					{viewMore && "View Less"}
				</div>
			</div>
		</div>
	);
};

const SuccessStories = () => {
	return (
		<div>
			<div className="heading">Success Stories</div>
			<TestimonialsCarousal />
		</div>
	);
};

const MobileView = () => {
	const services = [
		{
			image: sell_online,
			label: "Sell Online",
		},
		{
			image: delivery_services,
			label: "Delivery Services",
		},
		{
			image: business_loans,
			label: "Business Loans",
		},
		{
			image: manage_stock,
			label: "Manage Stock",
		},
		{
			image: website,
			label: "Create Website or mobile",
		},
		{
			image: billing,
			label: "Billing & Accounting",
		},
		{
			image: digital_khata,
			label: "Digital Khata",
		},
		{
			image: tax,
			label: "Tax Filing & Legal",
		},
		{
			image: social_media,
			label: "Social Media Marketing",
		},
		{
			image: manage_payments,
			label: "Manage Payments",
		},
		{
			image: manage_staff,
			label: "Manage Staff",
		},
		{
			image: customer_loyalty,
			label: "Customer Loyalty & promotions",
		},
		{
			image: insurance,
			label: "Insurance",
		},
	];
	return (
		<div className="mobile-view">
			{services.map((service) => (
				<div className="service">
					<img src={service.image} alt="img" />
					<div className="labell">{service.label}</div>
				</div>
			))}
			<div style={{ clear: "both" }}></div>
		</div>
	);
};

function Welcome({
	header_reset,
	homepage_decrement,
	get_api_call,
	userDetails,
}) {
	header_reset();
	useEffect(() => {
		window.scrollTo(0, 0);
		console.log(get_api_call());
	}, []);
	console.log(userDetails);
	return (
		<div>
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
				<UserGuide />
			</div>
			<div className="success-stories1">
				<SuccessStories />
			</div>
			<Footer />
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
	get_api_call,
})(Welcome);
