import React, { useEffect, useState } from "react";
import "../styles/partner.css";
import { connect } from "react-redux";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import {
	header_digital_services,
	update_lead,
	get_master_data,
	save_basic_details,
} from "../store/actions";
import { partnerMapping } from "../store/partner_mapping";
import Catalog from "../assets/partner_page/catalog.png";
import Discount from "../assets/partner_page/discount.png";
import Facebook from "../assets/partner_page/facebook.png";
import Instagram from "../assets/partner_page/instagram.png";
import LinkedIn from "../assets/partner_page/linkedin.png";
import Star from "../assets/partner_page/star.png";
import Twitter from "../assets/partner_page/twitter.png";
import Youtube from "../assets/partner_page/youtube.png";
import YouTube from "../components/common/youtube";

const Form = ({ masterData, url, save_basic_details, title }) => {
	const { cities } = masterData;
	const [data, setData] = useState({
		full_name: null,
		business_name: null,
		mobile: null,
		cities_master_id: null,
		partner_availed: title,
	});
	const [cityName, setCityName] = useState(null);
	return (
		<div className={"partner-form"}>
			<div className={"form-body"}>
				<h3>Inquire Now</h3>
				<h5>Full name</h5>
				<input
					value={data.full_name}
					onChange={(e) =>
						setData((data) => ({ ...data, full_name: e.target.value }))
					}
				/>
				<h5>Business Name</h5>
				<input
					value={data.business_name}
					onChange={(e) =>
						setData((data) => ({ ...data, business_name: e.target.value }))
					}
				/>
				<h5>Mobile Number</h5>
				<input
					value={data.mobile}
					maxLength={10}
					onChange={(e) => setData((data) => ({ ...data, mobile: e.target.value }))}
				/>
				<h5>City</h5>
				<select
					onChange={(e) => {
						setData((data) => ({ ...data, cities_master_id: e.target.value }));
						setCityName(cities.find((city) => (city._id = e.target.value)).name);
					}}
				>
					<option selected disabled>
						{" "}
						Select City
					</option>
					{cities &&
						cities.map((city, index) => (
							<option value={city._id} key={index}>
								{city.name}
							</option>
						))}
				</select>
				<div
					className={"avail-now"}
					onClick={() => save_basic_details(data, url, cityName)}
				>
					Avail Now
				</div>
			</div>
		</div>
	);
};

