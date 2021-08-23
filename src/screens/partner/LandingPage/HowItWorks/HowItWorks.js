import React from "react";
import OnlineApplication from "assets/images/onlineapplication.png";
import InstantApproval from "assets/images/instantapproval.png";
import DoorStep from "assets/images/doorstep.png";
import GetFunds from "assets/images/getfunds.png";
import Arrow from "assets/images/arrow.png";
import Underline from "assets/images/underline.png";

export default function KeyBenefits() {
	return (
		<div className={"infoArea"} style={{ backgroundColor: "#EAF7ED" }}>
			<div className={"sectionTitle"}>
				<div className={"titleWithUnderline"}>
					Simplest & Super-Fast Process
					<img src={Underline} />
				</div>
			</div>
			<div className={"row infoPoints"}>
				<div className={"col-md-3 infoPoint"}>
					<div className={"sectionWithArrow"}>
						<div>
							<img src={OnlineApplication} />
							<br />
							<div className={"label"}>
								Online <br />
								Application
							</div>
						</div>
						<img src={Arrow} className="arrow" />
					</div>
				</div>
				<div className={"col-md-3 infoPoint"}>
					<div className={"sectionWithArrow"}>
						<div>
							<img src={InstantApproval} />
							<br />
							<div className={"label"}>
								Get Instant
								<br />
								Online Approval
							</div>
						</div>
						<img src={Arrow} className="arrow" />
					</div>
				</div>
				<div className={"col-md-3 infoPoint"}>
					<div className={"sectionWithArrow"}>
						<div>
							<img src={DoorStep} className={"doorStep"} />
							<br />
							<div className={"label"}>
								Doorstep Document
								<br />
								Collection
							</div>
						</div>
						<img src={Arrow} className="arrow" />
					</div>
				</div>
				<div className={"col-md-3 infoPoint"}>
					<div className={"sectionWithArrow"}>
						<div>
							<img src={GetFunds} />
							<br />
							<div className={"label"}>
								Get Funds into
								<br />
								Your Account
							</div>
						</div>
						{/* <img src={Arrow} className="arrow" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}
