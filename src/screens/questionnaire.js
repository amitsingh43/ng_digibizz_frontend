import React from "react";
import SectonList from "../components/sectionList";
import Loading from "../components/loading";
import "../styles/questionnaire.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
	increment,
	header_digital_status,
	decrement,
	add_answer,
	post_answers,
	get_questions,
	none_of_the_above,
} from "../store/actions";
import Footer from "../components/main/footer";
import { useEffect } from "react";
function Questionnaire({
	topicCounter,
	increment,
	header_digital_status,
	userDetails,
	decrement,
	add_answer,
	answers,
	questionsList,
	post_answers,
	get_questions,
	none_of_the_above,
}) {
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
		header_digital_status();
		if (questionsList.length === 0 && localStorage.getItem("lead_id")) {
			get_questions(localStorage.getItem("lead_id"));
		}
	}, []);
	if (localStorage.getItem("lead_id") === null) {
		history.push("/knowStatus");
		return <div>Redirecting</div>;
	}
	if (localStorage.getItem("report") === "true") {
		history.push("/report");
		return <div>Redirecting</div>;
	}
	const submit = () => {
		var final = [];
		answers.filter((answer) => final.push(answer.id));
		const body = {
			lead_id: localStorage.getItem("lead_id"),
			answers: final,
		};
		post_answers(body, history);
	};

	const next = () => {
		if (topicCounter === 4 && questionsList.length === 4) {
			submit();
			return;
		}
		if (topicCounter < 5) {
			increment();
			window.scrollTo(0, 0);
		} else {
			submit();
			// history.replace("/report");
		}
	};
	const _back = () => {
		window.scrollTo(0, 0);
		decrement();
	};
	const isChecked = (id) => {
		let length = answers.filter((val) => val.id === id).length;
		if (length) {
			return true;
		} else {
			return false;
		}
	};
	const updateAnswers = (question, id, type) => {
		add_answer({ question, id, type });
	};

	const DESELECT_ALL = (question, id, type) => {
		none_of_the_above({ question, id, type });
	};

	const inputProps = (question, option) => {
		const a = {
			type: question.multiple ? "checkbox" : "radio",
			id: option.id,
			// name: option.id,
			name: question._id,
			value: option._id,
			onChange: (e) => {
				if (option.name === "None of the above") {
					DESELECT_ALL(question.name, e.target.value, "none");
				} else {
					updateAnswers(
						question.name,
						e.target.value,
						question.multiple ? "checkbox" : "radio"
					);
				}
			},
		};
		if (isChecked(option._id) === true) {
			a["checked"] = "true";
		}

		return a;
	};
	const _selectAll = (name, listOfAnswers) => {
		listOfAnswers.forEach((ans) => {
			updateAnswers(name, ans._id, "checkbox");
		});
	};
	if (questionsList.length === 0) {
		return <Loading />;
	}
	return (
		<div className="main">
			<div className="main-content-questions">
				<div className="row">
					<div className="col-lg-4 col-xs-12">
						<SectonList section={topicCounter} />
					</div>
					<div className="col-lg-7 col-xs-12 ques">
						<ol>
							{questionsList.length > 0 &&
								questionsList[topicCounter - 1][
									"questionnaire_section_questions"
								].map((question, index) => (
									<div className="questions" key={index}>
										<li key={question._id}>{question.name}</li>
										{/* {question.multiple && (
										<div className="options">
											<input
												id={question._id}
												value={topicCounter}
												name={topicCounter}
												type="checkbox"
												onChange={() =>
													_selectAll(
														question.name,
														question.questionnaire_section_answers
													)
												}
											/>
											<label name={question._id}>
												Select All {topicCounter}
											</label>
										</div>
									)} */}
										{question.questionnaire_section_answers.map(
											(option, index) => (
												<div className="options" key={index}>
													<input {...inputProps(question, option)} required />
													<label name={option._id}>{option.name}</label>
												</div>
											)
										)}
									</div>
								))}
						</ol>
					</div>
					<div className="col-lg-1"></div>
				</div>
				<div className="row row2">
					<div className="col-lg-4"></div>
					{topicCounter !== 1 && (
						<div className="col-lg-2 col-sm-6">
							<Link className="a">
								<div className="button back" onClick={_back}>
									Back
								</div>
							</Link>
						</div>
					)}
					<div className="col-lg-2 col-sm-6">
						<div className="button" onClick={next}>
							{((topicCounter < 5 && questionsList.length === 5) ||
								(topicCounter < 4 && questionsList.length === 4)) &&
								"Next"}
							{((topicCounter === 5 && questionsList.length === 5) ||
								(topicCounter == 4 && questionsList.length === 4)) &&
								"Submit"}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	const { questionCounter, userDetails, answers, questionsList } = state;
	return {
		topicCounter: questionCounter,
		userDetails: userDetails,
		answers: answers,
		questionsList: questionsList,
	};
};

export default connect(mapStateToProps, {
	increment,
	header_digital_status,
	decrement,
	add_answer,
	post_answers,
	get_questions,
	none_of_the_above,
})(Questionnaire);
