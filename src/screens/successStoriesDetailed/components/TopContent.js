import { useHistory } from "react-router-dom";

const TopContent = ({ story }) => {
	const history = useHistory();
	return (
		<div className="top-content">
			<div>
				<div
					style={{ cursor: "pointer", float: "left" }}
					onClick={() => history.push("/successStories")}
				>
					{"Customer Success Stories    >>   "}
				</div>
				<span style={{ clear: "both" }}>{story.topContent}</span>
			</div>
		</div>
	);
};

export default TopContent;
