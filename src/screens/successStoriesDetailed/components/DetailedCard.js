import punctuation1 from "assets/punctuation1.svg";
import punctuation2 from "assets/punctuation2.svg";

const DetailedCard = ({ story }) => {
	const videoID = "LVUEIz-AAi4";
	return (
		<div className="col-lg-10 detailed-card-1">
			<div className="col-lg-6 left-content">
				<div className="row img-title col-xs-12">
					<div className="col-lg-4 img-div">
						<div
							className="col-lg-12 col-xs-4 profile-pic"
							style={{
								backgroundImage: `url(${story.image})`,
								backgroundSize: "contain",
							}}
						></div>
						{/* <img
							className="col-lg-12 col-xs-4 profile-pic"
							src={story.image}
							alt="profile_picture"
						/> */}
					</div>
					<div className="col-lg-8 col-xs-8 title-div">
						<div className="row title">
							<h3>{story.name}</h3>
							<div>{story.heading}</div>
						</div>
					</div>
				</div>
				<div className="row title-desc">
					<hr />
					<img className="punctuation1" alt="punctuation1" src={punctuation1} />
					<p>
						{story.content}
						<img
							className="punctuation2"
							alt="punctuation2"
							src={punctuation2}
						/>
					</p>
				</div>
			</div>
			<div
				className="img-responsive col-lg-6 col-xs-12 bgimage"
				style={{
					backgroundImage: `url(${story.image})`,
					border: 0,
				}}
			>
				{story.type === "video" && (
					<iframe
						style={{ width: "100%", height: "100%" }}
						title="jfdsjj"
						frameBorder="0"
						wmode="Opaque"
						src={
							"https://www.youtube.com/embed/" +
							story.videoID +
							"?modestbranding=1&autoplay=0&controls=0&rel=0&wmode=transparent"
						}
					>
						<h1 style={{ zIndex: 99, color: "yellow" }}>Close</h1>
					</iframe>
				)}
				{/* {!showVideo && story.type === "video" && (
					<img
						onClick={() => toggleVideo(!showVideo)}
						className="play-button"
						src={play_logo}
						alt="play_button"
					/>
				)} */}
			</div>
		</div>
	);
};

export default DetailedCard;