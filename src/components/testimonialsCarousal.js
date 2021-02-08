import React, { useState } from "react";
import "../styles/carousel.css";
import play_icon from "../assets/play_icon.svg";
import punctuation1 from "../assets/punctuation1.svg";
import punctuation2 from "../assets/punctuation2.svg";

import { SUCCESSDATA } from "../store/strings";
import { Link } from "react-router-dom";
function TestimonialsCarousal() {
	const [currentDisplayed, setCurrentDisplay] = useState(0);
	return (
		<div className="carousel-main">
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
				<div className="row carousel-inner">
					{SUCCESSDATA.map((item, index) => (
						<div
							className={`item col-lg-12 ${
								index === currentDisplayed ? "active" : ""
							}`}
						>
							<div className="col-lg-1"></div>
							<div
								className="col-lg-4 "
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundSize: "cover",
								}}
							>
								{item.type === "video" && (
									<img
										style={{ width: 50, height: 50 }}
										src={play_icon}
										alt="play-icon"
									/>
								)}
							</div>
							<span className="col-lg-6 content">
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
								class={currentDisplayed === index ? `active` : ""}
							></li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default TestimonialsCarousal;
