import { useHistory } from "react-router-dom";
import { services } from "store/services_mapping";

const MobileView = () => {
	const history = useHistory();
	return (
		<div className="mobile-view">
			{services.map((service) => (
				<div
					className="service"
					style={{ cursor: "pointer" }}
					onClick={() => {
						history.push({
							pathname: "/services",
							state: { id: service.tag },
						});
					}}
					key={service.label}
				>
					<img src={service.image} alt="img" />
					<div className="labell">{service.label}</div>
				</div>
			))}
			<div style={{ clear: "both" }}></div>
		</div>
	);
};

export default MobileView;