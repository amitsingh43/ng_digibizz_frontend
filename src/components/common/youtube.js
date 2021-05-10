import React from "react";
import "../../styles/common/youtube.css";

const YouTube = ({ videoId, toggleYoutube }) => {
	return (
		<div className={"youtubeContainer"}>
			{videoId && (
				<div>
					<div
						className={"closeButton"}
						onClick={() => {
							toggleYoutube((showYouTube) => ({
								...showYouTube,
								show: false,
								videoId: null,
							}));
						}}
					>
						Close
					</div>
					<iframe
						src={`https://www.youtube.com/embed/${videoId}`}
						frameborder="0"
						allow="autoplay; encrypted-media"
						allowfullscreen
						title="video"
					/>
				</div>
			)}
		</div>
	);
};

export default YouTube;
