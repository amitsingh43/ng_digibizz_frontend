import { header_digital_services } from "../store/actions";
import { connect } from "react-redux";
import { services } from "../store/services_mapping";
import "../styles/digitalServices.css";
import Footer from "../components/main/footer";
import { PARTNERS } from "../store/strings";
const TopContent = () => {
	return (
		<div className="col-md-12 top-content">
			<h1>Explore Services</h1>
		</div>
	);
};

const ServicesCategory = () => {
	return (
		<div className="service-category">
			<div className="one">
				{services.map((service) => (
					<div
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
	const { title, description, image, subTitle, backgroundColor } = props;
	console.log(image);
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
				<div className="avial-now">Avail now</div>
			</div>
		</div>
	);
};

const Services = (props) => {
	const cardData = props.cardData;
	const heading = props.heading;
	return (
		<div className="col-md-12 col-lg-12">
			<div style={{ display: "flex", alignItems: "center" }}>
				<h2>{heading}</h2>
				<div className="hr"></div>
			</div>
			<span></span>
			<div className="row justify-content-md-center partner-main">
				{cardData.map((data) => (
					<div>
						<PartnerCard
							subTitle={data.subTitle}
							image={data.image}
							title={data.title}
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

function DigitalServices({ header_digital_services }) {
	header_digital_services();
	return (
		<div className="services-main">
			<div className="row">
				<TopContent />
				<ServicesCategory />
			</div>
			<div>
				{PARTNERS.map((partner) => (
					<div id={partner.tag} className="row sell-online">
						<Services heading={partner.category} cardData={partner.data} />
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default connect(null, { header_digital_services })(DigitalServices);
