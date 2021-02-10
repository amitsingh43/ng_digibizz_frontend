import React from "react";
import { header_digital_services, update_lead } from "../store/actions";
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
				{services.map((service, index) => (
					<div
						key={index}
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
		update_lead,
	} = props;
	const history = useHistory();
	const _availNow = () => {
		if (localStorage.getItem("lead_id")) {
			const body = {
				lead_id: localStorage.getItem("lead_id"),
				partner_availed: title,
			};
			update_lead(body);
		} else {
			history.push({
				pathname: "/reg",
				state: {
					data: { title, description, image, subTitle, tag },
				},
			});
		}
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
						}
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
	useEffect(() => {
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

export default connect(mapStateToProps, {
	header_digital_services,
	update_lead,
})(DigitalServices);
