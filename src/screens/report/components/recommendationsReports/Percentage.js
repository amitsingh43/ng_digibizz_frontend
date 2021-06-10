const Percentage = (props) => {
	const { image_url } = props;
	return (
		<div className="percentagee ">
			<div className="justify-content-md-center">
				<img src={image_url} alt="service" />
			</div>
		</div>
	);
};

export default Percentage;