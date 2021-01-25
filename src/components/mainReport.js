import React, { useState } from "react";
import "../styles/mainReport.css";
import email_icon from "../assets/email.svg";
import download from "../assets/download.svg";
import report from "../assets/report.svg";
import { downloadReport } from "../store/actions";
function MainReport({
	userDetails,
	percentage,
	downloadText,
	setDownloadText,
}) {
	const { full_name, email, business_name } = userDetails.user;
	return (
		<div className="main-report">
			<div className="namaste">Namaste!</div>
			<div className="name">Dear {full_name}</div>
			<div className="business-name">
				Here is the Digital-Score of your business, {business_name}
			</div>
			<div className="report-img">
				<img alt="report" src={report} />
			</div>
			<div className="score">{percentage}%</div>
			<div>
				<span
					className="btns"
					onClick={() => downloadReport(downloadText, setDownloadText)}
				>
					{downloadText}
					<span>
						<img src={download} alt="download" />
					</span>
				</span>
				<span className="btns" onClick={() => alert("emailed report")}>
					Email Report
					<span>
						<img src={email_icon} alt="email" />
					</span>
				</span>
				<div className="outer-btn">
					<div
						className="btns-small"
						onClick={() => downloadReport(downloadText, setDownloadText)}
					>
						{downloadText}
						<span>
							<img src={download} alt="download" />
						</span>
					</div>
				</div>
				<div className="outer-btn">
					<div className="btns-small" onClick={() => alert("emailed report")}>
						Email Report
						<span>
							<img src={email_icon} alt="download" />
						</span>
					</div>
				</div>
			</div>
			<div className="happy">
				We are glad to share a customized report on the digital readiness across
				all aspects of your business. Here is our list of recommendations to
				help you re-imagine and transform your business.
			</div>
		</div>
	);
}

export default MainReport;
