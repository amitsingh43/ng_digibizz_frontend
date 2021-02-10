import React from "react";
import loading from "../assets/loading.gif";
const Loading = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "none",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img src={loading} />
		</div>
	);
};
export default Loading;