const PartnerCard = ({ image, offer, backgroundColor, title, carousel }) => {
	const [currentDisplayed, setCurrentDisplay] = useState(0);
	const [showYouTube, toggleYoutube] = useState({ show: false, videoId: null });
	useEffect(() => {
		$(".carousel").carousel({
			interval: 4000,
		});
	}, []);
	return (
		<div className="partner-main-partner-card">
			{showYouTube.show && (
				<YouTube
					videoId={"BcwpX9pzqXY"}
					toggleYoutube={toggleYoutube}
					showYouTube={showYouTube}
				/>
			)}
			<div className="carousel-main">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
					// data-touch="true"
					data-interval="4000"
				>
					<div className="carousel-inner">
						{carousel &&
							carousel.map((item, index) => (
								<div
									onClick={() => {
										if (item.type === "video") {
											toggleYoutube((showYouTube) => ({
												...showYouTube,
												show: true,
												videoId: item.videoId,
											}));
										}
									}}
									style={{
										backgroundImage: `url(${item.source})`,
										cursor: item.type === "video" ? "pointer" : "auto",
									}}
									key={index}
									className={`item  ${
										index === currentDisplayed
											? "active carousel-image"
											: "carousel-image"
									}`}
								>
									{/* <img src={item.source} /> */}
								</div>
							))}
					</div>
					{carousel.length !== 1 && (
						<div className={`row `}>
							<ol className="carousel-indicators">
								{carousel.map((val, index) => (
									<li
										data-target="#myCarousel"
										data-slide-to={index}
										onClick={() => setCurrentDisplay(index)}
										className={currentDisplayed === index ? `active` : ""}
										key={index}
									></li>
								))}
							</ol>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const DataSection = ({ title, show, toggleShow, data, field }) => {
	return (
		<div>
			<div className={"descHeading"} key={title}>
				<h3>{title}</h3>
				<h3
					style={{
						cursor: "pointer",
						textAlign: "end",
						flex: 1,
						fontSize: 19,
						color: "#0070C0",
					}}
					onClick={() => toggleShow({ ...show, [field]: !show[field] })}
				>
					{show[field] ? "View less <" : "View more > "}
				</h3>
			</div>
			<hr style={{ padding: 0, margin: 0, marginBottom: 10 }} />
			<div>
				{field === "description" && (
					<div className={show[field] ? "hidden" : "active"}>
						<div>{data[0]}</div>
					</div>
				)}
				{data.map((val, index) => (
					<div key={index} className={show[field] ? "active" : "hidden"}>
						<div>{val}</div>
					</div>
				))}
			</div>
		</div>
	);
};

const getRating = (rating) => {
	let count = parseInt(rating);
	let rows = [];
	for (let i = 0; i < count; i++) {
		rows.push(<img src={Star} alt={"star"} className={"star-icon"} />);
	}
	return rows;
};

const PartnerDetails = ({
	heading,
	stars,
	subTitle,
	socialMedia,
	title,
	_availNow,
	carouselLength,
}) => {
	const history = useHistory();
	return (
		<div className={"partner-details activeIndicators"}>
			<h3>{title}</h3>
			<div>{stars && <div>{getRating(stars)}</div>}</div>
			<div className={"discountSection"}>
				{" "}
				<img src={Discount} className={"discount-icon"} alt="discount" />
				<span>Available Offers</span>
			</div>
			<div className={"description"}>
				<div>
					<ul>
						{subTitle.map((offer) => (
							<li style={{ lineHeight: 1.8 }}>{offer}</li>
						))}
					</ul>
				</div>
			</div>
			{localStorage.getItem("lead_id") && (
				<div className="partner-main-avail-now">
					<span style={{ cursor: "pointer" }} onClick={_availNow}>
						Avail Now
					</span>
				</div>
			)}
			<div style={{ flexDirection: "row", marginLeft: 10 }}>
				{socialMedia && (
					<div>
						{socialMedia.instagram && (
							<a href={socialMedia.instagram} target="_blank">
								<img className={"social-icon"} src={Instagram} alt="instagram-icon" />
							</a>
						)}
						{socialMedia.facebook && (
							<a href={socialMedia.facebook} target="_blank">
								<img className={"social-icon"} src={Facebook} alt="fb-icon" />
							</a>
						)}
						{socialMedia.twitter && (
							<a href={socialMedia.twitter} target="_blank">
								<img className={"social-icon"} src={Twitter} alt="twitter-icon" />
							</a>
						)}
						{socialMedia.youtube && (
							<a href={socialMedia.youtube} target="_blank">
								<img className={"social-icon"} src={Youtube} alt="yb-icon" />
							</a>
						)}
						{socialMedia.linkedin && (
							<a href={socialMedia.linkedin} target="_blank">
								<img className={"social-icon"} src={LinkedIn} alt="linkedin-icon" />
							</a>
						)}
						{socialMedia.catalog && (
							<a
								onClick={(e) => {
									e.preventDefault();
									history.push(`/services/${heading}/${title}/catalog`);
								}}
								target="_blank"
							>
								<img className={"social-icon"} src={Catalog} alt="pdf-icon" />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

const Partner = ({
	user,
	header_digital_services,
	update_lead,
	masterData,
	get_master_data,
	save_basic_details,
}) => {
	const location = useLocation();
	const history = useHistory();
	const [show, toggleShow] = useState({
		description: false,
		testimonials: false,
		about: false,
	});
	var { partner, category } = useParams();
	var data = partnerMapping.find(
		(val) =>
			val.name === partner.toLowerCase().split(".").join(" ") &&
			val.heading === category
	);
	if ((!location || !location.state) && !data) {
		return <Redirect to="/services" />;
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_services();
		if (masterData.cities.length === 0) {
			get_master_data();
		}
	}, []);

	var {
		title,
		description,
		image,
		subTitle,
		tag,
		url,
		backgroundColor,
		stars,
		socialMedia,
		testimonials,
		aboutUs,
		carousel,
	} = data.partner;
	var { heading } = data;

	const _availNow = () => {
		if (localStorage.getItem("lead_id")) {
			const body = {
				lead_id: localStorage.getItem("lead_id"),
				partner_availed: title,
			};
			update_lead(body);
			if (title != "NeoGrowth") {
				window.open(url, "_blank");
			}
		} else {
			let updatedTitle = title.split(".").join(" ");
			history.push(`/services/${heading}/${updatedTitle}/reg`);
		}
	};

	return (
		<div className={"servicesPartnerPage"}>
			<div className="partner-main" style={{ minHeight: "99vh", flex: 2.5 }}>
				<div className="partner-main-title">
					<span
						style={{ color: "grey", fontWeight: "normal", cursor: "pointer" }}
						onClick={() => history.goBack()}
					>{`Explore services  >>  ${heading}  >>`}</span>
					<span>{`  ${title}`}</span>
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						// justifyContent: "center",
						marginTop: 30,
					}}
					className={"partner-section"}
				>
					<PartnerCard
						image={image}
						title={title}
						offer={subTitle}
						backgroundColor={backgroundColor}
						carousel={carousel}
					/>
					<PartnerDetails
						heading={heading}
						title={title}
						subTitle={subTitle}
						stars={stars}
						socialMedia={socialMedia}
						_availNow={_availNow}
						carouselLength={carousel.length}
					/>
				</div>
				{!localStorage.getItem("lead_id") && (
					<div style={{ flex: 1 }} className={"form-in-mobile"}>
						<Form
							masterData={masterData}
							url={url}
							save_basic_details={save_basic_details}
							title={title}
						/>
					</div>
				)}
				<div className={"dataSection"}>
					<div id={"description"}>
						{description && (
							<DataSection
								title={"Description"}
								data={description}
								show={show}
								toggleShow={toggleShow}
								field={"description"}
							/>
						)}
					</div>
					<div id={"testimonials"}>
						{testimonials && (
							<DataSection
								title={"Testimonials"}
								data={testimonials}
								show={show}
								toggleShow={toggleShow}
								field={"testimonials"}
							/>
						)}
					</div>
					<div id={"about"}>
						{aboutUs && (
							<DataSection
								title={"About"}
								data={aboutUs}
								show={show}
								toggleShow={toggleShow}
								field={"about"}
							/>
						)}
					</div>
				</div>
			</div>
			{!localStorage.getItem("lead_id") && (
				<div style={{ flex: 1 }} className={"form-in-desktop"}>
					<Form
						masterData={masterData}
						url={url}
						save_basic_details={save_basic_details}
						title={title}
					/>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	const { user, masterData } = state;
	return {
		user,
		masterData,
	};
};

export default connect(mapStateToProps, {
	header_digital_services,
	update_lead,
	get_master_data,
	save_basic_details,
})(Partner);
