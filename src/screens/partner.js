import React, { useEffect } from "react";
import "../styles/partner.css";
import { connect } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { header_digital_services, update_lead } from "../store/actions";

const PartnerCard = ({ image, offer, backgroundColor, title }) => {
	return (
		<div className="partner-main-partner-card">
			<div
				className="partner-main-partner-card-partner"
				style={{
					backgroundColor,
				}}
			>
				<img src={image} alt="partner" />
			</div>
			<div className="partner-main-partner-card-offer">
				<div
					className="partner-main-partner-card-offer-title"
					style={{ justifySelf: "flex-start", color: "black", paddingTop: 20 }}
				>
					{title}
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						height: "70%",
						padding: 20,
					}}
				>
					{offer}
				</div>
			</div>
		</div>
	);
};

const Partner = ({ user, header_digital_services, update_lead }) => {
	const location = useLocation();
	const history = useHistory();
	if (!location || !location.state) {
		return <Redirect to="/services" />;
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_services();
	}, []);
	var {
		title,
		description,
		image,
		subTitle,
		tag,
		url,
		backgroundColor,
	} = location.state.data;
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
	return (
		<div className="partner-main">
			<div className="partner-main-title">
				<span
					style={{ color: "grey", fontWeight: "normal", cursor: "pointer" }}
					onClick={() => history.goBack()}
				>{`Explore services  >>  ${location.state.data.heading}  >>`}</span>
				<span>{`  ${location.state.data.title}`}</span>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				<PartnerCard
					image={location.state.data.image}
					title={location.state.data.title}
					offer={location.state.data.subTitle}
					backgroundColor={location.state.data.backgroundColor}
				/>
			</div>
			<div style={{ marginTop: 70 }}>
				{location.state.data.description.map((content) => (
					<p>{content}</p>
				))}
			</div>
			<div className="partner-main-avail-now">
				<span style={{ cursor: "pointer" }} onClick={_availNow}>
					Avail Now
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { user } = state;
	return {
		user,
	};
};

export default connect(mapStateToProps, {
	header_digital_services,
	update_lead,
})(Partner);
