const DataSection = ({ title, show, toggleShow, data, field }) => {
	return (
		<div>
			<div className={"descHeading"} key={title}>
				<h3>{title}</h3>
				<h3
					style={{
						cursor: "pointer",
						textAlign: "end",
						flex: 1,
						fontSize: 19,
						color: "#0070C0",
					}}
					onClick={() => toggleShow({ show, [field]: !show[field] })}
				>
					{show[field] ? "View less <" : "View more > "}
				</h3>
			</div>
			<hr style={{ padding: 0, margin: 0, marginBottom: 10 }} />
			<div>
				{field === "description" && (
					<div className={show[field] ? "hidden" : "active"}>
						<div>{data[0]}</div>
					</div>
				)}
				{data.map((val, index) => (
					<div key={index} className={show[field] ? "active" : "hidden"}>
						<div>{val}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DataSection;