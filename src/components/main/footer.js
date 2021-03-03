import React from "react";
import "../../styles/footer.css";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
	return (
		<div className="fixed-bottom">
			<div className="col-lg-5 gap"></div>
			<div className="col-lg-5 ">
				© Copyright {new Date().getFullYear()} NeoGrowth, All Rights Reserved .
				<a
					href="https://www.neogrowth.in/disclaimer/"
					target="_blank"
					style={{ textDecoration: "none", color: "white" }}
				>
					{" Disclaimer ."}
				</a>
				<a
					href="https://www.neogrowth.in/disclaimer/"
					target="_blank"
					style={{ textDecoration: "none", color: "white" }}
				>
					{" Privacy Policy"}
				</a>
			</div>
			<div className="images">
				{" "}
				<span>
					<a
						href="https://www.linkedin.com/in/neogrowth-credit-pvt-ltd-1696b6110"
						target="_blank"
					>
						<img src={linkedin} />
					</a>
				</span>
				<span>
					<a href="https://twitter.com/NeoGrowth_Loans" target="_blank">
						<img src={twitter} />
					</a>
				</span>
				<span>
					<a href="https://www.instagram.com/neogrowth_credit" target="_blank">
						<img src={insta} />
					</a>
				</span>
				<span>
					<a href="https://www.facebook.com/NeoGrowthCredit/" target="_blank">
						<img src={fb} />
					</a>
				</span>
			</div>
		</div>
	);
}
export default Footer;
