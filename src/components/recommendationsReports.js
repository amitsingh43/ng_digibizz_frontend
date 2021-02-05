import React from "react";
import "../styles/recommendationReport.css";
import download from "../assets/download.svg";
import { services } from "../store/services_mapping";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { downloadReport, show_toast } from "../store/actions";
import axios from "axios";

const Percetage = (props) => {
	const { image_url } = props;
	console.log(image_url);
	// alert(name);
	return (
		<div className="percentagee ">
			<div className="justify-content-md-center">
				<img src={image_url} />
			</div>
		</div>
	);
};

const RecCard = ({ recommendations }) => {
	const results = recommendations;
	const history = useHistory();
	return (
		<div className="row ">
			{results &&
				results.map((recommendation) => (
					<div className="col-lg-2 col-xs-6 card">
						<Percetage image_url={recommendation.image_url} />
						{recommendation.name}
						<p
							style={{ wordSpacing: 0 }}
							onClick={() =>
								history.push({
									pathname: "/services",
									state: { id: recommendation.category },
								})
							}
						>
							Know more
						</p>
					</div>
				))}
		</div>
	);
};

const DetailView = ({ downloadText, setDownloadText }) => {
	return (
		<div className="container">
			<h4>For more detailed recommendations please download the report.</h4>
			<div className="button-container">
				<div
					className="download-btn"
					onClick={() => downloadReport(downloadText, setDownloadText)}
				>
					{downloadText}
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

function RecommendationReport({
	recommendations,
	setDownloadText,
	downloadText,
}) {
	return (
		<div className="recommend-main">
			<h3>Recommendations</h3>
			<div>
				<RecCard recommendations={recommendations} />
			</div>
			<div>
				<DetailView
					setDownloadText={setDownloadText}
					downloadText={downloadText}
				/>
			</div>
		</div>
	);
}

export default RecommendationReport;
