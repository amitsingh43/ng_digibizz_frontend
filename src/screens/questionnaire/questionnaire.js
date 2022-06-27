import {useEffect, useState} from "react";

import SectionList from "components/sectionList";
import {Link, useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import "styles/questionnaire.css";
import Loading from "components/loading";
import {
    decrement,
    add_answer,
    none_of_the_above,
    createQuestionnare,
    get_questions,
    get_questions_two,
    add_answers,
} from "./store/actions";
import show_toast from "util/showToast";
import {header_digital_status} from "store/actions";
import contest_banner from "assets/contest_banner.png";

let answered = [];
let distinct = [];
let count = 0;
let checked = {};
let prevTopicCounter = -1;

export default function Questionnaire() {
    const[lead, setLead] = useState(localStorage.getItem("lead_id"));
    const topicCounter = useSelector((state) => state.questionCounter);
    const answers = useSelector((state) => state.answers);
    const lead_data = useSelector((state) => state.userDetails);
    const questionsList = useSelector((state) => state.questionsList);
    const dispatch = useDispatch();

    const history = useHistory();
    const {section} = useParams();
    console.log({topicCounter: topicCounter});
    console.log({answers: answers});
    console.log({lead_data: lead_data && lead_data.user});

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(header_digital_status());
        if (questionsList.length === 0 && localStorage.getItem("lead_id")){
            dispatch(get_questions(localStorage.getItem("lead_id")));
            //dispatch(get_questions_two(localStorage.getItem("lead_id"), false, null));
        }else{
            localStorage.clear();
        }
        /*if (questionsList.length === 0 && localStorage.getItem("lead_id")) {
            dispatch(get_questions_two(localStorage.getItem("lead_id")));
        }*/
        answered = [];
        distinct = [];
        count = 0;
        checked = {};
        prevTopicCounter = -1;


        }, []);

    useEffect(() => {
        let urlName = section;
        if (questionsList[0] && questionsList[0].name) {
            let data = questionsList.find((val) => {
                let secName = val.name;
                secName = secName.split(" ")[1].toLowerCase();
                return urlName === secName;
            });
            if (!data) {
                history.replace(`/questionnaire/discovery`);
            }
        }
    }, [section, questionsList]);

    useEffect(() => {
        if (
            prevTopicCounter !== topicCounter &&
            questionsList[topicCounter - 1] &&
            questionsList[topicCounter - 1].name
        ) {
            prevTopicCounter = topicCounter;
            let sectionName = questionsList[topicCounter - 1].name
                .split(" ")[1]
                .toLowerCase();
            history.replace(`/questionnaire/${sectionName}`);
        }
    }, [topicCounter]);

    if (lead === null) {
        history.push("/knowStatus");
        return <div>Redirecting</div>;
    }
    if (localStorage.getItem("report") === "true") {
        history.push("/report");
        return <div>Redirecting</div>;
    }

    const next = () => {
        var ss = [];
        answers.forEach((val) => {
            if (val.section === topicCounter - 1) {
                ss.push(val);
            }
        });

        console.log({answered: answers,topicCounter: topicCounter-1, q_length:  questionsList[topicCounter - 1]?.questionnaire_section_questions.length, ss: ss.length});
        if (
            ss.length <
            questionsList[topicCounter - 1]?.questionnaire_section_questions.length
        ) {
            show_toast("Please answer all the questions");
            return;
        }

        console.log({selected_op: answers.filter((val) => val.section === topicCounter - 1)});

        dispatch(
            createQuestionnare(
                lead_data && lead_data.user && lead_data.user.medium === "drop_off" ? true : false,
                lead,
                answers.filter((val) => val.section === topicCounter - 1),
                questionsList[topicCounter - 1]["name"],
                questionsList[topicCounter - 1]["name"] ===
                questionsList[questionsList.length - 1]["name"],
                history,
            )
        );
        window.scrollTo(0, 0);
    };

    const _back = () => {
        window.scrollTo(0, 0);
        dispatch(decrement());
    };

    const isChecked = (id) => {
        /*let ret = false;
        for (let j = 0; j < answers.length; j++) {
            let ans = answers[j];
            //console.log({fr: ans});
            if (ans.id == id){
                ret = true;
                console.log({id: ans.id});
            }
        }
        return ret;*/

        let length = answers.filter((val) => val.id === id).length;
        if (length) {
            return true;
        } else {
            return false;
        }
    };

    const updateAnswers = (question, id, type) => {
        let section = topicCounter - 1
        dispatch(add_answer({question, id, type, section}));

        /*var x = answered.find((val) => val.question === question && val.id === id);
        if (x !== undefined) {
            answered.splice(answered.indexOf(x), 1);
            distinct.splice(distinct.indexOf(x), 1);
        } else {
            answered.push({
                question: question,
                id: id,
                section: topicCounter - 1,
                type,
            });
        }*/
    };

    const DESELECT_ALL = (question, id, type, optionName) => {
        dispatch(none_of_the_above({question, id, type}));
        var x = answered.find((val) => val.question === question && val.id === id);
        if (x !== undefined) {
            answered.splice(answered.indexOf(x), 1);
        } else {
            answered.push({
                question: question,
                id: id,
                section: topicCounter - 1,
                optionName,
                type: "checkbox",
            });
        }
    };

    const inputProps = (question, option) => {
        const a = {
            type: question.multiple ? "checkbox" : "radio",
            id: option.id,
            // name: option.id,
            name: question._id,
            value: option._id,
            onChange: (e) => {
                if (
                    option.name.toLowerCase() === "none of the above" ||
                    option.name.toLowerCase() === "i don't deliver currently"
                ) {
                    DESELECT_ALL(
                        question.name,
                        e.target.value,
                        "none",
                        option.name.toLowerCase()
                    );
                } else {
                    updateAnswers(
                        question.name,
                        e.target.value,
                        question.multiple ? "checkbox" : "radio"
                    );
                }
            },
        };


        a["checked"] = isChecked(option._id);

        return a;
    };

    // const _selectAll = (name, listOfAnswers) => {
    //   listOfAnswers.forEach((ans) => {
    //     updateAnswers(name, ans._id, "checkbox");
    //   });
    // };
    const getQuestionsLength = () => {
        var length = 0;
        questionsList.map((sections) => {
            length += sections["questionnaire_section_questions"].length;
        });
        return length;
    };

    const getAnsweredQuestionsLength = () => {
        answered.map((answer) => {
            if (!distinct.includes(answer.question)) {
                distinct.push(answer.question);
            }
        });
        return distinct.length;
    };

    const autoPopulate = () => {
        var xx = answered.filter((answer) => answer.section === topicCounter - 1);
        xx.forEach((val) => {
            if (val.type === "checkbox") {
                if (val.optionName === "none of the above") {
                    count++;
                }
            }
            if (val.type === "radio") {
                count++;
            }
        });
        if (
            count !== 0 &&
            count === xx.length &&
            count ===
            questionsList[topicCounter - 1]?.questionnaire_section_questions
                .length &&
            topicCounter - 1 !== questionsList.length &&
            !checked[topicCounter - 1]
        ) {
            dispatch(
                createQuestionnare(
                    answered.filter((val) => val.section === topicCounter - 1),
                    questionsList[topicCounter - 1]["name"],
                    questionsList[topicCounter - 1]["name"] ===
                    questionsList[questionsList.length - 1]["name"],
                    history
                )
            );
            checked[topicCounter - 1] = true;
            count = 0;
        } else {
            count = 0;
        }
    };

    if (questionsList.length === 0) {
        return <Loading/>;
    }

    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        window.addEventListener("unload", handleTabClosing);
        return () => {
            window.removeEventListener("beforeunload", alertUser);
            window.removeEventListener("unload", handleTabClosing);
        };
    });

    const handleTabClosing = () => {
        removePlayerFromGame();
    };

    const alertUser = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };

    return (
        <div className="main">
            {autoPopulate()}

            <div style={{height: 3, width: "100vw", backgroundColor: "grey"}}>
                <div
                    style={{
                        height: 3,
                        width: `${
                            (100 * getAnsweredQuestionsLength()) / getQuestionsLength()
                        }vw`,
                        backgroundColor: "lightgreen",
                    }}
                ></div>
            </div>

            <div className="main-content-questions">
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        <SectionList
                            contest_banner={contest_banner}
                            section={topicCounter}
                        />
                    </div>
                    <div className="col-lg-7 col-xs-12 ques">
                        <ol>

                            {questionsList.length > 0 && questionsList[topicCounter - 1]?.questionnaire_section_questions.map((question, index) => {

                                return(
                                    <div className="questions" key={index}>
                                        <li key={question._id}>{question.name}</li>
                                        {question.questionnaire_section_answers.map(
                                            (option, index) => (
                                                <div className="options" key={index}>


                                                    <input {...inputProps(question, option)}
                                                           required/>
                                                    <label name={option._id}>{option.name}</label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )
                            })}
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


        </div>
    );
}
