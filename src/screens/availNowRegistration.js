import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/availNowRegistration.css";
import Footer from "../components/main/footer";
import {
	show_toast,
	header_digital_services,
	get_gender,
	save_basic_details,
} from "../store/actions";
import { connect } from "react-redux";

const Logo = ({ state }) => {
	const { description, image, subTitle, title, backgroundColor } = state;
	return (
		<div className="logo-content">
			<div className="align">
				<div style={{ backgroundColor, borderRadius: 20 }}>
					<img
						style={{ backgroundColor, borderRadius: 20 }}
						src={image}
						className="img-responsive"
					/>
				</div>
				<div className="mobile-card">
					<div className="title">{title}</div>
					<div className="subTitle">{subTitle}</div>
					<div className="desc">{description[0]}</div>
				</div>
			</div>
		</div>
	);
};

const Button = ({ mrOrMs, save_basic_details, partner, gender, url }) => {
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
		if (document.getElementById("2").value.length !== 10) {
			show_toast(`Please enter a valid mobile number`);
			return;
		}
		if (x) {
			show_toast(`Please enter your ${x.error}`);
		} else {
			// API CALL
			var genderId =
				gender.length > 0 && mrOrMs === "" ? gender[0]._id : mrOrMs;
			const body = {
				full_name: document.getElementById("1").value,
				mobile: document.getElementById("2").value,
				business_name: document.getElementById("3").value,
				email: document.getElementById("4").value,
				gender_master_id: genderId,
				partner_availed: partner,
			};
			save_basic_details(body);
			window.open(url, "_blank");
		}
	};
	return (
		<div className="button" onClick={_submit}>
			Submit
		</div>
	);
};

const Form = ({ gender, save_basic_details, partner, url }) => {
	const data1 = [
		{ label: "Full Name", type: "text", id: "1" },
		{ label: "Mobile number", type: "phone", id: "2" },
	];
	const data2 = [
		{ label: "Business Name", type: "text", id: "3" },
		{ label: "Email id", type: "email", id: "4" },
	];
	const [mrOrMs, setMrOrMs] = useState("");
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
								<select
									// id="mr-or-mrs"
									onChange={(e) => setMrOrMs(e.target.value)}
								>
									{gender.length > 0 && (
										<option
											value="nilhtyvtvw5sh-mabht5aa"
											selected
											disabled
											hidden
										>
											Mr.
										</option>
									)}
									{gender.map((gen) => (
										<option value={gen._id}>{gen.name}</option>
									))}
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
			<Button
				gender={gender}
				url={url}
				partner={partner}
				mrOrMs={mrOrMs}
				save_basic_details={save_basic_details}
			/>
		</div>
	);
};

const AvailNowRegistration = ({
	header_digital_services,
	get_gender,
	gender,
	save_basic_details,
}) => {
	const location = useLocation();
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_services();
		if (!location.state) {
			history.push("/services");
		}
		get_gender();
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
				<div className="section">
					<Form
						gender={gender}
						partner={location.state.data.title}
						url={location.state.data.url}
						save_basic_details={save_basic_details}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { gender } = state.masterData;
	return {
		gender,
	};
};

export default connect(mapStateToProps, {
	header_digital_services,
	get_gender,
	save_basic_details,
})(AvailNowRegistration);
