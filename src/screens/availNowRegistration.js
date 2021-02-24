import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/availNowRegistration.css";
import TAndC from "../components/termsAndConditions";
import {
	TERMS_AND_CONDITIONS_1,
	TERMS_AND_CONDITIONS_2,
	TERMS_AND_CONDITIONS_DETAILED1,
	TERMS_AND_CONDITIONS_DETAILED2,
	COMPANY_NAME,
} from "../store/strings";
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

const Button = ({
	mrOrMs,
	save_basic_details,
	partner,
	gender,
	url,
	isChecked,
}) => {
	const _submit = () => {
		if (!isChecked) {
			show_toast("Please accept Terms and Conditions");
			return;
		}
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
		<div className="button submit" onClick={_submit}>
			Submit
		</div>
	);
};

const Form = ({
	gender,
	save_basic_details,
	partner,
	url,
	more,
	showmore,
	isChecked,
	setCheck,
}) => {
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
			<div className="col-lg-7 col-xs-12 tc" style={{ width: "auto" }}>
				<input
					id="checkbox"
					className="col-lg-1 col-xs-1"
					type="checkbox"
					defaultChecked={isChecked}
					onChange={() => setCheck(!isChecked)}
				/>
				<div className="col-lg-11 col-xs-11">
					{TERMS_AND_CONDITIONS_1}
					<a
						href="https://www.neogrowth.in"
						target="_blank"
						rel="noreferrer"
						style={{
							textDecoration: "none",
							color: "grey",
						}}
					>
						<span className="site">
							<strong>{COMPANY_NAME}</strong>
						</span>
					</a>{" "}
					{TERMS_AND_CONDITIONS_2}
					<span
						className="more"
						onClick={() => {
							showmore(!more);
							window.scrollTo(0, 0);
						}}
					>
						{more ? "Less-" : "More+"}
					</span>
				</div>
			</div>
			<div style={{ marginTop: 100 }}>
				<Button
					gender={gender}
					url={url}
					isChecked={isChecked}
					partner={partner}
					mrOrMs={mrOrMs}
					save_basic_details={save_basic_details}
				/>
			</div>
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
	const [isChecked, setCheck] = useState(false);
	const [more, showmore] = useState(false);
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
	if (more) {
		return <TAndC showmore={showmore} setCheck={setCheck} />;
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
						more={more}
						isChecked={isChecked}
						setCheck={setCheck}
						showmore={showmore}
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
