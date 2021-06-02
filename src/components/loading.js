import loading from "../assets/loading.gif";

const Loading = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img src={loading} />
		</div>
	);
};
export default Loading;
