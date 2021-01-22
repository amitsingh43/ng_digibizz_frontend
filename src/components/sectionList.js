import "../styles/sectionList.css";

const VerticalList = (props) => {
	const section = props.section;
	return (
		<div className="v-main">
			<div className={section === 1 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Discovery</div>
			</div>

			<div className={section === 2 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Fullfilment</div>
			</div>

			<div className={section === 3 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Transactions</div>
			</div>

			<div className={section === 4 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Operations</div>
			</div>
			<div className={section === 5 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Engagement</div>
			</div>
		</div>
	);
};

const HorizontalSectionList = (props) => {
	const section = props.section;
	return (
		<div className="h-main">
			<div className="row col-xs-12 upper" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span
					className={
						section === 1
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Discovery
				</span>
				<span
					className={
						section === 2
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Fullfilment
				</span>
				<span
					className={
						section === 3
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Transactions
				</span>
				<span
					className={
						section === 4
							? "col-lg-2 col-xs-2 fade "
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Operations
				</span>
				<span
					className={
						section === 5
							? "col-lg-2 col-xs-2 fade"
							: "col-lg-2 col-xs-2 content"
					}
				>
					Digital Engagement
				</span>
			</div>
			<div className="row col-xs-12 mid" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span className="col-lg-2 col-xs-2">
					<div className={section === 1 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				<span className="col-lg-2 col-xs-2">
					<div className={section === 2 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				<span className="col-lg-2 col-xs-2">
					<div className={section === 3 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				<span className="col-lg-2 col-xs-2">
					<div className={section === 4 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				<span className="col-lg-2 col-xs-2">
					<div className={section === 5 ? "circle active" : "circle"}></div>
				</span>
			</div>
			<div className="row col-xs-12 below" style={{ margin: 0, padding: 0 }}>
				<div className="col-xs-1"></div>
				<span className="col-lg-2 col-xs-2 content">
					{section === 1 && "Digital Discovery"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{section === 2 && "Digital Fullfilment"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{section === 3 && "Digital Transactions"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{section === 4 && "Digital Operations"}
				</span>
				<span className="col-lg-2 col-xs-2 content">
					{section === 5 && "Digital Engagement"}
				</span>
			</div>
		</div>
	);
};

function SectionList(props) {
	const section = props.section;
	return (
		<div className="section-main col-xs-12">
			<VerticalList section={section} />
			<HorizontalSectionList section={section} />
		</div>
	);
}

export default SectionList;
