import "../styles/mainReport.css";
import email_icon from "../assets/email.svg";
import download from "../assets/download.svg";
import report from "../assets/report.svg";
import axios from "axios";
function MainReport({ userDetails, percentage, lead_id }) {
	const { name, email, businessName } = userDetails.user;
	const downloadReport = () => {
		console.log("STARTED");
		const method = "GET";
		const url =
			"https://uat.advancesuite.in:3061/api/download_report?lead_id=" + lead_id;
		axios
			.request({
				url,
				method,
				responseType: "blob", //important
			})
			.then(({ data }) => {
				const downloadUrl = window.URL.createObjectURL(new Blob([data]));
				const link = document.createElement("a");
				link.href = downloadUrl;
				link.setAttribute("download", "file.pdf"); //any other extension
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
	};
	return (
		<div className="main-report">
			<div className="namaste">Namaste!</div>
			<div className="name">Mr. {name}</div>
			<div className="business-name">
				Here is the Digital-Score of your business, {businessName}
			</div>
			<div className="report-img">
				<img alt="report" src={report} />
			</div>
			<div className="score">{percentage}%</div>
			<div>
				<span className="btns" onClick={downloadReport}>
					Download Report
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
					<div className="btns-small" onClick={() => alert("Downloading")}>
						Download Report
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
