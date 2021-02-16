import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	get_master_data,
	post_user_details,
	add_error,
} from "../store/actions";
import "../styles/home.css";
import Footer from "../components/main/footer";
import TAndC from "../components/termsAndConditions";

import {
	TELL_ABOUT_YOU,
	TELL_ABOUT_BUSINESS,
	TELL_ABOUT_BUSINESS_DESC,
	TELL_ABOUT_YOU_DESC,
	TERMS_AND_CONDITIONS_2,
	COMPANY_NAME,
	TERMS_AND_CONDITIONS_1,
	TERMS_AND_CONDITIONS_DETAILED1,
	TERMS_AND_CONDITIONS_DETAILED2,
} from "../store/strings";

function Home({
	homepageCounter,
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	get_master_data,
	cities,
	industries,
	turnoverValues,
	post_user_details,
	add_error,
	gender,
}) {
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_status();
		get_master_data();
	}, []);
	var sel = document.getElementById("city");
	var text = sel ? sel.options[sel.selectedIndex].text : null;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [city, setCity] = useState("");
	const [industry, setIndustry] = useState("");
	const [turnover, setTurnover] = useState("");
	const [businessName, setBusinessName] = useState("");
	const history = useHistory();
	const [isChecked, setCheck] = useState(false);
	const [more, showmore] = useState(false);
	const [mrOrMs, setMrOrMs] = useState("");
	const [otherCity, setOtherCity] = useState("");
	if (localStorage.getItem("report")) {
		history.push("/report");
		return <h1>Redirecting</h1>;
	}
	if (localStorage.getItem("lead_id")) {
		history.push("/questionnaire");
		return <h1>Redirecting</h1>;
	}
	const Navigate = () => {
		history.push("/questionnaire");
		_back();
	};

	const submitLead = async () => {
		if (!isChecked) {
			add_error("Please accept Terms and conditions");
			return;
		} else {
			_next();
		}
	};

	const _next = () => {
		if (homepageCounter < 2) {
			var NumberRegex = /^[0-9]*$/;
			var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (name.length === 0) {
				add_error("Please enter your full name");
				return;
			} else if (mobile.length !== 10 || !NumberRegex.test(mobile)) {
				add_error("Please enter a valid mobile number");
				return;
			} else if (email.length === 0 || !emailRegex.test(email)) {
				add_error("Please enter a valid email");
				return;
			}
			homepage_increment();
			window.scrollTo(0, 0);
		} else {
			if (otherCity === "" && text === "Other") {
				add_error("Please specify your city.");
				return;
			}
			if (!/^[A-Z0-9]+$/i.test(businessName)) {
				add_error("Please enter a valid Business Name");
				return;
			}
			var GENDER = gender[0]._id ? gender[0]._id : "";
			const body = {
				cities_master_id: city,
				industry_master_id: industry,
				annual_turnover_master_id: turnover,
				full_name: name,
				email: email,
				mobile: mobile,
				business_name: businessName,
				gender_master_id: mrOrMs === "" ? GENDER : mrOrMs,
				referral_code: referralCode,
				other_city: otherCity,
			};
			post_user_details(body, Navigate);
		}
	};

	const _back = () => {
		homepage_decrement();
	};
	return (
		<div>
			<div className="home-container">
				{more && <TAndC showmore={showmore} />}
				<div className="mandatory">
					<span>* </span> All fields are mandatory
				</div>
				<div className="row row1">
					<div className="col-lg-3 col-xs-12 about">
						<h1>
							{homepageCounter === 1 && TELL_ABOUT_YOU}
							{homepageCounter === 2 && TELL_ABOUT_BUSINESS}
						</h1>
						<p>
							{homepageCounter === 1 && TELL_ABOUT_YOU_DESC}
							{homepageCounter === 2 && TELL_ABOUT_BUSINESS_DESC}
						</p>
					</div>
					<div className="col-lg-2"></div>
					<div className="mandatory-small">
						<span>* </span> All fields are mandatory
					</div>
					<div className="col-lg-2  form" style={{ marginLeft: 15 }}>
						{homepageCounter === 1 && (
							<div>
								<div className="heading">
									Full Name<span>*</span>
								</div>
								<select
									id="mr-or-mrs"
									onChange={(e) => setMrOrMs(e.target.value)}
								>
									{gender.length > 0 && (
										<option selected disabled hidden>
											Mr.
										</option>
									)}
									{gender.map((gen, index) => (
										<option value={gen._id} key={index}>
											{gen.name}
										</option>
									))}
								</select>
								<input
									type="text"
									className="col-xs-12"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<div style={{ marginTop: 100 }}></div>
								<div className="heading">
									Mobile Number<span>*</span>
								</div>
								<input
									id="phone"
									type="phone"
									className="col-xs-12"
									value={mobile}
									onChange={(e) => {
										if (e.target.value.length <= 10) {
											setMobile(e.target.value);
										}
									}}
								/>
								<div style={{ marginTop: 100 }}></div>
							</div>
						)}
						{homepageCounter === 2 && (
							<div className="annual">
								<div className="heading">
									City<span>*</span>
								</div>
								<select id="city" onChange={(e) => setCity(e.target.value)}>
									<option value={null} selected disabled hidden>
										Select
									</option>
									{cities.map((city, index) => (
										<option value={city._id} key={index}>
											{city.name}
											{}
										</option>
									))}
								</select>
								{text === "Other" && (
									<div>
										<div style={{ marginTop: 40 }}></div>
										<div className="heading">
											Please specify city<span>*</span>
										</div>
										<input
											id="other-city"
											type="text"
											className="col-xs-12"
											value={otherCity}
											onChange={(e) => setOtherCity(e.target.value)}
										/>
									</div>
								)}
								<div style={{ marginTop: 40 }}></div>
								<div className="heading">
									Business name<span>*</span>
								</div>
								<input
									id="business-name"
									type="text"
									className="col-xs-12"
									value={businessName}
									onChange={(e) => setBusinessName(e.target.value)}
								/>
								<div style={{ marginTop: 80 }}></div>
							</div>
						)}
					</div>
					<div className="col-lg-1"></div>
					<div className="col-lg-2 form" style={{ marginLeft: 15 }}>
						{homepageCounter === 1 && (
							<div>
								<div className="heading">
									Email ID<span>*</span>
								</div>
								<input
									type="email"
									id="mail"
									className="col-xs-12"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<div className="heading" style={{ marginTop: 100 }}>
									Referral Code{" "}
									<span style={{ color: "grey" }}>(optional)</span>
								</div>
								<input
									type="text"
									id="referral"
									autoComplete="off"
									className="col-xs-12"
									value={referralCode}
									onChange={(e) => setReferralCode(e.target.value)}
								/>
							</div>
						)}

						{homepageCounter === 2 && (
							<div>
								<div className="heading">
									Industry<span>*</span>
								</div>
								<select
									id="industry"
									onChange={(e) => setIndustry(e.target.value)}
								>
									<option value="" selected disabled hidden>
										Select
									</option>
									{industries.map((industry, index) => (
										<option value={industry._id} key={index}>
											{industry.name}
										</option>
									))}
								</select>

								<div style={{ marginTop: 40 }}></div>

								<div className="annual">
									<div style={{ marginTop: 40 }}></div>
									<div className="heading">
										Annual Turnover<span>*</span>
									</div>
									<select
										id="turnover"
										onChange={(e) => setTurnover(e.target.value)}
									>
										<option value="" selected disabled hidden>
											Select
										</option>
										{turnoverValues.map((range, index) => (
											<option value={range._id} key={index}>
												{range.name}
											</option>
										))}
									</select>
								</div>
							</div>
						)}
					</div>
				</div>
				{homepageCounter === 1 && (
					<div className="row row2">
						<div className="col-lg-5" style={{ marginRight: 0 }}></div>
						<div className="col-lg-7 col-xs-12 tc">
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
								>
									<span className="site">
										<strong>{COMPANY_NAME}</strong>
									</span>
								</a>{" "}
								{TERMS_AND_CONDITIONS_2}
								<span className="more" onClick={() => showmore(!more)}>
									{more ? "Less-" : "More+"}
								</span>
							</div>
						</div>
					</div>
				)}
				<div className="row row3">
					<div className="col-lg-5"></div>
					{homepageCounter === 2 && (
						<div className="col-lg-3">
							<div className="outer-button" onClick={_back}>
								<div
									className="button"
									style={{
										backgroundColor: "white",
										borderWidth: 1,
										borderStyle: "double",
										borderColor: "green",
										color: "green",
									}}
								>
									Back
								</div>
							</div>
						</div>
					)}
					<div className="col-lg-3">
						<div className="outer-button">
							<div className="button" onClick={submitLead}>
								{homepageCounter === 1 && "Next"}
								{homepageCounter === 2 && "Check your Digital Score"}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	const { homepageCounter, masterData } = state;
	const { cities, industries, turnoverValues, gender } = masterData;
	return {
		homepageCounter,
		cities,
		industries,
		turnoverValues,
		gender,
	};
};
export default connect(mapStateToProps, {
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	get_master_data,
	post_user_details,
	add_error,
})(Home);
