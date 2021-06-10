import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { header_digital_status, get_master_data, add_error } from 'store/actions';
import { post_user_details } from 'screens/questionnaire/store/actions';
import 'styles/home.css';
import ContestTAndC from 'components/contestTAndC';
import TAndC from 'components/termsAndConditions';
import OTPInput from "components/OTPInput";

import {
	TELL_ABOUT_YOU,
	TELL_ABOUT_YOU_DESC,
	TERMS_AND_CONDITIONS_2,
	COMPANY_NAME,
	TERMS_AND_CONDITIONS_1,
} from 'store/strings';
import contest_banner from 'assets/contest_banner.png';


export default function Home() {
	const dispatch = useDispatch();
	const masterData = useSelector((state) => state.masterData);
	const { cities, industries, gender } = masterData;

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(header_digital_status());
		dispatch(get_master_data());
	}, []);
	

	const sel = document.getElementById('city');
	const text = sel ? sel.options[sel.selectedIndex].text : null;

	const history = useHistory();

	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [mobile, setMobile] = useState(null);
	const [otp, setOTP] = useState(null);
	const [referralCode, setReferralCode] = useState(null);
	const [city, setCity] = useState(null);
	const [industry, setIndustry] = useState(null);
	const [businessName, setBusinessName] = useState(null);
	const [isChecked, setCheck] = useState(false);
	const [more, showmore] = useState(false);
	const [mrOrMs, setMrOrMs] = useState(null);
	const [otherCity, setOtherCity] = useState('');

	if (localStorage.getItem('report')) {
		history.push('/report');
		return <h1>Redirecting</h1>;
	}

	if (localStorage.getItem('lead_id')) {
		history.push('/questionnaire/discovery');
		return <h1>Redirecting</h1>;
	}

	const Navigate = () => {
		history.push('/questionnaire/discovery');
	};

	const submitLead = async () => {
		if (!isChecked) {
			dispatch(add_error('Please accept Terms and conditions'));
			return;
		} else {
			_next();
		}
	};

	const _next = () => {
		var NumberRegex = /^[0-9]*$/;
		var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var nameRegex = /^[a-zA-Z ]+$/;

		if (!mobile || mobile.length !== 10 || !NumberRegex.test(mobile) || mobile[0] === '0') {
			dispatch(add_error('Please enter a valid mobile number'));
			return;
		} else if (!otp || otp.length !== 6) {
			dispatch(add_error('Please enter a valid OTP'));
			return;
		} else if (!name || name.length === 0) {
			dispatch(add_error('Please enter your full name'));
			return;
		} else if (!nameRegex.test(name)) {
			dispatch(add_error('Please enter a valid name'));
			return;
		} else if (!businessName || businessName.length === 0) {
			dispatch(add_error('Please enter a valid Business Name'));
			return;
		}
		if (!industry) {
			dispatch(add_error('Please select your industry'));
			return;
		}
		if (!city) {
			dispatch(add_error('Please select your city'));
			return;
		}
		if (otherCity === '' && text === 'Other') {
			dispatch(add_error('Please specify your city.'));
			return;
		}
		if (!email) {
			dispatch(add_error('Please enter an email address'));
			return;
		}
		if (!emailRegex.test(email)) {
			dispatch(add_error('Please enter a valid email address'));
			return;
		}
		var GENDER = gender[0]._id ? gender[0]._id : '';
		const body = {
			cities_master_id: city,
			industry_master_id: industry,
			full_name: name,
			mobile: mobile,
			business_name: businessName,
			gender_master_id: !mrOrMs ? GENDER : mrOrMs,
			referral_code: referralCode,
			other_city: otherCity,
			email,
		};
		dispatch(post_user_details(body, Navigate));
	};

	if (more) {
		return <TAndC showmore={showmore} setCheck={setCheck} />;
	}

	return (
		<div>
			<div className="home-container">
				<div className="mandatory">
					<span>* </span> All fields are mandatory
				</div>
				<div className="row row1">
					<div className="col-lg-3 col-xs-12 about">
						<h1>
							{TELL_ABOUT_YOU}
							{/* {homepageCounter === 2 && TELL_ABOUT_BUSINESS} */}
						</h1>
						<p>
							{TELL_ABOUT_YOU_DESC}
							{/* {homepageCounter === 2 && TELL_ABOUT_BUSINESS_DESC} */}
						</p>
						<img src={contest_banner} className="contest-banner" alt="banner" />
					</div>
					<div className="col-lg-2"></div>
					<div className="mandatory-small">
						<span>* </span> All fields are mandatory
					</div>
					<div className="col-lg-2  form" style={{ marginLeft: 15 }}>
						<div className="heading">
							Mobile Number<span>*</span>
						</div>
						{/* <div className="number-wrapper">
							<input
								id="phone"
								type="phone"
								className="col-xs-12"
								value={mobile}
								onChange={(e) => {
									const value = e.target.value.replace(/\D/g, '');
									if (value.length <= 10) {
										setMobile(value);
										localStorage.setItem('mobile', value);
									}
								}}
							/>
							<span className="send-otp" onClick={handleOTP}>
								{otpState.text}
							</span>
						</div> */}
						<OTPInput setValue={setMobile} value={mobile}/>
						<div>
							<div className="heading">
								OTP<span>*</span>
							</div>
							<input
								id="otp"
								type="phone"
								className="col-xs-12"
								value={otp}
								onChange={(e) => {
									const value = e.target.value.replace(/\D/g, '');
									if (value.length <= 6) {
										setOTP(value);
										localStorage.setItem('otp', value);
									}
								}}
							/>
							<div style={{ marginTop: 40 }}></div>
							<div className="heading">
								Business Name<span>*</span>
							</div>
							<input
								id="business-name"
								type="text"
								className="col-xs-12"
								value={businessName}
								onChange={(e) => setBusinessName(e.target.value)}
							/>
							{/* <div style={{ marginTop: 100 }}></div> */}
						</div>
						<div className="annual">
							<div style={{ marginTop: 40 }}></div>
							<div className="heading">
								City<span>*</span>
							</div>
							<select
								id="city"
								onChange={(e) => {
									setCity(e.target.value);
									localStorage.setItem(
										'cityName',
										cities.find((val) => val._id === e.target.value).name
									);
								}}
							>
								<option value={null} selected disabled hidden>
									Select
								</option>
								{cities.map((city, index) => (
									<option value={city._id} key={index}>
										{city.name}
									</option>
								))}
							</select>
							{text === 'Other' && (
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
							<div style={{ marginTop: 20 }}></div>
						</div>
					</div>
					<div className="col-lg-1"></div>
					<div className="col-lg-2 form" style={{ marginLeft: 15 }}>
						<div>
							<div className="heading">
								Full Name<span>*</span>
							</div>
							<select id="mr-or-mrs" onChange={(e) => setMrOrMs(e.target.value)}>
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
								onChange={(e) => {
									setName(e.target.value);
									localStorage.setItem('name', e.target.value);
								}}
							/>
							<div className="annual">
								<div className="heading" style={{ marginTop: 40 }}>
									Industry<span>*</span>
								</div>
								<select id="industry" onChange={(e) => setIndustry(e.target.value)}>
									<option value="" selected disabled hidden>
										Select
									</option>
									{industries.map((industry, index) => (
										<option value={industry._id} key={index}>
											{industry.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div>
							<div className="heading" style={{ marginTop: 20 }}>
								Email id <span>*</span>
							</div>
							<input
								type="text"
								id="referral"
								readOnly
								onFocus={(e) => e.target.removeAttribute('readonly')}
								autoComplete="off"
								className="col-xs-12"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<div style={{ marginTop: 40 }}></div>
							<div>
								<div className="heading" style={{ marginTop: 20 }}>
									Referral Code <span style={{ color: 'grey' }}>(optional)</span>
								</div>
								<input
									type="text"
									id="referral"
									readOnly
									onFocus={(e) => e.target.removeAttribute('readonly')}
									autoComplete="off"
									className="col-xs-12"
									value={referralCode}
									onChange={(e) => setReferralCode(e.target.value)}
								/>

								<div style={{ marginTop: 40 }}></div>
							</div>
						</div>
					</div>
				</div>
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
							<a href="https://www.neogrowth.in" target="_blank" rel="noreferrer">
								<span className="site">
									<strong>{COMPANY_NAME}</strong>
								</span>
							</a>
							{TERMS_AND_CONDITIONS_2}
							<span
								className="more"
								onClick={() => {
									showmore(!more);
									window.scrollTo(0, 0);
								}}
							>
								{more ? 'Less-' : 'More+'}
							</span>
						</div>
					</div>
				</div>
				<div className="row row3">
					<div className="col-lg-5"></div>
					<div className="col-lg-3">
						<div className="outer-button">
							<a
								id="register"
								href=""
								onClick={(e) => {
									e.preventDefault();
									submitLead();
								}}
								style={{ display: 'block' }}
							>
								<div className="button">Register</div>
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<ContestTAndC />
				</div>
			</div>
		</div>
	);
}