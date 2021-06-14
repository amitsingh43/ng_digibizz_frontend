import { useHistory } from "react-router-dom";

const TopContent = ({ heading }) => {
	const history = useHistory();
	return (
		<div className="top-content">
			<div>
				<div
					style={{ cursor: "pointer", float: "left" }}
					onClick={() => history.push("/knowledgeCenter")}
				>
					Knowledge Center{"    >>   "}
				</div>
				<span style={{ clear: "both" }}>{heading}</span>
			</div>
		</div>
	);
};

export default TopContent;