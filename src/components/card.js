import React from "react";
import "../styles/card.css";
const Percetage = ({ score }) => {
	return (
		<div className="percent">
			<div>{score !== undefined && <span>{score.percentage}%</span>}</div>
		</div>
	);
};
function Card(props) {
	return (
		<div className="card-main col-lg-2 ">
			<Percetage score={props.score} />
			<div className="img-title">
				<img src={props.image} alt="Section" />
				<h6>{props.title}</h6>
			</div>
			<p>{props.desc}</p>
		</div>
	);
}
export default Card;
