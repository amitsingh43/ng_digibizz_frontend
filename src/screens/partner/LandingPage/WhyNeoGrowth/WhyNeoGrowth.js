import React from "react";
import HappyCustomers from "assets/images/happycustomers.png";
import Vintage from "assets/images/vintage.png";
import Location from "assets/images/location.png";
import RegisteredNBFC from "assets/images/registerednbfc.png";
import Underline from "assets/images/underline.png";

const WhyNeoGrowth = () => {
	return (
		<div className={"infoArea"}>
			<div className={"sectionTitle"}>
				<div className={"titleWithUnderline"}>
					Why NeoGrowth
					<img src={Underline} />
				</div>
			</div>
			<div className={"row infoPoints"}>
				<div className={"col-md-6 infoPoint"}>
					<div className={"whyNG"}>
						<img src={Vintage} />
						<div>8+ years of Vintage</div>
					</div>
				</div>
				<div className={"col-md-6 infoPoint"}>
					<div className={"whyNG"}>
						<img src={HappyCustomers} className={"happyCustomers"} />
						<div>33000+ Happy Customers</div>
					</div>
				</div>
			</div>
			<div className={"row infoPoints"}>
				<div className={"col-md-6 infoPoint"}>
					<div className={"whyNG"}>
						<img src={Location} className={"locationImage"} />
						<div>Present in 25+ Cities</div>
					</div>
				</div>
				<div className={"col-md-6 infoPoint"}>
					<div className={"whyNG"}>
						<img src={RegisteredNBFC} />
						<div> RBI Registered NBFC</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyNeoGrowth;
