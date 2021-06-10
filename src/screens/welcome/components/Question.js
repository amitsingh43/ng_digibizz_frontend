import { Link } from "react-router-dom";

import digital_discovery from "assets/sections/digital_discovery.svg";
import digital_fulfillment from "assets/sections/digital_fulfillment.svg";
import digital_transactions from "assets/sections/digital_transactions.svg";
import digital_operations from "assets/sections/digital_operations.svg";
import digital_engagement from "assets/sections/digital_engagement.svg";


const Question = (props) => {
	const sectionIcons = [
		{ image: digital_discovery, label: "Digital Discovery" },
		{ image: digital_fulfillment, label: "Digital Fulfilment" },
		{ image: digital_transactions, label: "Digital Transactions" },
		{ image: digital_operations, label: "Digital Operations" },
		{ image: digital_engagement, label: "Digital Engagement" },
	];
	return (
		<div className="container">
			<div className="heading">Is your Business Digital Ready?</div>
			<p>
				Find out your digital readiness today in all aspects of your business, with
				the help of our logical algorithm.
			</p>

			<div className="check-digital-score-btn-outer">
				<Link
					style={{ textDecoration: "none" }}
					to="/knowStatus"
					onClick={() => {
						props.homepage_decrement();
					}}
				>
					<div className="check-digital-score-btn">Check your Digital Score</div>
				</Link>
			</div>
			<div className="row section-icons">
				<div className="col-md-1"></div>
				{sectionIcons.map((icon) => (
					<div className="col-xs-4 col-md-2" key={icon.label}>
						<div className="col-md-12 section">
							<div>
								<img src={icon.image} alt="section-icon" />
							</div>
							<div className="label">{icon.label}</div>
						</div>
					</div>
				))}
				<div className=" col-md-1"></div>
			</div>
		</div>
	);
};

export default Question;