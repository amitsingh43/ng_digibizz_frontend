import React from "react";
import { header_digital_services } from "../store/actions";
import { connect } from "react-redux";
import { services } from "../store/services_mapping";
import "../styles/digitalServices.css";
import Footer from "../components/main/footer";
import { PARTNERS } from "../store/strings";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
const TopContent = () => {
	return (
		<div className="col-md-12 top-content">
			<h1>Explore Services</h1>
		</div>
	);
};

const ServicesCategory = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="service-category">
			<div className="one">
				{services.map((service) => (
					<div
						className="cat"
						onClick={() => (window.location.hash = `#${service.tag}`)}
					>
						<img src={service.image} />
						<div className="labell">{service.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};

const PartnerCard = (props) => {
	const {
		title,
		description,
		image,
		subTitle,
		backgroundColor,
		user,
		tag,
	} = props;
	const history = useHistory();
	const _availNow = () => {
		if (user === null) {
			history.push({
				pathname: "/reg",
				state: {
					data: { title, description, image, subTitle, tag },
				},
			});
			return;
		}
		alert("CLicked");
	};
	return (
		<div className=" col-md-5  partner-card ">
			<div className=" col-md-4" style={{ backgroundColor: backgroundColor }}>
				<img
					style={{ borderRadius: 10 }}
					className="img-responsive"
					src={image}
					alt="partner"
				/>
			</div>
			<div className=" col-md-7">
				<h3>{title}</h3>
				{subTitle && <div className="sub-title">{subTitle}</div>}
				<p>{description}</p>
				<div
					className="avial-now"
					onClick={() => {
						if (title === "NeoGrowth") {
							var win = window.open(
								"https://www.neogrowth.in/register-form/",
								"_blank"
							);
							win.focus();
							return;
						}
						_availNow();
					}}
				>
					Avail now
				</div>
			</div>
		</div>
	);
};

const Services = (props) => {
	const { user, cardData, heading } = props;
	return (
		<div className="col-md-12 col-lg-12">
			<div style={{ display: "flex", alignItems: "center" }}>
				<h2>{heading}</h2>
				<div className="hr"></div>
			</div>
			<span></span>
			<div className="row justify-content-md-center partner-main">
				{cardData.map((data) => (
					<div>
						<PartnerCard
							user={user}
							subTitle={data.subTitle}
							image={data.image}
							title={data.title}
							tag={data.tag}
							description={data.description}
							backgroundColor={data.backgroundColor}
						/>
						<div className="col-md-1"></div>
					</div>
				))}
			</div>
		</div>
	);
};

function DigitalServices({ header_digital_services, user }) {
	const location = useLocation();
	useEffect(() => {
		header_digital_services();
		if (location.state) {
			window.location.href = `#${location.state.id}`;
		}
	}, []);
	return (
		<div className="services-main">
			<div className="row">
				<TopContent />
				<ServicesCategory />
			</div>
			<div>
				{PARTNERS.map((partner) => (
					<div id={partner.tag} className="row sell-online">
						<Services
							user={user}
							heading={partner.category}
							cardData={partner.data}
						/>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	const { userDetails } = state;
	return {
		user: userDetails.user,
	};
};

export default connect(mapStateToProps, { header_digital_services })(
	DigitalServices
);
