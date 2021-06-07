const HorizontalSectionList = (props) => {
	const { section, questionsList, increment } = props;
	return (
		<div className="h-main">
			<div className="row col-xs-12 upper" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span
					className={
						section === 1 ? "col-lg-2 col-xs-2 fade" : "col-lg-2 col-xs-2 content"
					}
				>
					Digital Discovery
				</span>
				{questionsList.length !== 4 && (
					<span
						className={
							section === 2 ? "col-lg-2 col-xs-2 fade" : "col-lg-2 col-xs-2 content"
						}
					>
						Digital Fulfilment
					</span>
				)}
				<span
					className={
						(section === 3 && questionsList.length === 5) ||
						(section === 2 && questionsList.length === 4)
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Transactions
				</span>
				<span
					className={
						(section === 4 && questionsList.length === 5) ||
						(section === 3 && questionsList.length === 4)
							? "col-lg-2 col-xs-2 fade "
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Operations
				</span>
				<span
					className={
						(section === 5 && questionsList.length === 5) ||
						(section === 4 && questionsList.length === 4)
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Engagement
				</span>
			</div>
			<div className="row col-xs-12 mid" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span onClick={() => increment(1)} className="col-lg-2 col-xs-2">
					<div className={section === 1 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				{questionsList.length !== 4 && (
					<span onClick={() => increment(2)} className="col-lg-2 col-xs-2">
						<div className={section === 2 ? "circle active" : "circle"}>
							<div className="line"></div>
						</div>
					</span>
				)}
				<span
					onClick={() => {
						questionsList.length === 5 ? increment(3) : increment(2);
					}}
					className="col-lg-2 col-xs-2"
				>
					<div
						className={
							(section === 3 && questionsList.length === 5) ||
							(section === 2 && questionsList.length === 4)
								? "circle active"
								: "circle"
						}
					>
						<div className="line"></div>
					</div>
				</span>
				<span
					onClick={() => {
						questionsList.length === 5 ? increment(4) : increment(3);
					}}
					className="col-lg-2 col-xs-2"
				>
					<div
						className={
							(section === 4 && questionsList.length === 5) ||
							(section === 3 && questionsList.length === 4)
								? "circle active"
								: "circle"
						}
					>
						<div className="line"></div>
					</div>
				</span>
				<span
					onClick={() => {
						questionsList.length === 5 ? increment(5) : increment(4);
					}}
					className="col-lg-2 col-xs-2"
				>
					<div
						className={
							(section === 5 && questionsList.length === 5) ||
							(section === 4 && questionsList.length === 4)
								? "circle active"
								: "circle"
						}
					></div>
				</span>
			</div>
			<div className="row col-xs-12 below" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span className="col-lg-2 col-xs-2 content">
					{section === 1 && "Digital Discovery"}
				</span>
				{questionsList.length !== 4 && (
					<span className="col-lg-2 col-xs-2 content">
						{section === 2 && "Digital Fulfilment"}
					</span>
				)}
				<span className="col-lg-2 col-xs-2 content">
					{((section === 3 && questionsList.length === 5) ||
						(section === 2 && questionsList.length === 4)) &&
						"Digital Transactions"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{((section === 4 && questionsList.length === 5) ||
						(section === 3 && questionsList.length === 4)) &&
						"Digital Operations"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{((section === 5 && questionsList.length === 5) ||
						(section === 4 && questionsList.length === 4)) &&
						"Digital Engagement"}
				</span>
			</div>
		</div>
	);
};

export default HorizontalSectionList;