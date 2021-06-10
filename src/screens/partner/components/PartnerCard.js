import { useState, useEffect} from "react";
import YouTube from "components/common/youtube";

const PartnerCard = ({ image, offer, backgroundColor, title, carousel }) => {
	const [currentDisplayed, setCurrentDisplay] = useState(0);
	const [showYouTube, toggleYoutube] = useState({ show: false, videoId: null });

	useEffect(() => {
		$(".carousel").carousel({
			interval: 4000,
		});
	}, []);

	return (
		<div className="partner-main-partner-card">
			{showYouTube.show && (
				<YouTube
					videoId={showYouTube.videoId}
					toggleYoutube={toggleYoutube}
					showYouTube={showYouTube}
				/>
			)}
			<div className="carousel-main">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
					// data-touch="true"
					data-interval="4000"
				>
					<div className="carousel-inner">
						{carousel &&
							carousel.map((item, index) => (
								<div
									onClick={() => {
										if (item.type === "video") {
											toggleYoutube((showYouTube) => ({
												showYouTube,
												show: true,
												videoId: item.videoID,
											}));
										}
									}}
									style={{
										backgroundImage: `url(${item.source})`,
										cursor: item.type === "video" ? "pointer" : "auto",
									}}
									key={index}
									className={`item  ${
										index === currentDisplayed
											? "active carousel-image"
											: "carousel-image"
									}`}
								>
									{/* <img src={item.source} /> */}
								</div>
							))}
					</div>
					{carousel.length !== 1 && (
						<div className={`row `}>
							<ol className="carousel-indicators">
								{carousel.map((val, index) => (
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
					)}
				</div>
			</div>
		</div>
	);
};

export default PartnerCard;