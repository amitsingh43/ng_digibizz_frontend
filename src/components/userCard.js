import React from "react";
import { Link } from "react-router-dom";

import "styles/userCard.css";
function UserCard(props) {
	const { heading, desc, image, id } = props;
	return (
		<div className="user-card row">
			<div className="col-md-1"></div>
			<div className="main-card col-md-10">
				<img className="col-md-4 img-responsive bg" src={image} alt="bg" />
				<div className="col-md-6 right">
					<div className="heading">{heading}</div>
					<p className="content">{desc}</p>
					<div style={{ width: "fit-content" }} className="read-more-outer">
						<Link to={"/knowledgeCenter/" + id}>
							<div className="read-more">Read more</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-md-1"></div>
		</div>
	);
}
export default UserCard;
