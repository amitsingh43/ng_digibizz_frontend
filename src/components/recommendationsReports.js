import "../styles/recommendationReport.css";
import download from "../assets/download.svg";
import social_media from "../assets/services/social_media.svg";
import { services } from "../store/services_mapping";

const Percetage = (props) => {
	return (
		<div className="percentagee ">
			<div className="justify-content-md-center">
				<img src={props.img} />
			</div>
		</div>
	);
};

const RecCard = ({ recommendations }) => {
	const results = recommendations[0];
	return (
		<div className="row ">
			{results &&
				results.map((recommendation) => (
					<div className="col-lg-2 col-xs-6 card">
						<Percetage
							img={require("../assets/services/" +
								recommendation.category +
								".svg")}
						/>
						{recommendation.name}
					</div>
				))}
			{/* <div className="col-lg-2 col-xs-6 card">
				<Percetage img={social_media} />
				Your presence on the web is quite good. You may also consider building
				Social Media page about your business and product catalogue on
				FaceBook,Instagram.
				<p>Know more</p>
			</div>
			<div className="col-lg-2 col-xs-6 card">
				<Percetage img={delivery_services} />
				We see that you are not delivering currently while your neighbourhood
				restaurants are. Start delivering through Swiggy, Zomato and Dunzo.
				Customers love to order food through these apps.
				<p>Know more</p>
			</div>
			<div className="col-lg-2 col-xs-6 card">
				<Percetage img={website} />
				In the 'new normal' world, all businesses are going the digital way. We
				recommend you extensive use of 1 QR code platforms.
				<p>Know more</p>
			</div>
			<div className="col-lg-2 col-xs-6 card">
				<Percetage img={sell_online} />
				Taking care of your customer’s preference is essential in F&B business.
				We recommend you to engage constantly with them
				<p>Know more</p>
			</div>
			<div className="col-lg-2 col-xs-6 card">
				{" "}
				<Percetage img={manage_staff} />
				We see that you have digitalized most of your business operations. We
				also recommend you to maintain a detailed database.
				<p>Know more</p>
			</div> */}
		</div>
	);
};

const DetailView = () => {
	return (
		<div className="container">
			<h4>For more detailed recommendations please download the report.</h4>
			<div className="button-container">
				<div className="download-btn">
					Download Report
					<img src={download} alt="download" />
				</div>
			</div>
			<p style={{ fontWeight: "normal" }}>
				Explore our services at{" "}
				<span>
					<a
						href="https://www.neogrowth.in/partners"
						target="_blank"
						rel="noreferrer"
					>
						www.neogrowth.in/partners
					</a>
				</span>
			</p>
		</div>
	);
};

function RecommendationReport({ recommendations }) {
	return (
		<div className="recommend-main">
			<h3>Recommendations</h3>
			<div>
				<RecCard recommendations={recommendations} />
			</div>
			<div>
				<DetailView />
			</div>
		</div>
	);
}

export default RecommendationReport;
