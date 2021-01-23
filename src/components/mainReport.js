import "../styles/mainReport.css";
import email_icon from "../assets/email.svg";
import download from "../assets/download.svg";
import report from "../assets/report.svg";
function MainReport({ userDetails, questionnaire_take }) {
	const { full_name, business_name, email } = userDetails.user;
	const { percentage } = questionnaire_take;
	return (
		<div className="main-report">
			<div className="namaste">Namaste!</div>
			<div className="name">Mr. {full_name}</div>
			<div className="business-name">
				Here is the Digital-Score of your business, {business_name}
			</div>
			<div className="report-img">
				<img alt="report" src={report} />
			</div>
			<div className="score">{percentage}%</div>
			<div>
				<span className="btns">
					Download Report
					<span>
						<img src={download} alt="download" />
					</span>
				</span>
				<span className="btns">
					Email Report
					<span>
						<img src={email_icon} alt="email" />
					</span>
				</span>
				<div className="outer-btn">
					<div className="btns-small">
						Download Report
						<span>
							<img src={download} alt="download" />
						</span>
					</div>
				</div>
				<div className="outer-btn">
					<div className="btns-small">
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
