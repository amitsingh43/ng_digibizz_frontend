const Content = ({ data }) => {
	const { heading, desc, list } = data;
	return (
		<div>
			<h3>{heading}</h3>
			{desc &&
				desc.map((para, index) => (
					<p key={index} style={{ color: "#68696A" }}>
						{para}
					</p>
				))}
			{list && (
				<ul>
					{list.map((point, index) => (
						<li key={index}>
							<span style={{ color: "black", fontWeight: "bold" }}>
								{point.bullet}
							</span>
							{point.content}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Content;