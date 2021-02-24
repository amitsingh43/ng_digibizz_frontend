import React, { useState } from "react";
import { header_digital_services, update_lead } from "../store/actions";
import { connect } from "react-redux";
import { services } from "../store/services_mapping";
import "../styles/digitalServices.css";
import Footer from "../components/main/footer";
import { PARTNERS } from "../store/strings";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
let counter = 0;
const TopContent = () => {
	return (
		<div className="col-md-12 top-content">
			<h1>Explore Services</h1>
			<p style={{ wordSpacing: "normal" }}>
				Reimagine and transform your business with a full range of services
				offered by our digital partners, crafted exclusively for you with
				special offers and discounts.
			</p>
		</div>
	);
};

const ServicesCategory = () => {
	return (
		<div className="service-category">
			<div className="one">
				{services.map((service, index) => (
					<div
						key={index}
						className="cat"
						onClick={() => {
							counter = 0;
							window.location.hash = `#${service.tag}`;
						}}
					>
						<img src={service.image} />
						<div className="labell">{service.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export const PartnerCard = (props) => {
	const {
		title,
		description,
		image,
		subTitle,
		backgroundColor,
		user,
		tag,
		update_lead,
		url,
	} = props;
	const history = useHistory();
	const _availNow = () => {
		if (localStorage.getItem("lead_id")) {
			const body = {
				lead_id: localStorage.getItem("lead_id"),
				partner_availed: title,
			};
			update_lead(body);
			window.open(url, "_blank");
		} else {
			history.push({
				pathname: "/reg",
				state: {
					data: {
						title,
						description,
						image,
						subTitle,
						tag,
						url,
						backgroundColor,
					},
				},
			});
		}
	};
	const [viewMore, toggleViewMore] = useState(false);
	return (
		<div
			className=" col-md-5  partner-card "
			style={{ backgroundColor: "#E9F7ED" }}
		>
			<div className=" col-md-4" style={{ backgroundColor: backgroundColor }}>
				<img
					style={{ borderRadius: 10 }}
					className="img-responsive"
					src={image}
					alt="partner"
				/>
			</div>
			<div
				className=" col-md-7"
				style={{ overflowY: viewMore ? "scroll" : "hidden" }}
			>
				<h3>{title}</h3>
				{subTitle && (
					<div className="sub-title">
						{subTitle.map((offer, index) => (
							<div key={index} style={{ marginBottom: 5 }}>
								{offer}
							</div>
						))}
					</div>
				)}
				<p>{description[0]}</p>
				{viewMore &&
					description.map((val, index) => (
						<p
							key={index}
							style={{
								padding: 0,
								margin: 0,
								marginTop: 15,
								marginBottom: 15,
								display: index === 0 ? "none" : "block",
							}}
						>
							{val}
						</p>
					))}
				<span
					style={{
						color: "#28b04b",
						cursor: "pointer",
						display: description.length === 1 ? "none" : "block",
					}}
					onClick={() => {
						history.push("/services/partner");
						// toggleViewMore(!viewMore);
					}}
				>
					{viewMore ? "View Less-" : "View more+"}
				</span>
				<div
					className="avial-now"
					onClick={() => {
						_availNow();
					}}
				>
					{title === "NeoGrowth" ? "Apply now" : "Avail now"}
				</div>
			</div>
		</div>
	);
};

const Services = (props) => {
	const { user, cardData, heading, update_lead } = props;
	return (
		<div className="col-md-12 col-lg-12">
			<div style={{ display: "flex", alignItems: "center" }}>
				<h2>{heading}</h2>
				<div className="hr"></div>
			</div>
			<span></span>
			<div className="row justify-content-md-center partner-main">
				{cardData.map((data, index) => (
					<div key={index}>
						<PartnerCard
							update_lead={update_lead}
							user={user}
							subTitle={data.subTitle}
							image={data.image}
							title={data.title}
							tag={data.tag}
							url={data.url}
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

function DigitalServices({ header_digital_services, user, update_lead }) {
	const location = useLocation();
	const history = useHistory();
	window.onpopstate = function () {
		if (counter) {
			window.history.go(-1);
			counter = 0;
		}
		if (window.location.href.includes("#")) {
			counter++;
		}
	};
	useEffect(() => {
		// window.scrollTo(0, 0);
		header_digital_services();
		var PATH = "";
		for (
			var i = window.location.href.lastIndexOf("=");
			i < window.location.href.length - 1;
			i++
		) {
			if (i === -1) break;
			PATH += window.location.href[i + 1];
		}
		if (location.state || PATH !== "") {
			PATH = location.state ? location.state.id : PATH;
			window.location.href = `#${PATH}`;
		}
	}, []);
	return (
		<div className="services-main">
			<div className="row">
				<TopContent />
				<ServicesCategory />
			</div>
			<div>
				{PARTNERS.map((partner, index) => (
					<div id={partner.tag} className="row sell-online" key={index}>
						<Services
							user={user}
							heading={partner.category}
							cardData={partner.data}
							update_lead={update_lead}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	const { userDetails } = state;
	return {
		user: userDetails.user,
	};
};

export default connect(mapStateToProps, {
	header_digital_services,
	update_lead,
})(DigitalServices);
