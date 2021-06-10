const ImageContent = ({ image, content, type }) => {
	if (type === "left") {
		return (
			<div className="img-content">
				<img src={image} alt="theft" />
				<p>{content}</p>
			</div>
		);
	} else {
		return (
			<div className="right-img-content">
				<img src={image} alt="theft" />
				<p>{content}</p>
			</div>
		);
	}
};

export default ImageContent;