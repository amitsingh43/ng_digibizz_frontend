import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "styles/successCard.css";
import punctuation1 from "assets/punctuation1.svg";
import punctuation2 from "assets/punctuation2.svg";
import youtube from "assets/youtube.svg";

function SuccessCard({ headerState, name, heading, image, content, id, type }) {
	const history = useHistory();
	return (
		<div className="success-card row">
			<div className="item col-lg-10">
				<div className="containerr">
					<div
						className="thumbnail col-lg-5"
						style={{
							backgroundImage: `url(${image})`,
							// width: 300,
							// height: 300,
						}}
					>
						{type === "video" && (
							<img
								className="play-button"
								src={youtube}
								alt="Play button"
								onClick={() => {	console.log(id);history.push(`successStories/${id}`)}}
							/>
						)}
					</div>
					{/* <img className="img-responsive col-lg-4" src={image} alt="Person" /> */}
					<span className="col-lg-7 content">
						<h4>{name}</h4>
						<p className="industry">{heading}</p>

						<p className="">
							<img className="punctuation1" alt="''" src={punctuation1} />
							{content}
							<img className="punctuation2" alt="''" src={punctuation2} />
						</p>
						<Link className="a" to={`/successStories/${id}`}>
							<div className="view-more">
								{headerState !== 3 && "View more"}
								{headerState === 3 && "Read full story"}
							</div>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		headerState: state.headerState,
	};
};

export default connect(mapStateToProps, null)(SuccessCard);
