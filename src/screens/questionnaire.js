import SectonList from "../components/sectionList";
import "../styles/questionnaire.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
	increment,
	header_digital_status,
	decrement,
	add_answer,
	get_questions_from_api,
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
	get_questions_from_api,
}) {
	const history = useHistory();
	useEffect(() => {
		window.scrollTo(0, 0);
		get_questions_from_api();
	}, []);
	// if (userDetails.user === null) {
	// 	history.push("/knowStatus");
	// 	return <div>Redirecting</div>;
	// }
	header_digital_status();
	const submit = () => {
		var final = [];
		answers.filter((answer) => final.push(answer.id));
		alert(final);
	};
	const next = () => {
		if (topicCounter < 5) {
			increment();
			window.scrollTo(0, 0);
		} else {
			submit();
			history.replace("/report");
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

	const inputProps = (question, option) => {
		const a = {
			type: question.multiple ? "checkbox" : "radio",
			id: option.id,
			// name: option.id,
			name: question._id,
			value: option._id,
			onChange: (e) =>
				updateAnswers(
					question.name,
					e.target.value,
					question.multiple ? "checkbox" : "radio"
				),
		};
		if (isChecked(option._id) === true) {
			a["checked"] = "true";
		}

		return a;
	};
	return (
		<div className="main">
			<div className="row">
				<div className="col-lg-4 col-xs-12">
					<SectonList section={topicCounter} />
				</div>
				<div className="col-lg-7 col-xs-12 ques">
					<ol>
						{questionsList.length > 0 &&
							questionsList[topicCounter - 1][
								"questionnaire_section_questions"
							].map((question) => (
								<div className="questions">
									<li key={question._id}>{question.name}</li>
									{question.questionnaire_section_answers.map((option) => (
										<div className="options">
											<input {...inputProps(question, option)} />
											<label name={option._id}>{option.name}</label>
										</div>
									))}
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
						{topicCounter < 5 && "Next"}
						{topicCounter === 5 && "Submit"}
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
	get_questions_from_api,
})(Questionnaire);
