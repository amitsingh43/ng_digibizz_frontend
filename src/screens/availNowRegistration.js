import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/availNowRegistration.css";
import Footer from "../components/main/footer";
import { show_toast, header_digital_services } from "../store/actions";
import { connect } from "react-redux";

const Logo = ({ state }) => {
	const { description, image, subTitle, title } = state;
	return (
		<div className="logo-content">
			<div className="align">
				<img src={image} className="img-responsive" />
				<div className="mobile-card">
					<div className="title">{title}</div>
					<div className="subTitle">{subTitle}</div>
					<div className="desc">{description}</div>
				</div>
			</div>
		</div>
	);
};

const Button = () => {
	const _submit = () => {
		const arr = [
			{
				id: "1",
				error: "name",
			},
			{
				id: "2",
				error: "mobile number",
			},
			{
				id: "3",
				error: "business name",
			},
			{
				id: "4",
				error: "email",
			},
		];
		var x = arr.find((val) => document.getElementById(val.id).value === "");
		console.log(x);
		if (x) {
			show_toast(`Please enter your ${x.error}`);
		} else {
			// API CALL
		}
	};
	return (
		<div className="button" onClick={_submit}>
			Submit
		</div>
	);
};

const Form = () => {
	const data1 = [
		{ label: "Full Name", type: "text", id: "1" },
		{ label: "Mobile number", type: "phone", id: "2" },
	];
	const data2 = [
		{ label: "Business Name", type: "text", id: "3" },
		{ label: "Email id", type: "email", id: "4" },
	];
	return (
		<div style={{ flex: 1, width: "100%" }}>
			<h1>Inquire now</h1>
			<div className="main-form">
				<div className="input-container">
					{data1.map((sec) => (
						<div>
							<label>
								{sec.label} <span>*</span>
							</label>
							<br />
							{sec.label === "Full Name" && (
								<select>
									<option>MR.</option>
									<option>MRS.</option>
								</select>
							)}
							<input
								className={`${sec.label === "Full Name" ? "name" : ""}`}
								type={sec.type}
								id={sec.id}
							/>
						</div>
					))}
				</div>
				<div className="input-container">
					{data2.map((sec) => (
						<div>
							<label>
								{sec.label}
								<span>*</span>
							</label>
							<br />
							<input type={sec.type} id={sec.id} />
						</div>
					))}
				</div>
			</div>
			<Button />
		</div>
	);
};

const AvailNowRegistration = ({ header_digital_services }) => {
	const location = useLocation();
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_services();
		if (!location.state) {
			history.push("/services");
		}
	}, []);
	if (!location.state) {
		return <h1>Redirecting</h1>;
	}
	return (
		<div>
			<div className="avail-now-reg">
				<div className="section">
					<Logo state={location.state.data} />
				</div>
				<div className="section">{<Form />}</div>
			</div>
			<Footer />
		</div>
	);
};

export default connect(null, { header_digital_services })(AvailNowRegistration);
