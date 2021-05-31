const OnlyContent = ({ heading, content, list }) => {
	return (
		<div className="only-content">
			{heading && <div className="section-heading">{heading}</div>}
			<p className="p">{content}</p>
			{list && (
				<ul>
					{list.map((point, index) => (
						<p key={index}>
							<li className="p">{point}</li>
						</p>
					))}
				</ul>
			)}
		</div>
	);
};

export default OnlyContent;