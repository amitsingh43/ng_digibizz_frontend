const VideoModal = ({ showVideo, toggleVideo }) => (
	<div
		style={{ display: "flex", flexDirection: "row", height: "400px" }}
		className="img-responsive"
	>
		<div style={{ cursor: "pointer" }} onClick={() => toggleVideo(!showVideo)}>
			✘
		</div>
		<iframe
			style={{ width: "100%", height: "100%" }}
			title="jfdsjj"
			frameBorder="0"
			wmode="Opaque"
			src={
				"https://www.youtube.com/embed/fW-eU-7SfMk" +
				"?modestbranding=1&autoplay=0&controls=0&rel=0&wmode=transparent"
			}
		/>
	</div>
);

export default VideoModal;