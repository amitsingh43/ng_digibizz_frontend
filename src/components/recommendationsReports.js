import React from "react";
import "../styles/recommendationReport.css";
import download from "../assets/download.svg";
import { useHistory } from "react-router-dom";
import { downloadReport } from "../store/actions";

const Percetage = (props) => {
	const { image_url } = props;
	return (
		<div className="percentagee ">
			<div className="justify-content-md-center">
				<img src={image_url} alt="service" />
			</div>
		</div>
	);
};

const RecCard = ({ recommendations }) => {
	const results = recommendations;
	const history = useHistory();
	const excludeReports = [
		"delivery_services",
		"digital_khata",
		"manage_payments",
	];
	return (
		<div className="row ">
			{results &&
				results.map((recommendation, index) => (
					<div className="col-lg-2 col-xs-6 card" key={index}>
						<Percetage image_url={recommendation.image_url} />
						<div style={{ height: "fit-content" }}>{recommendation.name}</div>
						<p
							style={{
								wordSpacing: 0,
								fontSize: 17,
								display: excludeReports.includes(recommendation.category)
									? "none"
									: "block",
							}}
							onClick={() =>
								history.push({
									pathname: "/services",
									state: { id: recommendation.category },
								})
							}
						>
							<br />
							Know more
							<br />
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
			{/* <p style={{ fontWeight: "normal" }}>
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
			</p> */}
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
