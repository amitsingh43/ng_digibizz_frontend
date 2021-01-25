import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import {
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	set_user_details,
	get_master_data,
	post_user_details,
} from "../store/actions";
import "../styles/home.css";
import Footer from "../components/main/footer";

import {
	TELL_ABOUT_YOU,
	TELL_ABOUT_BUSINESS,
	TELL_ABOUT_BUSINESS_DESC,
	TELL_ABOUT_YOU_DESC,
	TERMS_AND_CONDITIONS_2,
	COMPANY_NAME,
	TERMS_AND_CONDITIONS_1,
	TERMS_AND_CONDITIONS_DETAILED,
} from "../store/strings";

function Home({
	homepageCounter,
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	set_user_details,
	get_master_data,
	cities,
	industries,
	turnoverValues,
	post_user_details,
}) {
	useEffect(() => {
		window.scrollTo(0, 0);
		get_master_data();
	}, []);
	header_digital_status();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [city, setCity] = useState("");
	const [industry, setIndustry] = useState("");
	const [turnover, setTurnover] = useState("");
	const [businessName, setBusinessName] = useState("");
	const history = useHistory();
	const [isChecked, setCheck] = useState(false);
	const [more, showmore] = useState(false);
	if (localStorage.getItem("report")) {
		history.push("/report");
		return <h1>Redirecting</h1>;
	}
	if (localStorage.getItem("lead_id")) {
		history.push("/questionnaire");
		return <h1>Redirecting</h1>;
	}
	const Navigate = () => {
		const user = set_user_details({
			name: name,
			email: email,
			mobile: mobile,
			city: city,
			industry: industry,
			turnover: turnover,
			businessName: businessName,
		});
		history.push("/questionnaire");
		_back();
	};

	const submitLead = async () => {
		if (!isChecked) {
			alert("Please accept Terms and conditions");
			return;
		} else {
			_next();
		}
	};

	const _next = () => {
		if (homepageCounter < 2) {
			if (name.length === 0 && mobile.length !== 10 && email.length === 0) {
				alert("please enter the fields");
				return;
			}
			homepage_increment();
			window.scrollTo(0, 0);
		} else {
			const body = {
				cities_master_id: city,
				industry_master_id: industry,
				annual_turnover_master_id: turnover,
				full_name: name,
				email: email,
				mobile: mobile,
				business_name: businessName,
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
									{cities.map((city) => (
										<option value={city._id}>{city.name}</option>
									))}
								</select>
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
									{industries.map((industry) => (
										<option value={industry._id}>{industry.name}</option>
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
										{turnoverValues.map((range) => (
											<option value={range._id}>{range.name}</option>
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
								{!more && (
									<span className="more" onClick={() => showmore(!more)}>
										More+
									</span>
								)}
								{more && (
									<p>
										{TERMS_AND_CONDITIONS_DETAILED}
										<span className="more" onClick={() => showmore(!more)}>
											Less-
										</span>
									</p>
								)}
							</div>
						</div>
					</div>
				)}
				<div className="row row3">
					<div className="col-lg-5" style={{ marginRight: 30 }}></div>
					{/* {homepageCounter === 2 && (
					<Link>
						<div className="col-lg-3 col-xs-12">
							<div onClick={_back}>
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
					</Link>
				)} */}
					<div className="col-lg-3">
						{/* <Link> */}
						<div className="outer-button">
							<div className="button" onClick={submitLead}>
								{homepageCounter === 1 && "Next"}
								{homepageCounter === 2 && "Check your digital score"}
							</div>
						</div>
						{/* </Link> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	const { homepageCounter, masterData } = state;
	const { cities, industries, turnoverValues } = masterData;
	return {
		homepageCounter,
		cities,
		industries,
		turnoverValues,
	};
};
export default connect(mapStateToProps, {
	homepage_increment,
	homepage_decrement,
	header_digital_status,
	set_user_details,
	get_master_data,
	post_user_details,
})(Home);
