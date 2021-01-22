import "../styles/card.css";
const Percetage = () => {
	return (
		<div className="percent">
			<div>
				<span>55%</span>
			</div>
		</div>
	);
};
function Card(props) {
	return (
		<div className="card-main col-lg-2 ">
			<Percetage />
			<div className="img-title">
				<img src={props.image} alt="Digital Engagement" />
				<h6>{props.title}</h6>
			</div>
			<p>{props.desc}</p>
		</div>
	);
}
export default Card;
