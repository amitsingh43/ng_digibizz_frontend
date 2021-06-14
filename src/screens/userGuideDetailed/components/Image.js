import { useHistory } from "react-router-dom";
import go_back from "assets/go_back.svg";

const Image = ({ image }) => {
	const history = useHistory();
	return (
		<div
			className="img-responsive  user-guide-top-image thumbnail"
			style={{
				backgroundImage: `url(${image})`,
				position: "relative",
				// backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
		>
			<img
				onClick={() => history.goBack()}
				className="go_back"
				src={go_back}
				alt="go_back"
				style={{ position: "absolute", left: 10, top: 10 }}
			/>
			{/* <img
				className="img-responsive col-lg-10 col-xs-12 thumbnail"
				src={image}
				alt="thumbnail"
			/> */}
		</div>
	);
};

export default Image;