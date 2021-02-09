import "../styles/gotoTop.css";
const GotoTop = () => {
	window.onscroll = function () {
		if (
			document.body.scrollTop > 40 ||
			document.documentElement.scrollTop > 40
		) {
			document.getElementById("go-to-top").style.display = "flex";
		} else {
			document.getElementById("go-to-top").style.display = "none";
		}
	};
	return (
		<div
			onClick={() => {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}}
			id="go-to-top"
			style={{
				width: 50,
				zIndex: 1000,
				height: 50,
				paddingTop: 10,
				paddingBottom: 10,
				// backgroundColor: "#28b04b",
				color: "white",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "fixed",
				bottom: 130,
				right: 50,
				cursor: "pointer",
			}}
		>
			<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzY3Ljg1IDM2Ny44NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY3Ljg1IDM2Ny44NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMTguMTcsMTYyLjg1bC0xMjgtMTYwYy0zLjAzMi0zLjgtOS40NjQtMy44LTEyLjQ5NiwwbC0xMjgsMTYwYy0xLjkyLDIuNC0yLjI5Niw1LjY4OC0wLjk2OCw4LjQ2NA0KCQkJYzEuMzQ0LDIuNzc2LDQuMTUyLDQuNTM2LDcuMjI0LDQuNTM2aDcydjE3NmMwLDguODI0LDcuMTc2LDE2LDE2LDE2aDgwYzguODI0LDAsMTYtNy4xNzYsMTYtMTZ2LTE3Nmg3Mg0KCQkJYzMuMDcyLDAsNS44OC0xLjc2LDcuMjA4LTQuNTM2QzMyMC40NzQsMTY4LjU0NiwzMjAuMDk4LDE2NS4yNSwzMTguMTcsMTYyLjg1eiBNMjMxLjkzLDE1OS44NWMtNC40MTYsMC04LDMuNTg0LTgsOHYxODRoLTgwdi0xODQNCgkJCWMwLTQuNDE2LTMuNTg0LTgtOC04SDcyLjU3OEwxODMuOTMsMjAuNjU4TDI5NS4yODIsMTU5Ljg1SDIzMS45M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
		</div>
	);
};

export default GotoTop;
