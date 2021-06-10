const ServiceIcon = (props) => {
	const { img, label, tag } = props;

	return (
		<div
			onClick={() => {
				window.location.href = window.location + `services#${tag}`;
			}}
			className="col-sm-4 col-md-2 s-icon"
		>
			<img src={img} alt="service" />
			<div>{label}</div>
		</div>
	);
};

export default ServiceIcon;