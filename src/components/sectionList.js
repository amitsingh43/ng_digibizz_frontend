import React from "react";
import "../styles/sectionList.css";
import { connect } from "react-redux";

const VerticalList = (props) => {
	const { section, questionsList } = props;
	return (
		<div className="v-main">
			<div className={section === 1 ? "active step" : "step"}>
				<div className="v-stepper">
					<div className="circle"></div>
					<div className="line"></div>
				</div>

				<div className="content">Digital Discovery</div>
			</div>

			{questionsList.length !== 4 && (
				<div className={section === 2 ? "active step" : "step"}>
					<div className="v-stepper">
						<div className="circle"></div>
						<div className="line"></div>
					</div>

					<div className="content">Digital Fullfilment</div>
				</div>
			)}

			<div
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

const HorizontalSectionList = (props) => {
	const { section, questionsList } = props;
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
				{questionsList.length !== 4 && (
					<span
						className={
							section === 2
								? "col-lg-2 col-xs-2 fade"
								: "col-lg-2 col-xs-2 content"
						}
					>
						Digital Fullfilment
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
				<span className="col-lg-2 col-xs-2">
					<div className={section === 1 ? "circle active" : "circle"}>
						<div className="line"></div>
					</div>
				</span>
				{questionsList.length !== 4 && (
					<span className="col-lg-2 col-xs-2">
						<div className={section === 2 ? "circle active" : "circle"}>
							<div className="line"></div>
						</div>
					</span>
				)}
				<span className="col-lg-2 col-xs-2">
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
				<span className="col-lg-2 col-xs-2">
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
				<span className="col-lg-2 col-xs-2">
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
						{section === 2 && "Digital Fullfilment"}
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

function SectionList(props) {
	const { section, questionsList } = props;
	return (
		<div className="section-main col-xs-12">
			<VerticalList questionsList={questionsList} section={section} />
			<HorizontalSectionList questionsList={questionsList} section={section} />
		</div>
	);
}

const mapStateToProps = (state) => {
	const { questionsList } = state;
	return {
		questionsList,
	};
};

export default connect(mapStateToProps, null)(SectionList);
