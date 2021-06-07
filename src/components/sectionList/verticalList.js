const VerticalList = (props) => {
	const { section, questionsList, increment } = props;
	return (
		<div className="v-main">
			<div
				onClick={() => increment(1)}
				className={section === 1 ? "active step" : "step"}
			>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Discovery</div>
			</div>

			{questionsList.length !== 4 && (
				<div
					onClick={() => increment(2)}
					className={section === 2 ? "active step" : "step"}
				>
					<div className="v-stepper">
						<div className="circle"></div>
						<div className="line"></div>
					</div>

					<div className="content">Digital Fulfilment</div>
				</div>
			)}

			<div
				onClick={() => {
					if (questionsList.length === 5) {
						increment(3);
					} else if (questionsList.length === 4) {
						increment(2);
					}
				}}
				className={
					(section === 3 && questionsList.length === 5) ||
					(section === 2 && questionsList.length === 4)
						? "active step"
						: "step"
				}
			>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Transactions</div>
			</div>

			<div
				onClick={() => {
					if (questionsList.length === 5) {
						increment(4);
					} else if (questionsList.length === 4) {
						increment(3);
					}
				}}
				className={
					(section === 4 && questionsList.length === 5) ||
					(section === 3 && questionsList.length === 4)
						? "active step"
						: "step"
				}
			>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Operations</div>
			</div>
			<div
				onClick={() => {
					if (questionsList.length === 5) {
						increment(5);
					} else if (questionsList.length === 4) {
						increment(4);
					}
				}}
				className={
					(section === 5 && questionsList.length === 5) ||
					(section === 4 && questionsList.length === 4)
						? "active step"
						: "step"
				}
			>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Engagement</div>
			</div>
		</div>
	);
};

export default VerticalList;