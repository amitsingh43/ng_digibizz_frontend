import { useEffect, useState } from "react";
import { connect } from "react-redux";
import punctuation1 from "../assets/punctuation1.svg";
import punctuation2 from "../assets/punctuation2.svg";
import { header_success_stories } from "../store/actions";
import Footer from "../components/main/footer";
import "../styles/successStoriesDetailed.css";
import play_logo from "../assets/youtube.svg";
import { SUCCESSDATA } from "../store/strings";
const TopContent = () => {
	return (
		<div className="top-content">
			<div>
				{"Success Stories    >>   "}
				<span>JOS ALUKAS</span>
			</div>
		</div>
	);
};

const DetailedCard = () => {
	const [showVideo, toggleVideo] = useState(false);
	const videoID = "ETNQ0BXkyQU";
	return (
		<div className="col-lg-10 detailed-card-1">
			<div className="col-lg-6 left-content">
				<div className="row img-title col-xs-12">
					<div className="col-lg-4 img-div">
						<img
							className="col-lg-12 col-xs-4 profile-pic"
							src={SUCCESSDATA[0].image}
							alt="profile_picture"
						/>
					</div>
					<div className="col-lg-8 col-xs-8 title-div">
						<div className="row title">
							<h3>{SUCCESSDATA[0].name}</h3>
							<div>{SUCCESSDATA[0].heading}</div>
						</div>
					</div>
				</div>
				<div className="row title-desc">
					<hr />
					<img className="punctuation1" alt="punctuation1" src={punctuation1} />
					<p>
						{SUCCESSDATA[0].content}
						<img
							className="punctuation2"
							alt="punctuation2"
							src={punctuation2}
						/>
					</p>
				</div>
			</div>
			<div
				className="img-responsive col-lg-6 col-xs-12 thumbnail"
				style={{
					backgroundImage: `url(${SUCCESSDATA[0].image})`,
					border: 0,
				}}
			>
				{showVideo && (
					<iframe
						title="jfdsjj"
						frameborder="0"
						wmode="Opaque"
						src={
							"https://www.youtube.com/embed/" +
							videoID +
							"?modestbranding=1&autoplay=1&controls=0&rel=0&wmode=transparent"
						}
					>
						<h1 style={{ zIndex: 99, color: "yellow" }}>Close</h1>
					</iframe>
				)}
				{!showVideo && (
					<img
						onClick={() => toggleVideo(!showVideo)}
						className="play-button"
						src={play_logo}
						alt="play_button"
					/>
				)}
			</div>
		</div>
	);
};

const MainContent = () => {
	const styles = { fontSize: 16, lineHeight: 2 };
	return (
		<div className="main-content col-lg-10" style={styles}>
			<p style={{ fontSize: 13, marginTop: 30 }}>
				Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
				laying out print, graphic or web designs. The passage is attributed to
				an unknown typesetter in the 15th century who is thought to have
				scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
				type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.” The purpose of lorem ipsum is to create a
				natural looking block of text (sentence, paragraph, page, etc.) that
				doesn't distract from the layout. A practice not without controversy,
				laying out pages with meaningless filler text can be very useful when
				the focus is meant to be on design, not content.
			</p>
		</div>
	);
};

function SuccessStoriesDetailed({ header_success_stories }) {
	useEffect(() => {
		header_success_stories();
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="success-stories-detailed">
			<div className="row">
				<TopContent />
			</div>
			<div className="row">
				<DetailedCard />
			</div>
			<div className="row">
				<MainContent />
			</div>
			<Footer />
		</div>
	);
}

export default connect(null, { header_success_stories })(
	SuccessStoriesDetailed
);
