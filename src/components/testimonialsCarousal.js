import React, { useState } from "react";
import "../styles/carousel.css";
import play_icon from "../assets/play_icon.svg";
import punctuation1 from "../assets/punctuation1.svg";
import punctuation2 from "../assets/punctuation2.svg";

import { SUCCESSDATA } from "../store/strings";
import { Link, useHistory } from "react-router-dom";
function TestimonialsCarousal() {
	const [currentDisplayed, setCurrentDisplay] = useState(0);
	const history = useHistory();
	return (
		<div className="carousel-main">
			<div
				id="myCarousel"
				className="carousel slide"
				data-ride="carousel"
				data-interval="4000"
			>
				<div className="row carousel-inner">
					{SUCCESSDATA.map((item, index) => (
						<div
							className={`item col-lg-12 ${
								index === currentDisplayed ? "active" : ""
							}`}
							key={index}
						>
							<div className="col-lg-1"></div>
							<div
								className="col-lg-5 person"
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							>
								{item.type === "video" && (
									<img
										onClick={() => history.push(`successStories/${item.id}`)}
										style={{ width: 50, height: 50, cursor: "pointer" }}
										src={play_icon}
										alt="play-icon"
									/>
								)}
							</div>
							<span className="col-lg-5 content">
								<h5>{item.name}</h5>
								<p className="industry">{item.heading}</p>
								<img className="punctuation1" alt="Person" src={punctuation1} />
								<p>
									{item.content}
									<img className="punctuation2" alt="''" src={punctuation2} />
								</p>
								<Link to={"/successStories/" + item.id}>
									<div className="view-more">View more</div>
								</Link>{" "}
							</span>
							<div className="col-lg-1"></div>
						</div>
					))}
				</div>
				<div className="row" style={{ paddingTop: 30 }}>
					<ol className="carousel-indicators">
						{SUCCESSDATA.map((val, index) => (
							<li
								data-target="#myCarousel"
								data-slide-to={index}
								onClick={() => setCurrentDisplay(index)}
								className={currentDisplayed === index ? `active` : ""}
								key={index}
							></li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default TestimonialsCarousal;
