import React from "react";
import "../styles/understandReport.css";
import Card from "../components/card";
import digital_discovery from "../assets/sections/digital_discovery.svg";
import digital_fulfillment from "../assets/sections/digital_fulfillment.svg";
import digital_transactions from "../assets/sections/digital_transactions.svg";
import digital_operations from "../assets/sections/digital_operations.svg";
import digital_engagement from "../assets/sections/digital_engagement.svg";

function UnderstandReport({ section_results }) {
	const cardData = [
		{
			title: "Digital Discovery",
			desc:
				"Evaluates your digital readiness & explores the different digital platforms you need to be on to gain maximum presence.",
			image: digital_discovery,
		},
		{
			title: "Digital Fulfillment",
			desc:
				"Recommends the best practices to be adopted for the best buyer experience such as partnerships with delivery platforms. ",
			image: digital_fulfillment,
		},
		{
			title: "Digital Transactions",
			desc:
				"Understands your current transaction process and provides key insights into the best digital financial instruments. ",
			image: digital_transactions,
		},
		{
			title: "Digital Operations",
			desc:
				"Audits your operating model and suggests digital points of interaction for improved customer experience.",
			image: digital_operations,
		},
		{
			title: "Digital Engagement",
			desc:
				"Measures the digital interaction with your customer & recommends your business on the latest emerging technologies.",
			image: digital_engagement,
		},
	];
	return (
		<div className="understand-main">
			<h4>Understand your Digit-o-Meter Score</h4>
			<div className="row card-view">
				{Object.keys(section_results).length > 0 &&
					cardData.map((card) => (
						<Card
							image={card.image}
							title={card.title}
							desc={card.desc}
							score={section_results[card.title]}
						/>
					))}
			</div>
		</div>
	);
}
export default UnderstandReport;
