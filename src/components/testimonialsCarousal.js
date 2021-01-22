import "../styles/carousel.css";
import play_icon from "../assets/play_icon.svg";
import punctuation1 from "../assets/punctuation1.svg";
import punctuation2 from "../assets/punctuation2.svg";

import { SUCCESSDATA } from "../store/strings";
import { Link } from "react-router-dom";
function TestimonialsCarousal() {
	return (
		<div className="carousel-main">
			<div id="myCarousel" className=" carousel slide" data-ride="carousel">
				<div className=" row carousel-inner ">
					<div className="item col-lg-12 active">
						<div className="col-lg-1"></div>
						<div
							className="col-lg-4 img-responsive"
							style={{ backgroundImage: `url(${SUCCESSDATA[0].image})` }}
						>
							{SUCCESSDATA[0].type === "video" && (
								<img
									style={{ width: 50, height: 50 }}
									src={play_icon}
									alt="play-icon"
								/>
							)}
						</div>
						<span className="col-lg-6 content">
							<h5>{SUCCESSDATA[0].name}</h5>
							<p className="industry">{SUCCESSDATA[0].heading}</p>
							<img className="punctuation1" alt="Person" src={punctuation1} />
							<p>
								{SUCCESSDATA[0].content}
								<img className="punctuation2" alt="''" src={punctuation2} />
							</p>
							<Link to="/successStories">
								<div className="view-more">View more</div>
							</Link>{" "}
						</span>
						<div className="col-lg-1"></div>
					</div>

					<div className="item col-lg-12">
						<div className="col-lg-1"></div>
						<div
							className="col-lg-4 img-responsive"
							style={{ backgroundImage: `url(${SUCCESSDATA[1].image})` }}
						>
							{SUCCESSDATA[1].type === "video" && (
								<img
									style={{ width: 50, height: 50 }}
									src={play_icon}
									alt="play-icon"
								/>
							)}
						</div>
						<span className="col-lg-6 content">
							<h5>{SUCCESSDATA[1].name}</h5>
							<p className="industry">{SUCCESSDATA[1].heading}</p>
							<img
								className="punctuation1"
								alt="punctuation"
								src={punctuation2}
							/>
							<p>
								{SUCCESSDATA[1].content}
								<img
									className="punctuation2"
									alt="punctuation"
									src={punctuation2}
								/>
							</p>
							<Link to="/successStories">
								<div className="view-more">View more</div>
							</Link>{" "}
						</span>
						<div className="col-lg-1"></div>
					</div>

					<div className="item col-lg-12">
						<div className="col-lg-1"></div>
						<div
							className="col-lg-4 img-responsive"
							style={{ backgroundImage: `url(${SUCCESSDATA[2].image})` }}
						>
							{SUCCESSDATA[2].type === "video" && (
								<img
									style={{ width: 50, height: 50 }}
									src={play_icon}
									alt="play-icon"
								/>
							)}
						</div>
						<span className="col-lg-6 content">
							<h5>{SUCCESSDATA[2].name}</h5>
							<p className="industry">{SUCCESSDATA[2].heading}</p>
							<img className="punctuation1" alt="''" src={punctuation2} />

							<p>
								{SUCCESSDATA[2].content}
								<img className="punctuation2" alt="''" src={punctuation2} />
							</p>
							<Link to="/successStories">
								<div className="view-more">View more</div>
							</Link>
						</span>
						<div className="col-lg-1"></div>
					</div>
				</div>
				<div className="row" style={{ paddingTop: 30 }}>
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default TestimonialsCarousal;
